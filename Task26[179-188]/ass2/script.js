function getArticles() {
return fetch("articles.json")
    .then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
    })
    .then(articles => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve(articles);
            }, 1000);
        });
    });
}

// استدعاء الدالة
getArticles()
.then(data => {
    const firstFive = data.slice(0, 5);

    firstFive.forEach((article) => {
    let div = document.createElement('div');
    document.body.append(div);

    let h3 = document.createElement('h3');
    h3.textContent = article.title;
    div.append(h3);

    let p = document.createElement('p');
    p.textContent = article.description;
    div.append(p);
    });
})
.catch(error => {
    console.error("An error occurred:", error);
});
