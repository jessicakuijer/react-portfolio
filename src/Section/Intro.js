import React from 'react'

function Intro() {
    return(
        <section id="intro-area">
			<div className="container">
				<div className="caption-intro">
					<h1>Bienvenue sur mon portfolio</h1>
					<h2><i className="fas fa-terminal"></i>
					J'accompagne les entreprises dans<br/>
					le développement d'applications web et mobiles</h2>
					<h5>HTML / CSS / JAVASCRIPT / PHP / SYMFONY / VUE JS / REACT JS</h5>
					<div className="social-intro">
						<ul>
							<li>
								<a href="https://www.facebook.com/jessicakuijer" target="_blank">
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/jessika2001" target="_blank">
									<i className="fab fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com/in/jessicakuijer/" target="_blank">
									<i className="fab fa-linkedin-in"></i>
								</a>
							</li>
							<li>
								<a href="https://github.com/jessicakuijer" target="_blank">
									<i className="fab fa-github"></i>
								</a>
							</li>
						</ul>
					</div>

					<a href="#about-me">
					<div className="mouse_scroll">
						<div className="mouse">
							<div className="wheel"></div>
						</div>
						<div>
							<span className="m_scroll_arrows un"/>
							<span className="m_scroll_arrows deux"/>
							<span className="m_scroll_arrows trois"/>
						</div>
						
					</div>
					</a>
					
				</div>
			</div>

		</section>
    )
}

export default Intro