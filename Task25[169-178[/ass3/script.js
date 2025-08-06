let request = new XMLHttpRequest();
request.open("GET", "articles.json");
request.send();
request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let json = JSON.parse(this.responseText);
        for(let i = 0; i < json.length; i++) {
            json[i].category = "All";
        }
        let string = JSON.stringify(json);
        console.log(string);
    }
}