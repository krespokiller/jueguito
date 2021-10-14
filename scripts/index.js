
const player = document.getElementById("player");

document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        
    } else if (event.key === "ArrowUp" ){
        player.classList.add("playerJump")
    }
})

document.addEventListener("click",function() {
    player.classList.add("playerJump");
});


player.addEventListener('animationend', () => {
    player.classList.remove("playerJump");;
});