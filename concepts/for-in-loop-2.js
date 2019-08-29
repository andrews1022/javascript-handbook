// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
	glasses: 1,
	books: 2,
	floss: 100
}

// The function:
function checkBasket(basket, lookingFor) {
	for (item in basket) {
		if (item === lookingFor) {
			return `${lookingFor} is in your basket.`
		}
	}
	return `That items is not in your basket.`
}