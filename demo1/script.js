function rotateImages() {
    let images = document.querySelectorAll(".image-container");
    images[0].classList.remove("left");
    images[0].classList.add("right");

    images[1].classList.remove("center");
    images[1].classList.add("left");

    images[2].classList.remove("right");
    images[2].classList.add("center");

 
    document.querySelector(".carousel").appendChild(images[0]);
}

setInterval(rotateImages, 3000); 

document.getElementById("signup-link").addEventListener("click", function() {
    window.location.href = "signup.html";
});
 

function toggleReadMore(event, element) {
    event.preventDefault();
    const moreText = element.previousElementSibling;

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        element.textContent = "Хаах";
    } else {
        moreText.style.display = "none";
        element.textContent = "Цааш унших";
    }
}