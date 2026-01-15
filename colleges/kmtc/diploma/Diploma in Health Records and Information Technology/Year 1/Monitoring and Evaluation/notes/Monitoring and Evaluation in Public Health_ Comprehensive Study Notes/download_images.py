import os
import requests

images = {
    "2025_11_19_d8a5a88a857679200a38g-26.jpg": "https://cdn.mathpix.com/cropped/2025_11_19_d8a5a88a857679200a38g-26.jpg?height=1132&width=1509&top_left_y=151&top_left_x=308",
    "2025_11_19_d8a5a88a857679200a38g-28.jpg": "https://cdn.mathpix.com/cropped/2025_11_19_d8a5a88a857679200a38g-28.jpg?height=402&width=966&top_left_y=233&top_left_x=395",
    "2025_11_19_d8a5a88a857679200a38g-30.jpg": "https://cdn.mathpix.com/cropped/2025_11_19_d8a5a88a857679200a38g-30.jpg?height=1098&width=1389&top_left_y=233&top_left_x=308",
    "2025_11_19_d8a5a88a857679200a38g-32.jpg": "https://cdn.mathpix.com/cropped/2025_11_19_d8a5a88a857679200a38g-32.jpg?height=673&width=816&top_left_y=1027&top_left_x=393",
    "2025_11_19_d8a5a88a857679200a38g-34.jpg": "https://cdn.mathpix.com/cropped/2025_11_19_d8a5a88a857679200a38g-34.jpg?height=1048&width=1584&top_left_y=151&top_left_x=306",
    "2025_11_19_d8a5a88a857679200a38g-35.jpg": "https://cdn.mathpix.com/cropped/2025_11_19_d8a5a88a857679200a38g-35.jpg?height=971&width=1578&top_left_y=531&top_left_x=306",
    "2025_11_19_d8a5a88a857679200a38g-38.jpg": "https://cdn.mathpix.com/cropped/2025_11_19_d8a5a88a857679200a38g-38.jpg?height=730&width=1207&top_left_y=1203&top_left_x=460"
}

output_dir = "/home/ngobiro/projects/pngobiro.github.io/colleges/kmtc/diploma/Diploma in Health Records and Information Technology/Year 1/Monitoring and Evaluation/notes/Monitoring and Evaluation in Public Health_ Comprehensive Study Notes/html_output/assets/images"

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for filename, url in images.items():
    filepath = os.path.join(output_dir, filename)
    print(f"Downloading {filename}...")
    try:
        response = requests.get(url)
        response.raise_for_status()
        with open(filepath, 'wb') as f:
            f.write(response.content)
        print(f"Saved to {filepath}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
