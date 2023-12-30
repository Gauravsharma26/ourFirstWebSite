window.onload = function () {
    var img = document.getElementById('img').getElementsByTagName('img')[0];
    var slides = [
        "C:\\Users\\gshar\\OneDrive\\Desktop\\kalpa3-1686249342.webp",
        // Add more image URLs as needed
    ];

    var start = 0;

    function slider() {
        if (start < slides.length - 1) {
            start = start + 1;
        } else {
            start = 0;
        }
        img.src = slides[start];
    }

    setInterval(slider, 2000); // image will change after 2 sec
};
