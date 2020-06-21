
const axios = require('axios');

const ul = document.querySelector('ul');

const loadUserData = () => {
    axios.get('http://localhost:5000/users')
    .then((response) => {
        console.log(response);
        if (response.data) {
            ul.className = 'collection';
            response.data.map((user) => {
                const li = document.createElement('li');
                const text = document.createTextNode(`${user.id}.) ${user.name} - ${user.email}`);
                li.className = 'collection-item';
                li.appendChild(text);
                ul.appendChild(li);
            });
        }
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {

    }); 
}

loadUserData();