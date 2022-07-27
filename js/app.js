function post_success(response) {
    for(let i = 0; i < response[`data`].length; i++) {
        document.body.insertAdjacentHTML(`afterbegin`, `<h3>${response[`data`][i][`title`]}</h3>
        <p>${response[`data`][i][`body`]}</p>
        `);
    }
}

function post_failure(error) {
    document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>ERROR</h1>`);
}

axios.request({
    url: `https://jsonplaceholder.typicode.com/posts`
}).then(post_success).catch(post_failure);