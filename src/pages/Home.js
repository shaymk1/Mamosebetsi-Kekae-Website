import { useState } from 'react';
import Skills from './Skills';
import About from './About';
//import Contact from './Contact';
import Header from './Header';
import LeftBar from './LeftBar';
import MobileMenu from './MobileMenu';
import NavBar from './NavBar';

const Home = () => {
	const [showPage, setShowPage] = useState('home');

	return (
		<div id="home" className="App flex h-max bg-[#1e1e1e]">
			<div className="bg-[#262526] fixed h-full hidden lg:block">
				<LeftBar />
			</div>
			<div className="bg-[#1e1e1e] lg:pl-72 h-full ">
				<div className="lg:hidden">
					<MobileMenu />
				</div>
				<div className="bg-[#424042] h-16 w-full fixed hidden lg:block">
					<NavBar showPage={showPage} setShowPage={setShowPage} />
				</div>
				{showPage === 'home' ? (
					<>
						<Header id="Header" />
						<About id="About" />
						<Skills id="Resume" />
						{' '}
					</>
				) : showPage === 'about' ? (
					<About id="About" />
				) : showPage === 'resume' ? (
					<Skills id="Resume" />
				
				) : null}
			</div>
		</div>
	);
};

export default Home;



// <Contact id="Contact" />
//  : showPage === 'contact' ? (
// 					<Contact id="Contact" />
