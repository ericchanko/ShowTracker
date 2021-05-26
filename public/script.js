
const dark_light_button = document.getElementById("dark_light_button");
const indiv = document.body;

dark_light_button.addEventListener("click", changeword);


function changeword(){
    indiv.classList.toggle("light");
}
