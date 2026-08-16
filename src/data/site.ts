export const site = {
	name: 'Orienťáček',
	fullName: 'Orienťáček Sedlčánky',
	legalName: 'Orienťáček Sedlčánky, z.s.',
	description:
		'Oddíl orientačního běhu pro děti a rodiny ze Sedlčánek a okolí. Tréninky, závody a zážitky v terénu.',
	url: 'https://orientaceksedlcanky.cz',
	email: 'orientacek@gmail.com',
	address: ['Na Hrázi 12', 'Čelákovice, 250 88'],
	nav: [
		{ href: '/', label: 'Aktuality' },
		{ href: '/galerie/', label: 'Galerie' },
		{ href: '/velikonocni-orientacek/', label: 'Velikonoční orienťáček' },
		{ href: '/mapovy-klic/', label: 'Mapový klíč' },
	],
	logo: '/brand/logo.png',
	favicon: '/favicon.png',
	heroImage: '/brand/hero.jpg',
	kidsBanner: '/brand/banner-runners.png',
	cityLogo: '/brand/logo-celakovice.png',
} as const;
