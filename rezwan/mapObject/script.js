const items = [
  {
    "id": 1,
    "name": "Laptop",
    "isActive": true,
    "price": 1200.99
  },
  {
    "id": 2,
    "name": "Smartphone",
    "isActive": false,
    "price": 799.49
  },
  {
    "id": 3,
    "name": "Tablet",
    "isActive": true,
    "price": 450.00
  },
  {
    "id": 4,
    "name": "Headphones",
    "isActive": false,
    "price": 120.00
  },
  {
    "id": 5,
    "name": "Smartwatch",
    "isActive": true,
    "price": 199.99
  }
]


const active_items = items.filter(item => item.isActive).
  map(item => ({ name: item.name, price: item.price }));
console.log(active_items);
