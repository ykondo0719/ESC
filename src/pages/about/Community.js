import React from 'react';
import './styles.about.css';
import RouterBar from '../../components/routerBar';
import ESC from '../../components/about/community/ESC';
import TTZ from '../../components/about/community/TTZ';
import TQ from '../../components/about/community/TQ';
import WES from '../../components/about/community/WES';

const routerData = [
    {router: "About Us", link: "/about-us/company"},
    {router: "Community & Development", link: "/about-us/community-dev"}
]

function About() {
	return (
		<div className="about">
			<RouterBar router={routerData} />
			<div className='community-hero'></div>
			<ESC />
			<TTZ />
			<TQ />
			<WES />
		</div>
	);
}

export default About;
