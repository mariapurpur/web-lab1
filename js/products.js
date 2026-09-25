const products = [
    {
        id: 1,
        type: "card",
        name: "Pikachu 173/165",
        set: "Scarlet & Violet 151",
        price: 6800,
        stock: 1,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/513721.jpg",
        source: "https://www.tcgplayer.com/product/513721/pokemon-sv-scarlet-and-violet-151-pikachu-173-165"
    },
    {
        id: 2,
        type: "card",
        name: "Pikachu TG05/TG30",
        set: "Lost Origin",
        price: 3700,
        stock: 5,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/284258.jpg",
        source: "https://www.tcgplayer.com/product/284258/pokemon-swsh11-lost-origin-trainer-gallery-pikachu"
    },
    {
        id: 3,
        type: "card",
        name: "Pikachu 131/091",
        set: "Paldean Fates",
        price: 6700,
        stock: 1,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/534522.jpg",
        source: "https://www.tcgplayer.com/product/534522/pokemon-sv-paldean-fates-pikachu-131-091"
    },
    {
        id: 4,
        type: "card",
        name: "Pikachu SM98",
        set: "SM Promos",
        price: 4200,
        stock: 1,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/166411.jpg",
        source: "https://www.tcgplayer.com/product/166411/pokemon-sm-promos-pikachu-sm98"
    },
    {
        id: 5,
        type: "card",
        name: "Pikachu 058/102",
        set: "Base Set",
        price: 1300,
        stock: 5,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/42402.jpg",
        source: "https://www.tcgplayer.com/product/42402/pokemon-base-set-pikachu"
    },
    {
        id: 6,
        type: "card",
        name: "Pikachu 005/025",
        set: "Celebrations",
        price: 500,
        stock: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UArsGw7J3p8Uuis0o4Ma1LDGXBcoIurxrBxTc54DOQ&s=10",
        source: "https://www.tcgplayer.com/search/pokemon/product?productLineName=pokemon&productUrlName=Pikachu"
    },
    {
        id: 7,
        type: "card",
        name: "Eevee ex 167/131",
        set: "Prismatic Evolutions",
        price: 15000,
        stock: 1,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/610522.jpg",
        source: "https://www.tcgplayer.com/product/610522/pokemon-sv-prismatic-evolutions-eevee-ex-167-131"
    },
    {
        id: 8,
        type: "card",
        name: "Eevee 188/167",
        set: "Twilight Masquerade",
        price: 7900,
        stock: 1,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/550232.jpg",
        source: "https://www.tcgplayer.com/product/550232/pokemon-sv06-twilight-masquerade-eevee-188-167"
    },
    {
        id: 9,
        type: "card",
        name: "Eevee 068/113",
        set: "EX Delta Species",
        price: 900,
        stock: 5,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/85097.jpg",
        source: "https://www.tcgplayer.com/product/85097/pokemon-delta-species-eevee-068-113"
    },
    {
        id: 10,
        type: "card",
        name: "Eevee ex 075/131",
        set: "Prismatic Evolutions",
        price: 500,
        stock: 5,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/610430.jpg",
        source: "https://www.tcgplayer.com/product/610430/pokemon-sv-prismatic-evolutions-eevee-ex-075-131"
    },
    {
        id: 11,
        type: "card",
        name: "Eevee 074/131",
        set: "Prismatic Evolutions",
        price: 100,
        stock: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMA3c7MnXUsEcdzsn5m0aII2oIYrI8DJCtxQEHIsi0mP5INwrAw19eTck&s=10",
        source: "https://www.tcgplayer.com/search/pokemon/product?q=Eevee&view=grid"
    },
    {
        id: 12,
        type: "card",
        name: "Eevee 069/113",
        set: "EX Delta Species",
        price: 800,
        stock: 5,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/85082.jpg",
        source: "https://www.tcgplayer.com/product/85082"
    },
    {
        id: 13,
        type: "set",
        name: "Prismatic Evolutions Super-Premium Collection",
        set: "Prismatic Evolutions",
        price: 21500,
        stock: 1,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQLnSzxtttrljZUp6Yda1uLE8KzPu6pGjMxNqpRdOFdQ&s=10",
        source: "https://www.tcgplayer.com/search/pokemon/product?q=Prismatic+Evolutions+Super-Premium+Collection"
    },
    {
        id: 14,
        type: "set",
        name: "Shining Fates Elite Trainer Box",
        set: "Shining Fates",
        price: 12500,
        stock: 2,
        image: "https://product-images.tcgplayer.com/fit-in/400x400/228821.jpg",
        source: "https://www.tcgplayer.com/product/228821/pokemon-shining-fates-shining-fates-elite-trainer-box"
    },
];

const visibleProducts = products;