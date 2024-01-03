window.onload = function () {
    var img = document.getElementById('img').getElementsByTagName('img')[0];
    var slides = [
        "C:/Users/gshar/OneDrive/Pictures/shimla.webp",
        "C:/Users/gshar/OneDrive/Desktop/photo-1503265192943-9d7eea6fc77a.avif",
        "C:/Users/gshar/OneDrive/Desktop/wp4676584.jpg",
        "C:/Users/gshar/OneDrive/Desktop/Himachal-Feature.jpg",
        "C:/Users/gshar/OneDrive/Desktop/121222_Best Places to Visit in Himachal Pradesh.webp",
        "C:/Users/gshar/OneDrive/Desktop/Best-Hill-Stations-in-Himachal-Pradesh.jpg",
        "C:/Users/gshar/Downloads/Dharmashala Cricket Stadium Himachal Pradesh, India 🇮🇳.jfif"
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





let signup=document.querySelector(".signup");
let login=document.querySelector(".login");
let slider=document.querySelector(".slider");
let formSection=document.querySelector(".form-section");
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});