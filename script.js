const results = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = [];

getData();

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50');

    const data = await res.json();
    // clear results
    results.innerHTML = '';
    data.results.forEach((user) => {
        const li = document.createElement('li');
        listItems.push(li);
        li.innerHTML = 
        `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.last} ${user.name.last}</h4>
            <p>${user.location.city} ${user.location.country}</p>
        </div>
        `
        results.appendChild(li);
    });

};

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}