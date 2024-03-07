import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
	try {
		const newUser = await prisma.user.create({
			data: {
				email: 'yull12313@mail.com',
				score: 10,
				ip: 'x',
			},
		})
		console.log(newUser)
	} catch (error) {
		console.error(JSON.stringify(error))
	}
}

main()
