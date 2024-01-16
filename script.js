
var selectedPerson = '';
var isSelected = false;

window.onload = function() {
    loadImages();
    document.getElementById('select-person-button').addEventListener('click', selectPerson);
    document.getElementById('reset-button').addEventListener('click', resetGame);
};

function loadImages() {
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Replace with actual image names
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
    isSelected = true;
    selectedPerson = name;
    document.getElementById('selected-person-name').textContent = 'Selected: ' + name;
    if (element.classList.contains('cross')) {
        element.classList.remove('cross');
    } else {
        element.classList.add('cross');
    }
}

function selectPerson() {
    if (!isSelected) {
        alert('Please select a person first.');
        return;
    }
    // Implement logic after person is selected
}

function resetGame() {
    isSelected = false;
    selectedPerson = '';
    document.getElementById('selected-person-name').textContent = '';
    var crosses = document.querySelectorAll('.cross');
    crosses.forEach(function(cross) {
    cross.classList.remove('cross');
    });
    }