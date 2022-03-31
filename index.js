const getHTMLForProductLI = (product) => {
	return `<li>${product.title}</li>`;
};

const getHTMLForProductDIV = (product) => {
	return `<div class="card">
			             <img class="size" src=${product.image}>
				<h2>${product.title}</h2>
				<p class="description">${product.description}</p>
				<p class="price"><a href="favorites.html" rel="stylesheet"><i class="material-icons">favorite_border</i> </a>                 ${product.price} Lei</p>
				<p class="category">${product.category}</p>
			</div>`;
};

// type: li, div
const createListOfProducts = (products, location, type) => {
	// apelam lista din HTML
	const list = document.querySelector(location);
	// declaram lista LI-urilor ca fiind goala
	let listOfProductsHTML = "";
	// facem functie forEach pentru a apela fiecare element di ARRAY-ul de produse
	products.forEach((product) => {
		// declaram constanta cu care vom adauga li-uri in dom
		let productLi = "";
		// if (type === "li") {
		// 	productLi = getHTMLForProductDIV(product);
		// } else
		if (type === "div") {
			productLi = getHTMLForProductDIV(product);
		}
		// nu am inteles
		listOfProductsHTML = listOfProductsHTML + productLi;
	});

	list.innerHTML = listOfProductsHTML;
};

// apelam continutul din api
fetch("https://fakestoreapi.com/products", { method: "GET" })
	// cerem rezultatul de la back-end
	.then((res) => res.json())
	// afisam rezultatul primit de la back-end
	.then((products) => {
		createListOfProducts(products, "#products", "li");
		createListOfProducts(products, ".container_products", "div");
	});
