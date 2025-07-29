document.querySelectorAll("body *").forEach(function(el) {
    el.addEventListener("click", function() {
        console.log(`This Is ${this.tagName}`);
    });
});