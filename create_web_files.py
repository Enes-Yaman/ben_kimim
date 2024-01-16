import os

# Paths
images_folder = 'images'
html_file = 'index.html'
css_file = 'styles.css'
js_file = 'script.js'

# HTML Content
html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="{css_file}">
</head>
<body>
    <div id="image-container"></div>
    <button id="reset-button">Reset</button>
    <button id="finish-button">Finish</button>
    <script src="{js_file}"></script>
</body>
</html>
"""

# CSS Content
css_content = """
#image-container {
    /* Styles for image container */
}

#image-container img {
    /* Styles for images */
}

#reset-button, #finish-button {
    /* Styles for buttons */
}
"""

# JavaScript Content
js_content = """
window.onload = function() {
    loadImages();
};

function loadImages() {
    var images = ["""

# Add image files to JS content
image_files = [f"'{file}'" for file in os.listdir(images_folder) if file.endswith(('.png', '.jpg', '.jpeg'))]
js_content += ', '.join(image_files)

js_content += """
    ];
    var container = document.getElementById('image-container');

    images.forEach(function(image) {
        var imgElement = document.createElement('img');
        imgElement.src = 'images/' + image;
        container.appendChild(imgElement);

        var name = image.split('.')[0]; // Extract name from file name
        var nameElement = document.createElement('div');
        nameElement.textContent = name;
        container.appendChild(nameElement);
    });
}

document.getElementById('reset-button').onclick = function() {
    // Reset functionality
};

document.getElementById('finish-button').onclick = function() {
    // Finish functionality
};
"""

# Write HTML file
with open(html_file, 'w') as file:
    file.write(html_content)

# Write CSS file
with open(css_file, 'w') as file:
    file.write(css_content)

# Write JavaScript file
with open(js_file, 'w') as file:
    file.write(js_content)

print("HTML, CSS, and JS files have been created.")
