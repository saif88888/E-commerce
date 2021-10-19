import CheckoutSteps from '../components/CheckoutSteps';
import { getUserInfo, getShipping, setShipping } from '../localStorage';

const ShippingScreen = {
	after_render: () => {
		document
			.getElementById('shipping-form')
			.addEventListener('submit', async (e) => {
				e.preventDefault();
				setShipping({
					Address: document.getElementById('Address').value,
					City: document.getElementById('City').value,
					Postcode: document.getElementById('Postcode').value,
					Country: document.getElementById('Country').value,
				});
				document.location.hash = '/payment';
			});
	},
	render: () => {
		const { name } = getUserInfo();
		if (!name) {
			document.location.hash = '/';
		}
		const { Address, City, Postcode, Country } = getShipping();
		return `
		${CheckoutSteps.render({ step1: true, step2: true })}
		<div class="form-container">
        <form id="shipping-form">
        <ul class="form-items">
        <li>
            <h1>Shipping</h1>
        </li>
        <li>
        <label for="Address">Address</label>
        <input type="text" name="Address" id="Address" value="${Address}"/>
        </li>

		<li>
        <label for="City">City</label>
        <input type="text" name="City" id="City" value="${City}"/>
        </li>

		<li>
        <label for="Postcode">Postcode</label>
        <input type="text" name="Postcode" id="Postcode" value="${Postcode}"/>
        </li>

		<li>
        <label for="Country">Country</label>
        <input type="text" name="Country" id="Country" value="${Country}"/>
        </li>
        
       
        <li>
        <button type="submit" class="primary">Contiune</button>
        </li>

		
        
        </ul>
        </form>
        </div>`;
	},
};

export default ShippingScreen;
