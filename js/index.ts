export {};

const lista = document.querySelector(".hide-navi") as HTMLElement;

lista.addEventListener('click', e => {
    $('#navi-toggle').prop('checked', false);     
});
   
/* let data = [ 
{ "id":"0","image": "img/kuca-1.jpg", "name":  "Prekrasna villa", "location": "Istra", "rooms": "4 sobe", "size": "325", "price": "320 000", 
"description" : "Trosobni stan u prizemlju, koji se sastoji od: ulaznog prostora, predsoblja, dnevnog boravka, kuhinje, zaseban wc, kupaonica +wc, dvije spavaće sobe, površine 84.96 m2 sa terasom površine 33 m2, kojem pripada spremište u podrumu zgrade površine 20 m2 i dva garažna mjesta sistema KLAUS površine 14.70 m2 na dvije etaže."},
{ "id":"1","image": "img/kuca-2.jpg", "name": "Ladanjska villa", "location": "Poreč", "rooms": "10 soba", "size": "720", "price": "650 000", 
"description" : "Prodaje se novoizgrađena vila na ekskluzivnoj lokaciji uz more u Kožinu, okolica Zadra. Udaljena samo 30 metara od mora, površine ca 400 m2, sastoji se od prizemlja, prvog kata, međukata i polunatkrivene terase na drugom katu. Kamen i drvo su odlično upotpunjeni staklenim stijenama i ogradama i pružaju luksuz kojeg možete dobiti u ovoj vili smještenoj na prekrasnoj dalmatinskoj obali."},
{ "id":"2","image": "img/kuca-3.jpg", "name":  "Moderna villa", "location": "Opatija", "rooms": "4 sobe", "size": "280", "price": "300 000", 
"description" : "Nova villa na otoku Rabu u mjestu Banjol- oduševit će vas svojom bezvremenskom arhitekturom, najsuvremenijim dizajnom interijera, neusporedivim komforom i hedonističkim luksuzom koji svaki trenutak pretvara u čistu ugodu življenja i stanovanja."},
{ "id":"3","image": "img/kuca-4.jpg", "name":  "Villa u unutrašnjosti", "location": "Dalmacija", "rooms": "8 soba", "size": "990", "price": "780 000", 
"description" : "Prodajemo prekrasnu vilu površine 311m2 , novogradnju s tri odvojena stana i bazenom. Vila ima lijepo uređenu okućnicu od 970m2, a nalazi se u mirnoj ulici, 900 m od centra s prekrasnim otvorenim pogledom na more. Dva stana imaju dvije spavaće sobe s vlastitim kupaonicama, balkon, dnevni boravak, spremište te dva parkirna mjesta."},
{ "id":"4","image": "img/kuca-5.jpg", "name":  "Brdska villa", "location": "Gorski kotar", "rooms": "4 sobe", "size": "450", "price": "280 000", 
"description" : "Trosoban stan u Kostreni od 146 m², sa dva parkirna mjesta, dvorištem od 400 m² te kućicom u dvorištu od 40 m² i garažom od 60 m². Predivan panoramski pogled. Novogradnja u Kostreni okružena zelenilom na samo nekoliko minuta od centra i mora. Jedna je od ljepših na tom području."},
{ "id":"5","image": "img/kuca-6.jpg", "name":  "Moderna kuća", "location": "Istra", "rooms": "3 sobe", "size": "250", "price": "345 000", 
"description" : "Luksuzni dvojni objekt na tri etaže sa prekrasnim otvorenim panoramskim pogledom na more iz svih prostorija. Nalazi se prvi red uz more. Na prizemlju se nalazi kuhinja, blagovaonica, dnevni boravak, ostava i gostinjski toalet. Predviđen rok završetka i useljenja kraj 2019.g."}   
]

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
                <a href="#"><button class="btn home__btn">DETALJNIJE</button></a>
                
            </div>
    `;
    buttonLoadMore.insertAdjacentHTML('beforebegin',markup);
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
}); */