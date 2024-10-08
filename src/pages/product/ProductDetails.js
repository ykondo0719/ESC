import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.product.css';
import RouterBar from '../../components/routerBar';

import Review from '../../assets/img/review.png'


function ProductDetails() {
	const location = useLocation();
	const params = location.state || {};

	const [qty, setQty] = useState(1);

	const handleCount = (type) => {
		var i = qty;
		if (type === 'plus') {
			i++;
			setQty(i);
		} else if (i > 1) {
			i--;
			setQty(i);
		}
	}

	const routerData = [
		{ router: "Product", link: "/products" },
		{ router: "Product Details", link: `/product/${params.id}` }
	]

	return (
		<div className="product-detail-container">
			<RouterBar router={routerData} />
			<div className='product-detail'>
				<div className='product-detail-img' data-aos='zoom-in'>
					<img src={params.img} alt='img' />
				</div>
				<div className='product-detail-data' data-aos='fade-down'>
					<div className='product-detail-name'>{params.name}</div>
					<div className='product-detail-star'>
						<img src={Review} alt='review' />
					</div>
					<div className='product-detail-sku'>Sku: <span>{params.sku}</span></div>
					{params.characters.map((character, index) => (
						<div key={index} className="feature-item">
							{character}
						</div>
					))}
					<div className='product-detail-capacity'>
						<div>Capacity</div>
						<div className='product-count-select'>
							<select
								name="Capacity"
							// value={value}
							// onChange={handleChange}
							>
								{
									params.capacities.map((item, index) => (
										<option key={index} value={item}>{item}</option>
									))
								}
							</select>
						</div>
					</div>
					<div className='product-detail-qty'>
						<div>Qty</div>
						<div className='product-qty-count'>
							<div onClick={() => handleCount('minus')}>-</div>
							<div>{qty}</div>
							<div onClick={() => handleCount('plus')}>+</div>
						</div>
					</div>
					<Link to='/products'>
						<div className='product-detail-button'>Contact Us</div>
					</Link>
				</div>
			</div>
			<div className='product-detail-description'>
				<div className='product-description-title'>
					<div data-aos='fade-down'>Description</div>
				</div>
				<div className='product-item-value'>{params.description}</div>
			</div>
			<div className='product-detail-description'>
				<div className='product-specifications-title'>Specifications</div>
				<iframe
					src={params.pdf}
					width="100%"
					height="800"
					title="fdsfsdfdsfsdfsdfsdf"
				/>
			</div>
		</div>
	);
}

export default ProductDetails;
