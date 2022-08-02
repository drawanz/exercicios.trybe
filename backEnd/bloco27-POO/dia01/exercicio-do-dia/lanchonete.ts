class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get nome(): string {
    return this._name;
  }
}

class Item {
  private _orderName: string;
  private _orderPrice: number;

  constructor(orderName: string, orderPrice: number) {
    this._orderName = orderName;
    this._orderPrice = orderPrice;
  }

  set name(newValue: string) {
    this._orderName = newValue;
  }

  get name(): string {
    return this._orderName;
  }

  get price(): number {
    return this._orderPrice;
  }

  set price(newValue: number) {
    this._orderPrice = newValue;
  }
}

class Order {
  private _client: Client;
  private _items: Item[];
  private _payment: string;
  private _discount?: number;

  constructor (client: Client, items: Item[], payment: string, discount: number | undefined) {
    this._client = client;
    this._items = items;
    this._payment = payment;
    this._discount = discount;
  }

  set client(newValue: Client) {
    this._client = newValue;
  }

  set items(newValue: Item[]) {
    this._items = newValue;
  }

  set payment(newValue: string) {
    this._payment = newValue;
  }

  set discount(newValue: number | undefined) {
    this._discount = newValue;
  }

  get client(): Client {
    return this._client;
  }

  get items(): Item[] {
    return this._items;
  }

  get payment(): string {
    return this._payment
  }

  get discount(): number | undefined {
    return this._discount as number | undefined;
  }

  total(): number {
    const sum = this._items.map((e) => e.price).reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return sum;
  }

  totalWithDiscount(): number | string {
    if (this._discount) {
      const valueWithDiscount = this.total() - (this.total() * this._discount);
      return valueWithDiscount;
    }
    return 'Desconto não informado!';
  }
}

const pedido = new Item('batata frita', 18)
const pedido2 = new Item('coca-cola', 5)
const pedido3 = new Item('coxinha', 12)
const pedidos = [pedido, pedido2, pedido3]
const cliente1 = new Client('Ladylane');
// client: Client, items: Item[], payment: string, discount: number | undefined
const ordering = new Order(cliente1, pedidos, 'cartao', 0.2)
console.log(ordering.totalWithDiscount());

// class OrderClient extends Client {
//   private _payment: string;
// }