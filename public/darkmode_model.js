
const dark_light_button = document.getElementById("dark_light_button");
const indiv_anime_body = document.getElementById("indiv_anime_body");
const indiv_anime_container =document.getElementById("indiv_anime_container");
const Anime_desc = document.getElementById("Anime_desc");
const Anime_Title = document.getElementById("Anime_Title");
const Anime_alias = document.getElementById("Anime_alias");
dark_light_button.addEventListener("click",darkmodetoggle);



function darkmodetoggle(){
    if (dark_light_button.classList.contains("lightmode"))
    {
        indiv_anime_body.classList.toggle("lightmode");
        indiv_anime_container.classList.toggle("lightmode");
        dark_light_button.classList.toggle("lightmode");
        Anime_desc.classList.toggle("lightmode");
        Anime_Title.classList.toggle("lightmode");
        Anime_alias.classList.toggle("lightmode");
        console.log("button is clicked")

    } else {
        indiv_anime_body.classList.toggle("lightmode");
        indiv_anime_container.classList.toggle("lightmode");
        dark_light_button.classList.toggle("lightmode");
        Anime_desc.classList.toggle("lightmode");
        Anime_Title.classList.toggle("lightmode");
        Anime_alias.classList.toggle("lightmode");
}
} 
