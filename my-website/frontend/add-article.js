btn = document.querySelector('#articleForm');

btn.addEventListener('submit', addArticles);

function addArticles(e) {
    e.preventDefault();
    fetch('http://localhost:1337/api/articles', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            data: {
                title: title.value,
                description: content.value 
        }}),
    })
    .then(res => res.json())
}


btn2 = document.querySelector('#articleForm2');

btn2.addEventListener('submit', deleteArticles);

function deleteArticles(e) {
    e.preventDefault();
    fetch(`http://localhost:1337/api/articles/${number.value}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
    })
    .then(res => res.json())
    .then(number.value='')
}
