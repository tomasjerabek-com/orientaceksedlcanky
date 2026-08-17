export type GallerySection = {
	title: string;
	images: string[];
};

const base = '/media/posts/2/gallery';

export const gallerySections: GallerySection[] = [
	{
		title: 'Zakončení sezony 2023/2024',
		images: [
			`${base}/zakonceni20242.jpeg`,
			`${base}/zakonceni20244.jpeg`,
			`${base}/zakonceni20241.jpeg`,
			`${base}/zakonceni20243.jpeg`,
		],
	},
	{
		title: 'Závod Na Zájezdě 2022 (11. září)',
		images: [
			`${base}/zavod2022-img-5098-2.jpeg`,
			`${base}/zavod2022-img-5007-2.jpeg`,
			`${base}/zavod2022-img-5092-2.jpeg`,
			`${base}/zavod2022-img-4961-2.jpeg`,
			`${base}/zavod2022-img-4945-2.jpeg`,
			`${base}/zavod2022-img-4996-2.jpeg`,
			`${base}/zavod2022-img-4979-2.jpeg`,
			`${base}/zavod2022-img-5101-2.jpeg`,
			`${base}/zavod2022-img-5036-2.jpeg`,
			`${base}/zavod2022-img-5073-2.jpeg`,
			`${base}/zavod2022-img-5100-2.jpeg`,
			`${base}/zavod2022-img-5063-2.jpeg`,
			`${base}/zavod2022-img-5115-2.jpeg`,
			`${base}/zavod2022-img-5099-2.jpeg`,
			`${base}/zavod2022-img-5128-2.jpeg`,
			`${base}/zavod2022-img-5023-2.jpeg`,
			`${base}/zavod2022-img-4965-2.jpeg`,
		],
	},
	{
		title: 'Zakončení sezony 2021/2022 (28. června 2022)',
		images: [
			`${base}/zakonceni2022-img20220628173618c-2.jpg`,
			`${base}/zakonceni2022-img20220628174135c-2.jpg`,
			`${base}/zakonceni2022-img20220628171447c-2.jpg`,
			`${base}/zakonceni2022-img20220628173558c-2.jpg`,
			`${base}/zakonceni2022-img20220628175652c-2.jpg`,
			`${base}/zakonceni2022-img20220628172048c-2.jpg`,
			`${base}/zakonceni2022-img20220628175643c-2.jpg`,
			`${base}/zakonceni2022-img20220628171618c-2.jpg`,
			`${base}/zakonceni20243-2.jpeg`,
			`${base}/zakonceni2022-img20220628173436c-2.jpg`,
			`${base}/zakonceni2022-img20220628172533c-2.jpg`,
			`${base}/zakonceni2022-img20220628171523c-2.jpg`,
			`${base}/zakonceni2022-img20220628183545c-2.jpg`,
			`${base}/zakonceni2022-img20220628180419s-2.jpg`,
		],
	},
	{
		title: 'První závody a nové dresy',
		images: [
			`${base}/prvni-zavod-taboriste-1.jpg`,
			`${base}/prvni-zavod-start.jpg`,
			`${base}/prvni-zavod-prvni-zavod.jpg`,
			`${base}/prvni-zavod-medaile2.jpg`,
			`${base}/prvni-zavod-medaile.jpg`,
			`${base}/prvni-zavod-holky2.jpg`,
			`${base}/prvni-zavod-holky.jpg`,
			`${base}/prvni-zavod-beh.jpg`,
			`${base}/nove-dresy.jpg`,
		],
	},
];
