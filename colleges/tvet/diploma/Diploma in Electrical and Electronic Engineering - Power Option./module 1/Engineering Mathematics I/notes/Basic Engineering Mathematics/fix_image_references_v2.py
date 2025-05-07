import os
import re

def fix_image_references(html_dir, image_dir, mmd_file):
    """
    Fixes broken image references in HTML files by checking for the existence
    of image files and suggesting alternative filenames with "-1" appended.

    Args:
        html_dir (str): The directory containing the HTML files.
        image_dir (str): The directory containing the image files.
        mmd_file (str): The path to the MMD file.
    """

    # Create a dictionary to store the image URLs and their corresponding local filenames
    image_map = {}
    with open(mmd_file, "r") as f:
        mmd_content = f.read()
        for img_tag in re.findall(r'!\[.*?\]\((.*?)\)', mmd_content):
            image_url = img_tag
            image_name = image_url.split("/")[-1].split("?")[0]
            image_map[image_url] = image_name

    for html_file in os.listdir(html_dir):
        if not html_file.endswith(".html"):
            continue

        html_path = os.path.join(html_dir, html_file)
        with open(html_path, "r") as f:
            html_content = f.read()

        # Find all image links in the HTML file
        for img_tag in re.findall(r'<img src="\.\.\/(.*?)"', html_content):
            try:
                image_file =  re.search(r'src="\.\.\/(.*?)"', img_tag).group(1)
            except AttributeError:
                print(f"Skipping invalid img tag: {img_tag} in {html_file}")
                continue
            image_path = os.path.join(image_dir, image_file)

            if os.path.exists(image_path):
                continue

            # Check if the image exists with "-1" appended
            base, ext = os.path.splitext(image_file)
            fixed_image_file = base.rsplit('-', 1)[0] + "-1" + ext
            fixed_image_path = os.path.join(image_dir, fixed_image_file)

            print(f"Checking {image_file} and {fixed_image_file}")

            if os.path.exists(fixed_image_path):
                print(f"Fixing image reference in {html_file}: {image_file} -> {fixed_image_file}")
                new_img_tag = f'<img src="../{fixed_image_file}"'
                old_img_tag = f'<img src="../{image_file}"'
                if old_img_tag in html_content:
                    html_content = html_content.replace(old_img_tag, new_img_tag)
            elif "Image+Not+Found" in image_file:
                print(f"Fixing image reference in {html_file}: {image_file} -> assets/images/image_not_found.png")
                new_img_tag = f'<img src="assets/images/image_not_found.png"'
                old_img_tag = f'<img src="https://via.placeholder.com/400x300.png?text=Image+Not+Found"'
                if old_img_tag in html_content:
                    html_content = html_content.replace(old_img_tag, new_img_tag)
            elif os.path.exists(image_path.replace(ext, "-1" + ext)):
                print(f"Fixing image reference in {html_file}: {image_file} -> {image_file.replace(ext, '-1' + ext)}")
                fixed_image_file = image_file.replace(ext, "-1" + ext)
                new_img_tag = f'<img src="../{fixed_image_file}"'
                old_img_tag = f'<img src="../{image_file}"'
                if old_img_tag in html_content:
                    html_content = html_content.replace(old_img_tag, new_img_tag)
            else:
                print(f"Image not found: {image_file}")

        # Write the modified content back to the HTML file
        with open(html_path, "w") as f:
            f.write(html_content)

if __name__ == "__main__":
    html_dir = "topics"
    image_dir = "assets/images"
    mmd_file = "Basic Engineering Mathematics.mmd"
    fix_image_references(html_dir, image_dir, mmd_file)
    print("Image reference fixing complete.")
