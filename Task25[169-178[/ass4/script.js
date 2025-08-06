let request = new XMLHttpRequest();
request.open("GET", "articles.json");
request.send();


request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let Div = document.createElement('div');
        Div.setAttribute("id", "data");
        document.body.append(Div);
        let json = JSON.parse(this.responseText);
        for(let i = 0; i < json.length; i++) {

            let dataDiv = document.createElement('div');
            Div.append(dataDiv);

            let h2 = document.createElement('h2');
            h2.textContent = json[i].title;
            dataDiv.append(h2);
            
            let pBody = document.createElement('p');
            pBody.textContent = json[i].body;
            dataDiv.append(pBody);

            let pAuthor = document.createElement('p');
            pAuthor.textContent = json[i].author;
            dataDiv.append(pAuthor);

            let pCategory = document.createElement('p');
            pCategory.textContent = json[i].category;
            dataDiv.append(pCategory);
        }
    }
}