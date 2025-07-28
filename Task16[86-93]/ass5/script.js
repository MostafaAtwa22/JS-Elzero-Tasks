let images = Array.from(document.images);
images.forEach(element => {
    if(element.hasAttribute("alt"))
        element.alt = "Old";
    else    
        element.setAttribute("alt", "Elzero New");
    console.log(element);
});