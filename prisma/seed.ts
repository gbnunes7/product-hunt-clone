import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
	const admin = {
		id: 1,
		externalID: "1",
	};

	const user = await prisma.user.upsert({
		where: { id: admin.id },
		update: {},
		create: admin,
	});

	console.log(user);

	const products = [
		{
			name: "CloudSync Pro",
			description:
				"A SaaS platform for automating CI/CD pipelines, focusing on seamless continuous integration across multiple cloud environments. Enables fast and secure deployments on AWS, Azure, and Google Cloud.",
			url: "https://cdn-icons-png.flaticon.com/512/10838/10838348.png",
			likes: 12345,
			tag: "DevOps",
			review: true,
		},
		{
			name: "AIContentMaster",
			description:
				"An AI-powered content creation tool designed for marketers. Generates high-quality blog posts, social media content, and marketing copy with advanced natural language processing.",
			url: "https://cdn-icons-png.flaticon.com/512/10838/10838348.png",
			likes: 8764,
			tag: "AI, Marketing",
			review: true,
		},
		{
			name: "SaaSGuard",
			description:
				"A security solution for SaaS platforms, providing real-time threat detection, data encryption, and compliance management. Protects sensitive information with cutting-edge security protocols.",
			url: "https://cdn-icons-png.flaticon.com/512/10838/10838348.png",
			likes: 5921,
			tag: "SaaS, Security",
			review: false,
		},
		{
			name: "DevOps Dashboard",
			description:
				"An all-in-one monitoring and analytics tool for DevOps teams, offering insights into application performance, system health, and resource usage in real-time.",
			url: "https://cdn-icons-png.flaticon.com/512/10838/10838348.png",
			likes: 10402,
			tag: "DevOps, Monitoring",
			review: true,
		},
		{
			name: "TechStack Hub",
			description:
				"A platform for front-end and back-end developers to discover, compare, and integrate the latest technologies and frameworks. Includes reviews, tutorials, and community forums for collaborative learning.",
			url: "https://cdn-icons-png.flaticon.com/512/10838/10838348.png",
			likes: 9543,
			tag: "Tech, Front-end, Back-end",
			review: true,
		},
	];

	products.forEach(async (product) => {
		const productCreated = await prisma.product.upsert({
			where: { name: product.name },
			update: {},
			create: product,
		});
		console.log(productCreated);
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
