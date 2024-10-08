import React from 'react';
import './styles.home.css';
import Hero from '../../components/home/hero';
import Features from '../../components/home/feature';
import Parta from '../../components/home/parta';
import Partb from '../../components/home/partb';
import Partc from '../../components/home/partc';
import Partd from '../../components/home/partd';
import Parte from '../../components/home/parte';
import Character from '../../components/home/character';
import Achieve from '../../components/home/achieve';
import Usecase from '../../components/home/usecase';
// import HomeBanner from '../../components/home/banner';

function Home() {
	return (
		<div className="home">
			<Hero />
			{/* <HomeBanner /> */}
			<Partd />
			<Character />
			<Features />
			<Usecase />
			<Parta />
			<Partb />
			<Partc />
			<Parte />
			<Achieve />
		</div>
	);
}

export default Home;
