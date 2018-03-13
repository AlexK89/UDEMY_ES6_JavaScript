// Old fashion way

function createBookShopOld(inventory) {
	return {
		inventory: inventory,
		inventoryValue: function () {
			return this.inventory.reduce((sum, book) => sum + book.price, 0);
		},
		priceForTitle: function (title) {
			return this.inventory.find(book => book.title === title).price //return price by title
		}
	}
}

const inventory = [
	{title: 'Javascript', price: 10},
	{title: 'PHP', price: 8},
	{title: 'Modern VueJS', price: 15}
];

const bookShop = createBookShopOld(inventory);

console.log('Inventory value is: ',bookShop.inventoryValue());
console.log('Price for PHP book is: ', bookShop.priceForTitle('PHP'));
console.log('=====================');


// New fashion way

function createBookShopNew(inventory) {
	return {
		inventory,
		inventoryValue() {
			return this.inventory.reduce((sum, book) => sum + book.price, 0);
		},
		priceForTitle(title) {
			return this.inventory.find(book => book.title === title).price //return price by title
		}
	}
}

const inventoryNew = [
	{title: 'Javascript', price: 10},
	{title: 'PHP', price: 8},
	{title: 'Modern VueJS', price: 15}
];

const bookShopNew = createBookShopNew(inventoryNew);

console.log('Inventory value is: ',bookShopNew.inventoryValue());
console.log('Price for PHP book is: ', bookShopNew.priceForTitle('Javascript'));