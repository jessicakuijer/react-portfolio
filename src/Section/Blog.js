import React from 'react'

function Blog() {
    return (
        <section id="blog">
			<div className="container">
				<div className="section-title">
					Blog
				</div>
			</div>

			<div className="container-video">
				<div className="row">
					<div className="col colvideo">
						<div className="video">
							<iframe width="300" height="215" src="https://www.youtube-nocookie.com/embed/Mmk6m-KjP9g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
					<div className="col-12">
						<div className="text-blog">
							<p><a href="https://socialbuilder.org/" alt="Social Builder" target="_blank">Social Builder</a>, entreprise sociale experte dans la réussite des femmes dans le numérique, m'a propulsée dans le monde numérique via le programme Women In Digital 93. <br/>J'ai pu bénéficier grâce à leur soutien, accompagnement, séances de coaching et mentorat, d'une formation pour devenir développeuse web via <a href="https://www.wf3.fr/" alt="webforce3" target="_blank">Webforce3</a>. <br/>23/03/2020 au 25/09/2020 : 490h de formation et 245h en entreprise.<br/>	
							</p>
							<ul>Certification OPQUAST "Maitrise de la qualité en projet web" obtenu en MAI 2021:
								<a href="https://directory.opquast.com/fr/certificat/U9RHI6/" target="_blank"><li>Lien vers le fichier</li></a>
							</ul>
							<ul>Titre professionnel RNCP BAC+2 (reconnu et délivré par l’Etat, niveau 5, bac+2) obtenu en OCTOBRE 2020:
								<a href="assets/docs/att_fin_formation_jessica_kuijer.pdf" target="_blank"><li>développeur web et web mobile. Entretien face à un jury.</li></a>
							</ul>
							<ul>Certifications professionnelles CNCP (catégorie C) acquises en SEPTEMBRE 2020:
								<a href="assets/docs/certification-tech-integration-web_jessica-kuijer.pdf" target="_blank"><li>techniques d’intégration Web (front-end)</li></a>
								<a href="assets/docs/certification-tech-dev-web_jessica-kuijer.pdf" target="_blank"><li>techniques de développement Web (back-end)</li></a>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Blog
