
var selectedPerson = '';
var isSelected = false;

window.onload = function() {
    loadImages();
    document.getElementById('select-person-button').addEventListener('click', selectPerson);
    document.getElementById('reset-button').addEventListener('click', resetGame);
};

function loadImages() {
    var images = ['g.png', 'a.png', 'c.png', 'h.png', 'd.png', 'b.png', 'i.png', 'j.png', 'f.png', 'e.png']
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
