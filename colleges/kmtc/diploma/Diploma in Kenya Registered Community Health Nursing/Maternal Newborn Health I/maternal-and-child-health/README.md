## Development Tools

The project includes several scripts to help with development and deployment:

### dev.sh (Development Helper)
Interactive menu-driven tool for common development tasks:
```bash
chmod +x dev.sh
./dev.sh
```

Features:
1. Start development server
2. Run tests
3. Create production build
4. Check PWA requirements
5. Clean build directories
6. Generate placeholder icons
7. Validate HTML files
8. Watch for changes (auto-run tests)
9. Open in browser

### setup.sh (Initial Setup)
Sets up the development environment:
```bash
chmod +x setup.sh
./setup.sh
```

Features:
- Checks required dependencies
- Creates directory structure
- Sets file permissions
- Generates placeholder icons
- Configures development environment

### test.sh (Testing)
Validates project files and structure:
```bash
chmod +x test.sh
./test.sh
```

Features:
- Validates file presence
- Checks JSON/XML syntax
- Verifies HTML structure
- Tests file permissions

### deploy.sh (Production Build)
Creates production-ready files:
```bash
chmod +x deploy.sh
./deploy.sh
```

Features:
- Minifies HTML/CSS/JS
- Optimizes images
- Generates PWA icons
- Creates gzipped versions
- Sets up Apache configuration

## Development Workflow

1. **Initial Setup**
   ```bash
   ./setup.sh
   ```

2. **Start Development**
   ```bash
   ./dev.sh
   # Select option 1 to start server
   # Select option 9 to open in browser
   ```

3. **During Development**
   - Use option 8 in dev.sh to watch for changes
   - Make changes to files
   - Tests will run automatically on changes
   - Use option 4 to verify PWA requirements

4. **Prepare for Production**
   ```bash
   ./deploy.sh
   ```

5. **Deploy**
   - Upload contents of `dist/` to web server
   - Verify PWA functionality with `pwa-check.html`

## Local Development

The development server (option 1 in dev.sh) provides:
- Live file serving
- Automatic port selection
- Browser auto-opening
- PWA testing environment

## Continuous Integration

The test script (`test.sh`) can be integrated into CI/CD pipelines:
```bash
./test.sh || exit 1
```

This will fail the build if any tests fail, ensuring quality control.