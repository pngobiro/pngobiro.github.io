import os
from PIL import Image

def create_pdf(source_dir, output_filename):
    images = []
    files = [f for f in os.listdir(source_dir) if f.endswith('.jpeg')]
    
    # Custom sort to handle Untitled vs Untitled2 etc.
    # We want Untitled.jpeg first, then Untitled2, Untitled3...
    def sort_key(filename):
        name = filename.replace('.jpeg', '')
        if name == 'Untitled':
            return 1
        try:
            return int(name.replace('Untitled', ''))
        except ValueError:
            return 999

    files.sort(key=sort_key)
    
    print(f"Found {len(files)} images: {files}")

    image_list = []
    for file in files:
        img_path = os.path.join(source_dir, file)
        img = Image.open(img_path)
        if img.mode == 'RGBA':
            img = img.convert('RGB')
        image_list.append(img)

    if image_list:
        output_path = os.path.join(source_dir, output_filename)
        image_list[0].save(output_path, save_all=True, append_images=image_list[1:])
        print(f"PDF created successfully at: {output_path}")
    else:
        print("No images found to convert.")

if __name__ == "__main__":
    source_directory = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Kenya Registered Community Health Nursing/Year 1/Medical-Surgical Nursing/pastpapers/FQE/2023"
    output_file = "2023_FQE_Combined.pdf"
    create_pdf(source_directory, output_file)
