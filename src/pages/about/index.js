import React from 'react';
import './styles.about.css';
import RouterBar from '../../components/routerBar';
import Achieve from '../../components/about/achieve';
import Who from '../../components/about/who';
import Tech from '../../components/about/tech';
import Culture from '../../components/about/culture';
import Practice from '../../components/about/practice';

const routerData = [
    {router: "About Us", link: "/about-us/community-dev"},
    {router: "Company Details", link: "/about-us/company"}
]

function About() {
	return (
		<div className="about">
			<RouterBar router={routerData} />
			<div className='about-hero'></div>
			<Who />
			<Culture />
			<Tech />
			<Achieve />
			<Practice />
		</div>
	);
}

export default About;
