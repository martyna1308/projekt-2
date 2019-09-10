// .albums-items .square.animation-start


let albumsOffset = document.getElementById("albums").offsetTop;
let square = document.querySelector(".albums-items .square");

window.addEventListener( "scroll", () => {
    if (this.scrollY > (albumsOffset-300)) {
        square.style.animation = "rotateMe";
    }
    

})

