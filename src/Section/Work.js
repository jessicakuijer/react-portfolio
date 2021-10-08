import React from 'react'

function Work() {
    return (
        <section id="work">
			<div className="container">
				<div className="section-title">
					Portfolio
				</div>

				<div className="our-projects-detail">
					<div className="opd-filter">
					<button class="filter-button filter-data" data-filter="all">TOUS</button>
						<button class="filter-button" data-filter="react">REACT</button>
						<button class="filter-button" data-filter="vuejs">VUEJS</button>
						<button class="filter-button" data-filter="javascript">Javascript</button>
						<button class="filter-button" data-filter="symfony">SYMFONY</button>
						<button class="filter-button" data-filter="wordpress">Wordpress</button>
					</div>
					<div className="projects">
						<div className="row">
							<div className="col-lg-4 col-md-6 filter react">
								<div className="thumbnail">
									<div className="thumbnail-img">
										<img src="assets/img/work/screenshot-portfolio.PNG" alt="portfolio Jessica Kuijer"/>
									</div>
	
									<div className="caption">
										<h3>Portfolio</h3>
										<h5>Autre version du site réalisé en HTML, CSS & JS</h5>
										<p className="social-intro">
											<a href="https://jessicakuijer.com" alt="Portfolio jessica kuijer" target="_blank">
												<i className="fas fa-link"></i>
											</a>
										</p>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 filter vuejs">
								<div class="thumbnail">
									<div class="thumbnail-img">
										<img src="assets/img/work/screenshot-leaderboard.png" alt="MedalMadness Leaderboard"/>
									</div>
	
									<div class="caption">
										<h3>Leaderboard</h3>
										<h5>Création d'un projet client en Vue JS et intégration d'une maquette graphique</h5>
										<p class="social-intro">
											<a href="https://discovery-medalmadness.netlify.app/" alt="Projet VUEJS" target="_blank">
												<i class="fas fa-link"></i>
											</a>
										</p>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 filter javascript">
								<div class="thumbnail">
									<div class="thumbnail-img">
										<img src="assets/img/work/screenshot-rogererrera.png" alt="script-recherche"/>
									</div>
	
									<div class="caption">
										<h3>Script de recherche</h3>
										<h5>Ajout d'un script de recherche avec filtres sur le site d'un client</h5>
										<p class="social-intro">
											<a href="http://rogererrera.fr/publications/" alt="Projet Javascript" target="_blank">
												<i class="fas fa-link"></i>
											</a>
										</p>
									</div>
								</div>
							</div>

							<div class="col-lg-4 col-md-6 filter vuejs">
								<div class="thumbnail">
									<div class="thumbnail-img">
										<img src="assets/img/work/screenshot-laravel-vue.png" alt="crud-laravel-vuejs"/>
									</div>
	
									<div class="caption">
										<h3>CRUD Laravel / Vue JS</h3>
										<h5>Création d'un CRUD avec Laravel et Vue JS</h5>
										<p class="social-intro">
											<a href="https://github.com/jessicakuijer/Laravel-vuejs-crud" alt="crud-laravel-vuejs" target="_blank">
												<i class="fab fa-github"></i>
											</a>
										</p>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 filter react">
								<div className="thumbnail">
									<div className="thumbnail-img">
										<img src="assets/img/work/screenshot-feedbacklawyers.png" alt="projet Feedback Lawyers Jessica Kuijer"/>
									</div>
	
									<div className="caption">
										<h3>Feedback Lawyers</h3>
										<h5>REACT, PHP, API calls</h5>
										<p className="social-intro">
											<a href="https://github.com/jessicakuijer/search-lawyers-react-component-for-wordpress" alt="repository projet search-lawyers-component-for-wordpress" target="_blank">
											<i className="fab fa-github"></i>
											</a>
											<a href="https://www.feedbacklawyers.com" alt="feedback lawyers" target="_blank">
												<i className="fas fa-link"></i>
											</a>
										</p>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 filter symfony">
								<div className="thumbnail">
									<div className="thumbnail-img">
										<img src="assets/img/work/screenshot-domilicious.png" alt="projet Domilicious Jessica Kuijer"/>
									</div>
	
									<div className="caption">
										<h3>Domi'Licious</h3>
										<h5>Framework : SYMFONY</h5>
										<p className="social-intro">
											<a href="https://github.com/jessicakuijer/domilicious" alt="repository projet domilicious" target="_blank">
											<i className="fab fa-github"></i>
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 filter wordpress">
								<div className="thumbnail">
									<div className="thumbnail-img">
										<img src="assets/img/work/screenshot-musicflow.png" alt="blog Jessica Kuijer"/>
									</div>
	
									<div className="caption">
										<h3>MusicFlow</h3>
										<h5>Wordpress personnalisé</h5>
										<p className="social-intro">
											<a href="http://musicflow.fr/" alt="musicflow" target="_blank">
											<i className="fas fa-link"></i>
											</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 filter wordpress">
								<div className="thumbnail">
									<div className="thumbnail-img">
										<img src="assets/img/work/screenshot-miphotographies.png" alt="site de Marc Ithar"/>
									</div>
	
									<div className="caption">
										<h3>Mi-Photographies</h3>
										<h5>Wordpress personnalisé du photographe Marc Ithar</h5>
										<p className="social-intro">
											<a href="http://www.mi-photographies.fr" alt="mi-photographies" target="_blank">
											<i className="fas fa-link"></i>
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Work