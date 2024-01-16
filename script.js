var selectedPerson = '';
var isSelected = false;

window.onload = function () {
    loadImages();
    document.getElementById('reset-button').addEventListener('click', resetGame);
};


function loadImages() {
    var images = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png', 'g.png', 'h.png', 'i.png', 'j.png']; // Replace with actual image names
    var container = document.getElementById('persons-container');

    images.forEach(function (image) {
        var imgDiv = document.createElement('div');
        imgDiv.classList.add('person');

        var imgElement = document.createElement('img');
        imgElement.src = 'images/' + image;
        imgDiv.appendChild(imgElement);

        var name = image.split('.')[0];
        var nameElement = document.createElement('div');
        nameElement.textContent = name;
        imgDiv.appendChild(nameElement);

        imgDiv.addEventListener('click', function () {
            toggleSelection(imgDiv, name);
        });

        container.appendChild(imgDiv);
    });
}

function toggleSelection(element, name) {
    if (!isSelected) {
        selectedPerson = name;
        isSelected = true;
        document.getElementById('selected-person-name').textContent = 'Your character: ' + name;
        element.classList.toggle('select0')
    } else {
        if (selectedPerson === name) {
            if (element.classList.contains('select0')) {
                element.classList.remove('select0')
                element.classList.toggle('select12')
            } else {
                element.classList.toggle('select12')
                element.classList.toggle('select0')
            }
        } else {
            element.classList.toggle('select1');
        }
    }
}

function resetGame() {
    location.reload();
}