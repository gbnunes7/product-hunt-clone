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
