/**
 * Created by deod on 7/22/18.
 */


// Single responsibility

// Пример где принцип нарушается. Во-первых, по двойному щелчку на названии продукта мы добавляем его в массив items модели корзины. Во-вторых, по двойному щелчку мы также добавляем продукт в предсталение корзины, добавляем новый элемент в список #cart. В-третьих, у нас есть код, выводящий список продуктов.

// Модель Продукт
function Product(id, description) {
    this.getId = function() {
        return id;
    };
    this.getDescription = function() {
        return description;
    };
}

// Модель Корзина
function Cart() {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
    };

    this.getItems = function(item) {
        return items;
    };
}

(function() {
    var products = [
            new Product(1, 'MacBook Air'),
            new Product(2, 'iPhone 5s'),
            new Product(3, 'iPad mini')
        ],
        cart = new Cart();

    /**
     * Функция добавления товара в корзину
     */
    function addToCart() {
        var productId = $(this).attr('id');
        var product = $.grep(products, function(x) {
            return x.getId() == productId;
        })[0];
        cart.addItem(product);

        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id-cart', product.getId())
            .appendTo('#cart');
    }

    products.forEach(function(product) {
        $('<li></li>')
            .html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(addToCart)
            .appendTo('#products');
    });
})();


