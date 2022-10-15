const loadUser = () => {
    fetch('https://randomuser.me/api/?results=200')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    console.log(users)
    const usersContainer = document.getElementById('users-container');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3> User Name : ${user.name.first}</h3>
        <p>Gander : ${user.gender}</p>
        <p>Email ${user.email}</p>
        <img src="${user.picture.large}" alt="photo">

        `;
        usersContainer.appendChild(userDiv);
    }
}

loadUser();