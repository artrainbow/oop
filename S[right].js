/**
 * Created by deod on 7/22/18.
 */


// Single responsibility

function Event(name) {
    this._handlers = [];
    this.name = name;
}

// Функция добавления обработчика события
Event.prototype.addHandler = function(handler) {
    this._handlers.push(handler);
};

// Функция удаления обработчика события
Event.prototype.removeHandler = function(handler) {
    for (var i = 0; i < handlers.length; i++) {
        if (this._handlers[i] == handler) {
            this._handlers.splice(i, 1);
            break;
        }
    }
};

// Срабатывание события (выполнение всех связанных обработчиков)
Event.prototype.fire = function(eventArgs) {
    this._handlers.forEach(function(h) {
        h(eventArgs);
    });
};

var eventAggregator = (function() {
    var events = [];

    function getEvent(eventName) {
        return $.grep(events, function(event) {
            return event.name === eventName;
        })[0];
    }

    return {
        publish: function(eventName, eventArgs) {
            var event = getEvent(eventName);

            if (!event) {
                event = new Event(eventName);
                events.push(event);
            }
            event.fire(eventArgs);
        },

        subscribe: function(eventName, handler) {
            var event = getEvent(eventName);

            if (!event) {
                event = new Event(eventName);
                events.push(event);
            }

            event.addHandler(handler);
        }
    };
})();

/**
 * Модуль корзины
 */
function Cart() {
    var items = [];

    this.addItem = function(item) {
        items.push(item);

        /**
         * после добавления элемента в корзину публикуем событие
         * itemAdded
         */
        eventAggregator.publish("itemAdded", item);
    };
}

/**
 * Представление корзины
 */
var cartView = (function() {
    /**
     * представление корзины подписано на событие itemAdded
     * и при наступлении этого события - отображает новый элемент
     */
    eventAggregator.subscribe('itemAdded', function(eventArgs) {
        var newItem = $('<li></li>')
            .html(eventArgs.getDescription())
            .attr('id-cart', eventArgs.getId())
            .appendTo('#cart');
    });
})();

/**
 * Контроллер корзины. Контроллер подписан на событие productSelected
 * и добавляет выбранный продукт в корзину
 */
var cartController = (function(cart) {
    eventAggregator.subscribe('productSelected', function(eventArgs) {
        cart.addItem(eventArgs.product);
    });
})(new Cart());

/**
 * Модель Продукта
 */
function Product(id, description) {
    this.getId = function() {
        return id;
    };
    this.getDescription = function() {
        return description;
    };
}

var products = [
    new Product(1, 'MacBook Air'),
    new Product(2, 'iPhone 5s'),
    new Product(3, 'iPad mini')
];

/**
 * Представление продукта
 */
var productView = (function() {
    function onProductSelected() {
        var productId = $(this).attr('id');
        var product = $.grep(products, function(x) {
            return x.getId() == productId;
        })[0];
        eventAggregator.publish('productSelected', {
            product: product
        });
    }

    products.forEach(function(product) {
        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(onProductSelected)
            .appendTo('#products');
    });
})();