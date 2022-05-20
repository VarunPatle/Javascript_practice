const GITHUB_API = "https://api.github.com/users";

/**
 * Return an array of usernames fetched from the Github API
 * https://api.github.com/users
 */
async function getGithubUsernames() {
    let res = await fetch(GITHUB_API);
    let data = await res.json();
    const userNames = data.map(obj => {
        return obj.login;
    });
    displayValuesAsList(userNames);
}
getGithubUsernames()
/**
 * Display the values passed as arguments as a list on the screen
 * @param {Array} values
 */
function displayValuesAsList(values) {
    let ul = document.getElementById('usernames-list');
    values.forEach(v => {
        const li = document.createElement('li');
        li.textContent = v;
        ul.appendChild(li);
    })
}