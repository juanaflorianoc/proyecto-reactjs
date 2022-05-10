

export const productList = [
    {
        name: 'Maceta BALI', 
        info: '15cm de diámetro x 10cm de alto x 10cm de diámetro boca interior',
        price: 600,
        image: '../img/productos/bali.jpg', 
        stock: 3,
        id: 1,
    },
    {
        name: 'Maceta GEVA', 
        info: '12,5cm de lado x 15cm de alto x 10cm de lado boca interior',
        price: 600,
        image: '../img/productos/geva.jpg', 
        stock: 2,
        id: 2,
    },
    {
        name: 'Maceta KAI', 
        info: '10cm de lado x 8cm de alto x 9cm de lado boca interior',
        price: 600,
        image: '../img/productos/kai.jpg', 
        stock: 5,
        id: 3,
    },
    {
        name: 'Maceta LANKA', 
        info: '18,5cm de alto x 11cm de diámetro interno',
        price: 600,
        image: '../img/productos/lanka.jpg', 
        stock: 5,
        id: 4,
    },
    {
        name: 'Maceta MALAUI L', 
        info: '10cm de diámetro x 10cm de alto x 8cm de diámetro boca interior',
        price: 600,
        image: '../img/productos/malaui-l.jpg', 
        stock: 5,
        id: 5,
    },
    {
        name: 'Maceta MALAUI S', 
        info: '10cm de diámetro x 10cm de alto x 8cm de diámetro boca interior',
        price: 600,
        image: '../img/productos/malaui-s.jpg', 
        stock: 5,
        id: 6,
    },
    {
        name: 'Maceta NAOSHIMA', 
        info: '14cm de diámetro externo x 12cm de alto x8cm de diámetro boca superior interna',
        price: 600,
        image: '../img/productos/naoshima.jpg', 
        stock: 5,
        id: 7,
    },
    {
        name: 'Maceta OSAKA', 
        info: 500,
        image: '../img/productos/osaka.jpg', 
        price: 600,
        stock: 5,
        id: 8,
    },
    {
        name: 'Maceta TAIPEI', 
        info: '12cm de lado x 6cm de algo x 9cm lado interior',
        price: 600,
        image: '../img/productos/taipei.jpg', 
        stock: 5,
        id: 9,
    },
    {
        name: 'Maceta TALUK', 
        info: '12cm de lado x 6cm de algo x 9cm lado interior',
        image: '../img/productos/taluk.jpg', 
        price: 600,
        stock: 5,
        id: 10,
    },
];

const task = new Promise((resp) => {
	resp(productList)
}, 2000)

export const getItem = () => {
	return task
}