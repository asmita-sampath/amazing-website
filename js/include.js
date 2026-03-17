async function loadSection(id, file) {
const response = await fetch(file);
const html = await response.text();
document.getElementById(id).innerHTML = html;
}

loadSection("hero", "sections/hero.html");
loadSection("about", "sections/about.html");
loadSection("telecom-services", "sections/telecom-services.html");
loadSection("track-record", "sections/track-record.html");
loadSection("it-services", "sections/it-services.html");
loadSection("contact", "sections/contact.html");

function toggleAbout(){

const more = document.getElementById("about-more");
const btn = document.querySelector(".know-more-btn");

if(more.style.display === "block"){
more.style.display = "none";
btn.innerText = "Know More";
}
else{
more.style.display = "block";
btn.innerText = "Show Less";
}

}

