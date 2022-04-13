const Services = () => {
	const servicesData = {
		titles: [
			'Desenvolvimento full stack',
			'Sites leves e rápidos',
			'E-commerces',
			'SEO',
			'Estratégias de Marketing',
			'Hospedagem AWS/Azure',
		],
		icons: [
			'fa-solid fa-layer-group',
			'fas fa-bolt',
			'fas fa-cart-plus',
			'fas fa-chart-line',
			'fas fa-chess-pawn',
			'fas fa-cloud',
		],
	};

	for (let i = 0; i < servicesData.titles.length; i++) {
		const servicesCardContainer = document.querySelector(
			'.services-card-container'
		);
		servicesCardContainer.innerHTML += `
		<div class="services-card">
			<i class="${servicesData.icons[i]}"></i>
			<h3>${servicesData.titles[i]}</h3>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing
				elit. Iste, porro asperiores cum voluptas quidem quos ab
				molestias aperiam veritatis velit excepturi ullam
				reiciendis, dicta exercitationem voluptate et sunt
				suscipit! Nihil.
			</p>
		</div>`;
	}
};

const Jobs = () => {
	const jobsData = {
		titles: ['Projeto 2', 'Projeto 3', 'Projeto 4', 'Projeto 5'],
		descriptions: [
			'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Provident maxime atque in similique autem, inventore rerum quisquam eius ipsam saepe fugiat soluta odit sed veritatis sequi possimus totam, suscipit dignissimos.',
			'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Provident maxime atque in similique autem, inventore rerum quisquam eius ipsam saepe fugiat soluta odit sed veritatis sequi possimus totam, suscipit dignissimos.',
			'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Provident maxime atque in similique autem, inventore rerum quisquam eius ipsam saepe fugiat soluta odit sed veritatis sequi possimus totam, suscipit dignissimos.',
			'Lorem ipsum dolor sit amet consectetur,adipisicing elit. Provident maxime atque in similique autem, inventore rerum quisquam eius ipsam saepe fugiat soluta odit sed veritatis sequi possimus totam, suscipit dignissimos.',
		],
	};
	for (let i = 0; i < jobsData.titles.length; i++) {
		const otherJobsContainer = document.querySelector(
			'.other-jobs-container'
		);
		otherJobsContainer.innerHTML += `
		<div class="job-card" id="job${i + 2}">
			<div class="job-card-cover">
				<p class="job-card-title">${jobsData.titles[i]}</p>
				<p class="job-card-description">
					${jobsData.descriptions[i]}
				</p>
			</div>
		</div>`;
	}
};

const Links = () => {
	const linksData = {
		titles: ['Links', 'Links', 'Links'],
		descriptions: [
			'Base de conhecimentos',
			'Trabalhe conosco',
			'Últimos projetos',
			'Política de privacidade',
			'Contato',
		],
	};
	for (let i = 0; i < linksData.titles.length; i++) {
		const footerContainerLinksList = document.querySelector(
			'.footer-container__links'
		);
		footerContainerLinksList.innerHTML += `
			<div class="footer-container__links--list">
				<p class="footer-title">${linksData.titles[i]}</p>
				<ul>
					<li><a href="#">Base de conhecimento</a></li>
					<li><a href="#">Trabalhe Conosco</a></li>
					<li><a href="#">Últimos Projetos</a></li>
					<li><a href="#">Politicas de Privacidade</a></li>
					<li><a href="#">Contato</a></li>
				</ul>
			</div>`;
	}
};

Services();
Jobs();
Links();
