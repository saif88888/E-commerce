//import data from '../data.js'; // we dont need it anymore after we installed the data in the backend
//also delete data.js from the frontend folder we dont need it for the same reason
// i used .. because i need to go back to the main src to access data.js

import axios from 'axios'; // its the way we import packages from npm
import Rating from '../components/Rating';
import { hideLoading, showLoading } from '../utils';
// using axios is much more benifits than using fetch method
const HomeScreen = {
	render: async () => {
		showLoading();
		const response = await axios({
			url: 'http://localhost:5000/api/products',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		hideLoading();

		// at this point we have to check the response
		if (!response || response.statusText !== 'OK') {
			return `<div>Error in getting data </div>`;
		}

		const products = response.data;

		// response.json will return a promaise

		// fetch method accept two paramaters the first one is the url , the second one is a bunch of objects
		// we created a render function that convert products array to list of li inside a ul

		return `
        <ul class="products">
        ${products
			.map(
				(product) => `
        <li>
        <div class="product">
                           <a href="/#/product/${product._id}">
                               <img src="${product.image}" alt="${
					product.name
				}">
                           </a>
                           <div class="product-name">
                               <a href="/#/product/1">
                            ${product.name}
                            </a>
                           </div>
                           <div class="product-rating"> 
                            ${Rating.render({
							value: product.rating,
							text: `${product.numReviews} reviews`,
						})}
                           </div>
                           <div class="product-brand">
                               ${product.brand}
                           </div>
                           <div class="product-price">
                               £${product.price}
                           </div>
                       </div>
        </li>
        `
			)
			.join('\n')}
        `;
	},
};

export default HomeScreen;
