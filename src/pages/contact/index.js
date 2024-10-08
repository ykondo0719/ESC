import React from 'react';
import './styles.contact.css';

import RouterBar from '../../components/routerBar'
import ContactForm from './ContactForm';

import Map from '../../assets/img/map.png'
import Location_icon from '../../assets/img/location-icon-d.png'
import Phone_icon from '../../assets/img/phone-icon-d.png'
import Mail_icon from '../../assets/img/mail-icon-d.png'

const routerData = [
	{ router: "Contact Us", link: "/contact" }
]

const contactData = {
	title: 'Electron Storage Corporation',
	data: [
		{ icon: Location_icon, payload: '2932 Ruger Dr. Suite B Royse City, TX 75135' },
		{ icon: Phone_icon, payload: '+1 234567890  ' },
		{ icon: Mail_icon, payload: 'info@Electronstoragecorp.com' }
	]
}

function Contact() {
	return (
		<div className="contact">
			<RouterBar router={routerData} />
			<div className='contact-hero'></div>
			<div className='contact-form-container'>
				<div className='contact-form-title'>Contact Us</div>
				<ContactForm />
			</div>
			<div className='location'>
				<div className='location-title'>Our Location</div>
				<div className='location-container'>
					<div className='location-map' data-aos='zoom-in'>
						<img src={Map} alt='map' />
					</div>
					<div className='location-contact'>
						<div className='location-contact-title' data-aos='flip-down'>{contactData.title}</div>
						<div className='location-contact-items'>
							{
								contactData.data.map((item) => (
									<div className='location-item' data-aos='flip-down'>
										<img src={item.icon} alt='icon' />
										<div className='location-data'>{item.payload}</div>
									</div>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
