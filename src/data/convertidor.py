import os
import pandas as pd
from PIL import Image 
import json

folder_images = "./PhotosTest"
size_images = []

for dirpath, _, filenames in os.walk(folder_images):
    print(filenames)
    for path_image in filenames:
        image = os.path.abspath(os.path.join(dirpath, path_image))
        
        with Image.open(image) as img:
            width, height = img.size
            size_images.append(
                {
                    'src': path_image,
                    'width': width,
                    'height': height
                }
            )
    pd.DataFrame(size_images)
print(size_images)
with open("./PhotosTest/file.json", "w") as f:
    json.dump(size_images, f)