export {};

let data = [ 
{ "id":"0","image": "img/kuca-1.jpg", "name":  "Prekrasna villa", "location": "Istra", "rooms": "4 sobe", "size": "325", "price": "320 000"},
{ "id":"1","image": "img/kuca-2.jpg", "name": "Ladanjska villa", "location": "Poreč", "rooms": "10 soba", "size": "720", "price": "650 000" },
{ "id":"2","image": "img/kuca-3.jpg", "name":  "Moderna villa", "location": "Opatija", "rooms": "4 sobe", "size": "280", "price": "300 000" },
{ "id":"3","image": "img/kuca-4.jpg", "name":  "Villa u unutrašnjosti", "location": "Dalmacija", "rooms": "8 soba", "size": "990", "price": "780 000"},
{ "id":"4","image": "img/kuca-5.jpg", "name":  "Brdska villa", "location": "Gorski kotar", "rooms": "4 sobe", "size": "450", "price": "280 000" },
{ "id":"5","image": "img/kuca-6.jpg", "name":  "Moderna kuća", "location": "Istra", "rooms": "3 sobe", "size": "250", "price": "345 000" }   
]

const renderItems = document.querySelector('.homes__btn') as HTMLElement;
const buttonLoadMore = document.querySelector('.homes__btn') as HTMLElement;

const renderProduct = (data: { productType: any; image: any; name: any; price: any; id: any; location: any; rooms: any; size: any}) => {
    var markup =  `
    <div class="home">
                <img src=${data.image} alt=${data.name} class="home__img">
                <h5 class="home__name">${data.name}</h5>
                <div class="home__location">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-map-pin"></use>
                    </svg>
                    <p>${data.location}</p>
                </div>
                <div class="home__rooms">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-profile-male"></use>
                    </svg>
                    <p>${data.rooms}</p>
                </div>
                <div class="home__area">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-expand"></use>
                    </svg>
                    <p>${data.size} m<sup>2</sup></p>
                </div>
                <div class="home__price">
                    <svg>
                        <use xlink:href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <p>${data.price}€</p>
                </div>
                <button class="btn home__btn">DETALJNIJE</button>
            </div>
    `;
    renderItems.insertAdjacentHTML('beforebegin',markup);
}

let houseStart = 0, houseEnd = 0;

function renderProducts(data: any[]) {
    houseEnd += 3;

    while ( houseStart < houseEnd ){
        renderProduct (data[houseStart]);
        houseStart++;
        if ( houseStart == 6 && buttonLoadMore.parentNode) {
            buttonLoadMore.parentNode.removeChild(buttonLoadMore);            
        }
    }     
}

renderProducts(data);

buttonLoadMore.addEventListener('click', e => {
    e.preventDefault();
    renderProducts(data);
});