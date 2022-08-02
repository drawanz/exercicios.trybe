var Client = /** @class */ (function () {
    function Client(name) {
        this._name = name;
    }
    Object.defineProperty(Client.prototype, "nome", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
var Item = /** @class */ (function () {
    function Item(orderName, orderPrice) {
        this._orderName = orderName;
        this._orderPrice = orderPrice;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._orderName;
        },
        set: function (newValue) {
            this._orderName = newValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "price", {
        get: function () {
            return this._orderPrice;
        },
        set: function (newValue) {
            this._orderPrice = newValue;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var pedido = new Item('batata frita', 18);
console.log(pedido);
// class OrderClient extends Client {
//   private _payment: string;
// }
