import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.product.css';
import RouterBar from '../../components/routerBar';
import { ProductCard } from './Card';

import Product_1 from '../../assets/img/produc-t.png'
import Product_2 from '../../assets/img/produc-t.png'
import Product_3 from '../../assets/img/produc-t.png'

import Product_Wall_1 from '../../assets/img/produc-b.png'
import Product_Wall_2 from '../../assets/img/produc-b.png'
import Product_Wall_3 from '../../assets/img/produc-b.png'

import Product_Soon_1 from '../../assets/img/pro-soon-1.png'
import Product_Soon_2 from '../../assets/img/pro-soon-2.png'
import Product_Soon_3 from '../../assets/img/pro-soon-3.png'

import PDF_rack from '../../assets/rack.pdf'
import PDF_wall from '../../assets/wall.pdf'


const routerData = [
	{ router: "Products", link: "/products" }
]

const productsData = {
	rack: {
		description: 'Our  HSC Rack mount battery is available in 24V, 3V, and 48V with capacity options ranging from 5kWh-20kWh.  This is the ideal model for industrial use in data centers and backup power.   It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular power plants and inverters like Ericsson, Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems.',
		items: [
			{
				id: 1, name: 'ESC Rack Mount', model: '24V', like: false, price: '$ 94.58', sku: 'ESC-RM-5.25/48',
				description: 'Each Hybrid Supercapacitor Battery module has a rated voltage range from 42V to 58.8V, with a capacity options ranging from 5250Wh to 21000Wh. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems. Custom voltages upon request.',
				characters: [
					'100% Depth of Discharge (DoD)',
					'Safe — No risk of thermal runaway',
					'Long Lifespan/Cycle Life',
					'Wide operating temperature',
					'Low ESR',
					'Green/Environmentally Friendly',
					'Low maintenance',
				],
				capacities: ['5kWh (100Ah)', '10kWh (200Ah)', '20kWh (400Ah)'],
				img: Product_1,
				pdf: PDF_rack,
			},
			{
				id: 2, name: 'ESC Rack Mount ', model: '36V', like: true, price: '$ 121.30', sku: 'ESC-RM-5.25/48',
				description: 'Each Hybrid Supercapacitor Battery module has a rated voltage range from 42V to 58.8V, with a capacity options ranging from 5250Wh to 21000Wh. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems. Custom voltages upon request.',
				characters: [
					'100% Depth of Discharge (DoD)',
					'Safe — No risk of thermal runaway',
					'Long Lifespan/Cycle Life',
					'Wide operating temperature',
					'Low ESR',
					'Green/Environmentally Friendly',
					'Low maintenance',
				],
				capacities: ['5kWh (100Ah)', '10kWh (200Ah)', '20kWh (400Ah)'],
				img: Product_2,
				pdf: PDF_rack,
			},
			{
				id: 3, name: 'ESC Rack Mount', model: '48V', like: false, price: '$ 131.00', sku: 'ESC-RM-5.25/48',
				description: 'Each Hybrid Supercapacitor Battery module has a rated voltage range from 42V to 58.8V, with a capacity options ranging from 5250Wh to 21000Wh. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems. Custom voltages upon request.',
				characters: [
					'100% Depth of Discharge (DoD)',
					'Safe — No risk of thermal runaway',
					'Long Lifespan/Cycle Life',
					'Wide operating temperature',
					'Low ESR',
					'Green/Environmentally Friendly',
					'Low maintenance',
				],
				capacities: ['5kWh (100Ah)', '10kWh (200Ah)', '20kWh (400Ah)'],
				img: Product_3,
				pdf: PDF_rack,
			},
		]
	},
	wall: {
		description: 'Our HSC Wall mount battery is available in 24V, 48V, and 72V with capacity options ranging from 5kWh-20kWh as well as custom options. This is the Ideal model for residential usage and backup power. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems.',
		items: [
			{
				id: 1, name: 'ESC Wall Mount', model: '24V', like: false, price: '$ 131.00', sku: 'ESC-RM-5.25/48',
				description: 'Each Hybrid Supercapacitor Battery module has a rated voltage range from 42V to 58.8V, with a capacity options ranging from 5250Wh to 21000Wh. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems. Custom voltages upon request.',
				characters: [
					'100% Depth of Discharge (DoD)',
					'Safe — No risk of thermal runaway',
					'Long Lifespan/Cycle Life',
					'Wide operating temperature',
					'Low ESR',
					'Green/Environmentally Friendly',
					'Low maintenance',
				],
				capacities: ['5kWh (100Ah)', '10kWh (200Ah)', '20kWh (400Ah)'],
				img: Product_Wall_1,
				pdf: PDF_wall,
			},
			{
				id: 2, name: 'ESC Wall Mount', model: '36V', like: true, price: '$ 121.30', sku: 'ESC-RM-5.25/48',
				description: 'Each Hybrid Supercapacitor Battery module has a rated voltage range from 42V to 58.8V, with a capacity options ranging from 5250Wh to 21000Wh. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems. Custom voltages upon request.',
				characters: [
					'100% Depth of Discharge (DoD)',
					'Safe — No risk of thermal runaway',
					'Long Lifespan/Cycle Life',
					'Wide operating temperature',
					'Low ESR',
					'Green/Environmentally Friendly',
					'Low maintenance',
				],
				capacities: ['5kWh (100Ah)', '10kWh (200Ah)', '20kWh (400Ah)'],
				img: Product_Wall_2,
				pdf: PDF_wall,
			},
			{
				id: 3, name: 'ESC Wall Mount', model: '48V', like: false, price: '$ 94.58', sku: 'ESC-RM-5.25/48',
				description: 'Each Hybrid Supercapacitor Battery module has a rated voltage range from 42V to 58.8V, with a capacity options ranging from 5250Wh to 21000Wh. It supports a standard charge and discharge current of 50A, with maximum pulse discharge up to 150A, and operates within temperatures from -20°C to 60°C. With a cycle life of over 50,000 cycles and compatibility with popular inverters like Victron and SMA, it`s designed for efficient, long-lasting performance in parallel systems. Custom voltages upon request.',
				characters: [
					'100% Depth of Discharge (DoD)',
					'Safe — No risk of thermal runaway',
					'Long Lifespan/Cycle Life',
					'Wide operating temperature',
					'Low ESR',
					'Green/Environmentally Friendly',
					'Low maintenance',
				],
				capacities: ['5kWh (100Ah)', '10kWh (200Ah)', '20kWh (400Ah)'],
				img: Product_Wall_3,
				pdf: PDF_wall,
			},
		]
	},
	soon: {
		description: '',
		items: [
			{ id: 1, name: 'Forklift', model: '', like: false, price: '$ 131.00', sku: 'ESC-RM-5.25/48', description: 'Figma ipsum component variant main layer. Background clip pen fill underline. Bold selection auto fill follower arrow scrolling overflow bold overflow. Move group blur effect arrow clip. Layer prototype connection subtract invite hand.', img: Product_Soon_1 },
			{ id: 2, name: 'Golf Cart', model: '', like: true, price: '$ 121.30', sku: 'ESC-RM-5.25/48', description: 'Figma ipsum component variant main layer. Background clip pen fill underline. Bold selection auto fill follower arrow scrolling overflow bold overflow. Move group blur effect arrow clip. Layer prototype connection subtract invite hand.', img: Product_Soon_2 },
			{ id: 3, name: 'Boat', model: '', like: false, price: '$ 94.58', sku: 'ESC-RM-5.25/48', description: 'Figma ipsum component variant main layer. Background clip pen fill underline. Bold selection auto fill follower arrow scrolling overflow bold overflow. Move group blur effect arrow clip. Layer prototype connection subtract invite hand.', img: Product_Soon_3 },
		]
	},
}


function Products() {

	const [flag, setFlag] = useState('rack')

	const handleFlag = (value) => {
		setFlag(value)
	}
	const notify = () => toast.info('Coming Soon !', {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
		// transition: Bounce,
	});;

	return (
		<div className="products-container">
			<RouterBar router={routerData} />
			<div className='products'>
				<div className='products-banner'>
					{/* <div className='product-banner-title' data-aos='zoom-in'>BEST</div> */}
					<div className='product-banner-sub' data-aos='zoom-in'>Solid-State ENERGY Storage</div>
					{/* <div className='product-banner-sub orbitron-font' data-aos='zoom-in'>on the market</div> */}
				</div>
				<div className='products-section'>
					<div className='product-title' data-aos='fade-up'>Products</div>
					<div className='product-category-bar' data-aos='fade-up'>
						<div className='product-fetch'>
							<div className={flag === 'rack' ? 'product-fetch-button button-selected' : 'product-fetch-button'} onClick={() => handleFlag('rack')}>Rack Mount Configuration</div>
							<div className={flag === 'wall' ? 'product-fetch-button button-selected' : 'product-fetch-button'} onClick={() => handleFlag('wall')}>Wall Mount Configuration</div>
							<div className={flag === 'soon' ? 'product-fetch-button button-selected' : 'product-fetch-button'} onClick={() => handleFlag('soon')}>Coming Soon</div>
						</div>
					</div>
					<div className='product-cards'>
						{flag === 'rack' &&
							productsData.rack.items.map((item) => (
								<ProductCard props={item} />
							))
						}
						{flag === 'wall' &&
							productsData.wall.items.map((item) => (
								<ProductCard props={item} />
							))
						}
						{flag === 'soon' &&
							productsData.soon.items.map((item) => (
								<ProductCard props={item} btn={Object.keys(productsData)[2]} action={notify} />
							))
						}
						<ToastContainer
							position="top-center"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
							// transition:Bounce
						/>
					</div>
					{flag === 'rack' &&
						<div>
							<div className='product-description-title'>
								<div data-aos='fade-down'>Description</div>
							</div>
							<div className='product-description-x'>{productsData.rack.description}</div>
						</div>
					}
					{flag === 'wall' &&
						<div>
							<div className='product-description-title'>
								<div data-aos='fade-down'>Description</div>
							</div>
							<div className='product-description-x'>{productsData.wall.description}</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default Products;
