const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250}
];
// Возвращает разметку конкретного товара
const renderGoodsItem = (title, price) => 
     `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// Если  функция только возвращает значение, можно сократить запись убрав фигурные скобки и return

// Собирает все товары и записывает их в .goods-list
const renderGoodsList = (list) => {
    let goodsList = list.map (item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(''); // метод join не обязательный, с его помощью мы добавили пробел между товарами, заменив тем самым запятую, которая добавляется по умолчанию. 
};
renderGoodsList (goods);

