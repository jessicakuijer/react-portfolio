import React from 'react'

function About() {
    return (
        <section id="about-me">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div className="about-me-img">
							<img src="assets/img/about4.jpg" alt="Jessica Kuijer" className="img-fluid"/>
						</div>

					</div>
					<div className="col-lg-7">
						<div className="about-me-text">
							<div className="about-me-title">
								<p>Introduction</p>
								<p>DEVELOPPEUSE WEB & WEB MOBILE</p>
							</div>
						</div>
						<div className="about-me-explanation">
							<p>
								Récemment formée au développement web et technologies mobiles, j'utilise HTML, CSS, Javascript, PHP et progresse de manière autonome sur d’autres langages et frameworks comme REACT JS.<br/>
								Très appliquée, je tends à produire un code de qualité et maintenable dans le
								temps.<br/>
								Je mets à votre service et au service des clients mon dynamisme, ma curiosité et ma rapide capacité d'adaptation.<br/>
								Autodidacte, sociable, dynamique et faisant preuve de leadership, je parle anglais et français.
								Je suis mélomane et j'aime partager cette passion. 
							</p>
						</div>

						<div className="row about-me-information">
							<div className="col-lg-6 col-md-6">
								<div className="about-me-information-detail">
									<i className="far fa-user"></i>
									<p>Nom:</p>
									<p>Jessica Kuijer</p>
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="about-me-information-detail">
									<i className="far fa-envelope-open"></i>
									<p>Me contacter:</p>
									<p>Envoyez moi un message via le Chatbot.</p>
								</div>
								
							</div>
						</div>
						<div className="about-me-information-cta">
							<a href="https://www.jessicakuijer.com/assets/docs/CV_Jessica_Kuijer.pdf" target="_blank">Télécharger CV <i className="fas fa-file"></i></a>
							</div>
						<div className="about-me-information-cta">
							<a href="https://www.linkedin.com/in/jessicakuijer/" target="_blank">Profil Linked <i className="fab fa-linkedin"></i></a>
						</div>
						
					</div>
				</div>
			</div>

		</section>
    )
}

export default About
