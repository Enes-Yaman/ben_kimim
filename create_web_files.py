
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
    <button id="select-person-button">Select Your Person</button>
    <div id="selected-person-name"></div>
    <div id="persons-container"></div>
    <button id="reset-button">Reset</button>
    <script src="{js_file}"></script>
</body>
</html>
"""

# CSS Content
css_content = """
#persons-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    /* Additional styling */
}

.person {
    position: relative;
    cursor: pointer;
    /* Additional styling */
}

.selected {
    /* Style for selected person */
}

.cross {
    /* Style for cross mark */
}

#selected-person-name {
    /* Style for displaying selected person's name */
}

#select-person-button, #reset-button {
    /* Styles for buttons */
}
"""

# JavaScript Content
js_content = """
var selectedPerson = '';
var isSelected = false;

window.onload = function() {
    loadImages();
    document.getElementById('select-person-button').addEventListener('click', selectPerson);
    document.getElementById('reset-button').addEventListener('click', resetGame);
};

function loadImages() {
    var images = ["""

# Add image files to JS content
image_files = [f"'{file}'" for file in os.listdir(images_folder) if file.endswith(('.png', '.jpg', '.jpeg'))]
js_content += ', '.join(image_files)

js_content += """]
    var container = document.getElementById('persons-container');

    images.forEach(function(image) {
        var imgDiv = document.createElement('div');
        imgDiv.classList.add('person');

        var imgElement = document.createElement('img');
        imgElement.src = 'images/' + image;
        imgDiv.appendChild(imgElement);

        var name = image.split('.')[0];
        var nameElement = document.createElement('div');
        nameElement.textContent = name;
        imgDiv.appendChild(nameElement);

        imgDiv.addEventListener('click', function() {
            toggleSelection(imgDiv, name);
        });

        container.appendChild(imgDiv);
    });
}

function toggleSelection(element, name) {
    if (isSelected && selectedPerson !== name) {
        return;
    }
    if (element.classList.contains('cross')) {
        element.classList.remove('cross');
    } else {
        element.classList.add('cross');
    }
}

function selectPerson() {
    isSelected = !isSelected;
    if (isSelected) {
        // Additional logic for selecting a person
    } else {
        // Reset selection
    }
}

function resetGame() {
    // Reset game logic
}
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