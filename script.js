
window.onload = function() {
    loadImages();
};

function loadImages() {
    var images = ['g.png', 'a.png', 'c.png', 'h.png', 'd.png', 'b.png', 'i.png', 'j.png', 'f.png', 'e.png'
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
