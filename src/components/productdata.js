const categories = [
    {
        id: '1',
        name: 'Wedding Rings',
        imgSrc: 'weddingrings.png',
    },
    {
        id: '2',
        name: 'Gold Coins',
        imgSrc: 'goldcoin.png',
    },
    {
        id: '3',
        name: 'Pendants',
        imgSrc: 'pendants.png',
    },
    {
        id: '4',
        name: 'Earrings',
        imgSrc: 'earrings.png',
    },
    {
        id: '5',
        name: 'Neckwear',
        imgSrc: 'neckwear.png',
    },
    {
        id: '6',
        name: 'Nose Pins',
        imgSrc: 'nosepins.png',
    },
    {
        id: '7',
        name: 'Chains',
        imgSrc: 'chains.png',
    },
    {
        id: '8',
        name: 'Bangles',
        imgSrc: 'bangles.png',
    },
    {
        id: '9',
        name: 'Bracelets',
        imgSrc: 'bracelets.png',
    },
    {
        id: '10',
        name: 'Mangalsutras',
        imgSrc: 'mangalsutras.png',
    },

];

const collection = [
    {
        id: '1',
        name: 'Dor',
        imgSrc: 'dor.png',
    },
    {
        id: '2',
        name: 'Exclusive Coins',
        imgSrc: 'exclusivecoins.png',
    },
    {
        id: '3',
        name: 'Stunnning Every Ear',
        imgSrc: 'stunningear.png',
    },
];

const weddrings = [
    {
        id: '1',
        name: 'Fancy Glossy Gold and Diamond Rings',
        price: 32880,
        gender: 'Women',
        category: 'Finger Ring',
        imgSrc: 'ring1.png',
    },
    {
        id: '2',
        name: 'Elegant Classy Diamond Rings',
        price: 30323,
        gender: 'Women',
        category: 'Finger Ring',
        imgSrc: 'ring2.png',
    },
    {
        id: '3',
        name: 'Bliss of Innocence Ring',
        price: 38108,
        gender: 'Women',
        category: 'Finger Ring',
        imgSrc: 'ring3.png',
    },
    {
        id: '4',
        name: 'Vintage Elegance Ring',
        price: 40839,
        gender: 'Women',
        category: 'Finger Ring',
        imgSrc: 'ring4.png',
    },
    {
        id: '5',
        name: 'A Delicate Touch Diamond Ring',
        price: 24584,
        gender: 'Women',
        category: 'Finger Ring',
        imgSrc: 'ring5.png',
    },
    {
        id: '6',
        name: 'Simple Joys Diamond Ring',
        price: 23220,
        gender: 'Women',
        category: 'Finger Ring',
        imgSrc: 'ring6.png',
    },
    {
        id: '7',
        name: 'Stylish Geometric Gold Mesh Ring',
        price: 40216,
        gender: 'Men',
        category: 'Finger Ring',
        imgSrc: 'ring7.png',
    },
    {
        id: '8',
        name: 'Magnificent Flower Diamond Ring',
        price: 51293,
        gender: 'Women',
        category: 'Finger Ring',
        imgSrc: 'ring8.png',
    },
    
];

const baseRingModelData = [
    {
        id: '1',
        name: 'Crysta Cubical Spiral Ring',
        sizes: [5,7,9,10],
        basePrice: 35000,
        description: 'Behold the mesmerizing beauty of this finger ring, a true testament to exquisite craftsmanship and timeless elegance',
        objSrc: 'baseRing1.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing1.jpg',
    },
    {
        id: '2',
        name: 'Tanishq Olive Leaf Ring',
        sizes: [6,8,9,11],
        basePrice: 25000,
        description: 'Unveil the Whisper of Promises Diamond Finger Ring, a symbol of the profound promise you share',
        objSrc: 'baseRing2.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing2.jpg',
    },
    {
        id: '3',
        name: 'Pear Ring',
        sizes: [5,7,9,10],
        basePrice: 33000,
        description: 'Crafted in 18 Karat rose gold, this diamond ring captures the essence of a magical tale, inviting you to become part of it. Stone Clarity: I1',
        objSrc: 'baseRing3.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing3.jpg',
    },
    {
        id: '4',
        name: 'Oval Crown Ring',
        sizes: [5,7,9,10],
        basePrice: 41000,
        description: 'A tribute to the brilliance of diamonds this 18 Karat Finger Ring captures the essence of opulence a touch of grandeur. Stone Clarity: I1',
        objSrc: 'baseRing4.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing4.jpg',
    },
    {
        id: '5',
        name: 'Elisabeth Ring',
        sizes: [6,8,9,11],
        basePrice: 55000,
        description: 'Double the brilliance, the dual solitaire finger ring epitomizes love and connection with its diamonds in 18 Karat yellow gold. Stone Clarity: SI1',
        objSrc: 'baseRing5.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing5.jpg',
    },
    {
        id: '6',
        name: 'Sara Cusion Ring',
        sizes: [5,7,9,10],
        basePrice: 39500,
        description: 'A tribute to diamonds and 18 Karat white gold, this Finger Ring captures the essence of opulence with a touch of grandeur Stone Clarity: I1-I2',
        objSrc: 'baseRing6.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing6.jpg',
    },
    {
        id: '7',
        name: 'Sofia Angel Beauty Ring',
        sizes: [5,7,9,10],
        basePrice: 52500,
        description: 'Finest 18 Karat rose gold shapes this exquisite engagement ring, embodying promises and vows that bind hearts in eternal harmony. Stone Clarity: I1',
        objSrc: 'baseRing7.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing7.jpg',
    },
    {
        id: '8',
        name: 'Clover Gem Ring',
        sizes: [6,8,9,11],
        basePrice: 46000,
        description: 'Cherish the brilliance of diamond elegance with this 18 Karat rose gold Ring, an embodiment of sophistication and enchantment. Stone Clarity: I1',
        objSrc: 'baseRing8.glb',
        category: 'Finger Ring',
        imgSrc: 'baseRing8.jpg',
    }
];

export {categories, collection, weddrings, baseRingModelData};