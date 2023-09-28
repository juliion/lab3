const getData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json.results[0];
}

const createCard = async (data) => {
    const picture = data.picture.large;
    
    const city = data.location.city;
    const country = data.location.country;
    const postcode = data.location.postcode;
    const email = data.email;

    const cards = document.getElementById('cards');
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src=${picture} style="width:100%;"></img>
        <p>${city}</p>
        <p>${country}</p>
        <p>${postcode}</p>
        <p>${email}</p>
    `;
    cards.appendChild(card);
}

window.addEventListener('load', () => {
    const url = 'https://randomuser.me/api';
    const downloadBtn = document.getElementById('download-btn');
    downloadBtn.addEventListener('click', async () => {
        let data = await getData(url);
        createCard(data);
    })
});