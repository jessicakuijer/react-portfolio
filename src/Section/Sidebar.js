import React, { useEffect } from 'react'
import Typed from 'typed.js'



function Sidebar() {

	
    /* Dans une class on utilise ComponentDidMount */
	useEffect( () => {
	
		console.log('salut');
		new Typed('#typed' , {
			strings: [
				'eb Développeuse...',
				'onderWoman!'
			],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true
		})
	}) 


    return (
        <div id="sidebar">
		<div className="sidebar-title">
			<div className="sidebar-title-img">
				<img src="assets/img/about.jpg" alt="Jessica Kuijer" className="img-fluid"/>
			</div>
			<div className="sidebar-title-text">
				Jessica Kuijer <h6>W<span id="typed"></span></h6>
			</div>
		</div>

		<nav className="menu">
			<ul>
				<li><a href="#main-part">Accueil</a></li>
				<li><a href="#about-me">A propos</a></li>
				<li><a href="#services">Services</a></li>
				<li><a href="#work">Portfolio</a></li>
				<li><a href="#blog">Blog</a></li>
			</ul>
		</nav>

		<div className="copyright">
			&copy;2021 JESSICA KUIJER - Tous droits réservés.
		</div>
	</div>
    )
}

export default Sidebar
