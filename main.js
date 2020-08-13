function changeMode() {
    const screen = document.querySelectorAll(".screen");
    const header = document.querySelectorAll(".header");
    const content = document.querySelectorAll(".content");
    const sidebar1 = document.querySelectorAll(".sidebar1");
    const sidebar2 = document.querySelectorAll(".sidebar2");
    const modeButtom = document.querySelectorAll(".mode-button");
    const mainPage = document.querySelectorAll(".main-page");
    const mainContent = document.querySelectorAll(".main-content");
    const itemHeader = document.querySelectorAll(".item-header");
    const flashCards = document.querySelectorAll(".flash-cards");
    const table = document.querySelectorAll(".table");
    const secondaryPage = document.querySelectorAll(".secondary-page");

    if(
        document.getElementById("content").getAttribute("class") === "content light")
    {
        makeDark(screen);
        makeDark(header);
        makeDark(content);
        makeDark(sidebar1);
        makeDark(sidebar2);
        makeDark(modeButtom);
        makeDark(mainPage);
        makeDark(mainContent);
        makeDark(itemHeader);
        makeDark(flashCards);
        makeDark(table);
        makeDark(secondaryPage);

    } else {
        makeLight(screen);
        makeLight(header);
        makeLight(content);
        makeLight(sidebar1);
        makeLight(sidebar2);
        makeLight(modeButtom);
        makeLight(mainPage);
        makeLight(mainContent);
        makeLight(itemHeader);
        makeLight(flashCards);
        makeLight(table);
        makeLight(secondaryPage);
    }
}
function makeDark(element) {
    element.forEach(function(el){
        el.classList.remove("light");
        el.classList.add("dark");
    });
}
function makeLight(element) {
    element.forEach(function(el){
        el.classList.remove("dark");
        el.classList.add("light");
        
    });
}