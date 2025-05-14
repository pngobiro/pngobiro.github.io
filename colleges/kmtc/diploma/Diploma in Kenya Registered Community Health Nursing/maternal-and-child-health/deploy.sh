#!/bin/bash

# Create production directory
echo "Creating production directory..."
mkdir -p dist

# Create necessary subdirectories
mkdir -p dist/js
mkdir -p dist/styles
mkdir -p dist/topics
mkdir -p dist/assets/icons

# Copy and minify HTML files
echo "Minifying HTML files..."
for file in *.html; do
    if [ -f "$file" ]; then
        sed 's/>[[:space:]]\+</></g' "$file" | sed '/^[[:space:]]*$/d' > "dist/$file"
    fi
done

for file in topics/*.html; do
    if [ -f "$file" ]; then
        mkdir -p "dist/$(dirname "$file")"
        sed 's/>[[:space:]]\+</></g' "$file" | sed '/^[[:space:]]*$/d' > "dist/$file"
    fi
done

# Copy and minify CSS
echo "Minifying CSS files..."
for file in styles/*.css; do
    if [ -f "$file" ]; then
        sed 's/[[:space:]]*{/{/g; s/[[:space:]]*}/}/g; s/;[[:space:]]/;/g; s/,[[:space:]]/,/g; /^[[:space:]]*$/d' "$file" > "dist/$file"
    fi
done

# Copy and minify JavaScript files
echo "Minifying JavaScript files..."
for file in js/*.js; do
    if [ -f "$file" ]; then
        sed 's/[[:space:]]*{/{/g; s/[[:space:]]*}/}/g; s/;[[:space:]]/;/g; s/,[[:space:]]/,/g; /^[[:space:]]*$/d' "$file" > "dist/$file"
    fi
done

# Copy other essential files
echo "Copying other files..."
cp manifest.json dist/
cp robots.txt dist/
cp sitemap.xml dist/

# Generate service worker version hash
HASH=$(date +%s)
sed "s/mch-notes-v1/mch-notes-v$HASH/" js/sw.js > dist/js/sw.js

# Create PWA icons if ImageMagick is installed
if command -v convert &> /dev/null; then
    echo "Generating PWA icons..."
    if [ -f "assets/icon.png" ]; then
        convert assets/icon.png -resize 72x72 dist/assets/icons/icon-72x72.png
        convert assets/icon.png -resize 96x96 dist/assets/icons/icon-96x96.png
        convert assets/icon.png -resize 128x128 dist/assets/icons/icon-128x128.png
        convert assets/icon.png -resize 144x144 dist/assets/icons/icon-144x144.png
        convert assets/icon.png -resize 152x152 dist/assets/icons/icon-152x152.png
        convert assets/icon.png -resize 192x192 dist/assets/icons/icon-192x192.png
        convert assets/icon.png -resize 384x384 dist/assets/icons/icon-384x384.png
        convert assets/icon.png -resize 512x512 dist/assets/icons/icon-512x512.png
    else
        echo "Warning: assets/icon.png not found. Icons were not generated."
    fi
else
    echo "Warning: ImageMagick not installed. Icons were not generated."
fi

# Update file permissions
chmod -R 755 dist

# Generate gzip versions for supported files
echo "Generating gzip versions..."
find dist -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -name "*.json" -o -name "*.xml" \) -exec gzip -k {} \;

# Create .htaccess for Apache servers
echo "Creating .htaccess..."
cat > dist/.htaccess << 'EOF'
# Enable gzip compression
AddEncoding gzip .gz
<Files *.js.gz>
  ForceType application/javascript
</Files>
<Files *.css.gz>
  ForceType text/css
</Files>
<Files *.html.gz>
  ForceType text/html
</Files>

# Serve pre-compressed files if they exist
RewriteEngine On
RewriteCond %{HTTP:Accept-Encoding} gzip
RewriteCond %{REQUEST_FILENAME}.gz -f
RewriteRule ^(.*)$ $1.gz [QSA,L]

# Security headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "SAMEORIGIN"
Header set X-XSS-Protection "1; mode=block"
Header set Content-Security-Policy "default-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline'"

# Cache control
<FilesMatch "\.(html|htm)$">
    Header set Cache-Control "max-age=0, no-cache, no-store, must-revalidate"
</FilesMatch>
<FilesMatch "\.(js|css|json)$">
    Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
EOF

echo "Deployment package created in dist/"
echo "Done!"