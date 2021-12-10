import prismaClient from "@prisma/client"
import jwt from "jsonwebtoken"

const { PrismaClient } = prismaClient
const prisma = new PrismaClient()

export const create = async (req, res) => {
	if (!req.body) {
		res.status(404).send({ message: "Request body is required" })
	}

	try {
		const createAdmin = await prisma.admin.create({
			data: {
				userName: req.body.username,
				password: req.body.password
			}
		})

		res.status(200).send(createAdmin)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

export const update = async (req, res) => {
	try {
		const updateAdmin = await prisma.admin.update({
			where: { idAdmin: req.params.id * 1 },
			data: {
				userName: req.body.username,
				password: req.body.password
			}
		})

		res.status(200).send(updateAdmin)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

export const find = async (req, res) => {
	try {
		const getAll = await prisma.admin.findMany()
		res.status(200).send(getAll)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

export const findOne = async (req, res) => {
	try {
		const getById = await prisma.admin.findFirst({
			where: { idAdmin: req.params.id * 1 }
		})
		res.status(200).send(getById)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}

export const remove = async (req, res) => {
	try {
		const deleteById = await prisma.admin.delete({
			where: { idAdmin: req.params.id * 1 }
		})

		res.status(200).send(deleteById)
	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}


export const login = async (req, res) => {
	if (Object.keys(req.body).length < 1) {
		res.status(500).send({ message: "Invalid login, body is missing" })
	}

	try {
		const login = await prisma.admin.findMany({
			where: {
				AND: [
					{
						userName: {
							equals: req.body.username
						}
					},
					{
						password: {
							equals: req.body.password
						}
					}
				]
			}
		})

		if (login.length > 0) {
			const token = jwt.sign(
				{
					idAdmin: login[0].idAdmin,
					userName: login[0].userName,
					password: login[0].password
				},
				process.env.JWT_SECRET,
				{
					expiresIn: "1d"
				}
			)
			res.status(200).send({ token: token })
		} else {
			res.status(404).send({ message: "Invalid login, please try again" })
		}

	} catch (error) {
		res.status(500).send({ message: error.message })
	}
}