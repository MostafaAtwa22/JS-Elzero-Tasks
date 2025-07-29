let links = document.querySelectorAll('a.open');

links.forEach(link => {
    if (link.textContent.trim().toLowerCase() === 'elzero') {
        console.log(link);
        window.open(link.href, '_blank');
    }
});