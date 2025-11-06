function Api () {
    let users = document.getElementById("users");
    let inputValue = document.getElementById("input").value;


    fetch(`https://api.github.com/users/${inputValue}`)
        .then(resp => resp.json())
        .then(data => {
            
            const card = `
                <div class="card">
                    <img class="Picture" src="${data.avatar_url}">
                    <h2 class="name">${data.name}</h2>

                    <div class="barabar">
                        <p><strong>Followers:</strong> ${data.followers}</p>
                        <p><strong>Following:</strong> ${data.following}</p>
                        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
                    </div>
                </div>
            `;

            users.innerHTML = card;
        })
        .catch(() => {
        });
}
