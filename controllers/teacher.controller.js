import prismaClient from "@prisma/client"
const { PrismaClient } = prismaClient
const prisma = new PrismaClient()

export const create = async (req, res) => {
	if (Object.keys(req.body).length < 1) {
		res.status(500).send({ message: "Invalid request, missing body" })
	} else {
		try {
			const createTeacher = await prisma.teachers.create({
				data: {
					teacherName: req.body.teacherName,
					role: req.body.role
				}
			})
			console.log("🚀 ~ file: teacher.controller.js ~ line 15 ~ create ~ createTeacher", createTeacher)
			res.status(200).send(createTeacher)
		} catch (error) {
			console.log("🚀 ~ file: teacher.controller.js ~ line 19 ~ create ~ error", error.messag)

			res.status(500).send({ message: error.message })
		}
	}
}

export const update = async (req, res) => {
	if (Object.keys(req.body).length < 1) {
		res.status(500).send({ message: "Invalid request, missing body" })
	} else {
		try {
			const updateTeacher = await prisma.teachers.update({
				data: {
					teacherName: req.body.teacherName,
					role: req.body.role
				},

				where: {
					idTeacher: req.params.id * 1
				}
			})
			console.log("🚀 ~ file: teacher.controller.js ~ line 40 ~ update ~ updateTeacher", updateTeacher)
			res.status(200).send(updateTeacher)
		} catch (error) {
			console.log("🚀 ~ file: teacher.controller.js ~ line 43 ~ update ~ error", error.messag)

			res.status(500).send({ message: error.message })
		}
	}
}

export const remove = async (req, res) => {
	try {
		const removeTeacher = await prisma.teachers.delete({
			where: {
				idTeacher: req.params.id * 1
			}
		})
		console.log("🚀 ~ file: teacher.controller.js ~ line 56 ~ remove ~ removeTeacher", removeTeacher)
		res.status(200).send(removeTeacher)
	} catch (error) {
		console.log("🚀 ~ file: teacher.controller.js ~ line 59 ~ remove ~ error", error.messag)

		res.status(500).send({ message: error.message })
	}
}

export const find = async (req, res) => {
	try {
		const getAll = await prisma.teachers.findMany()
		console.log("🚀 ~ file: teacher.controller.js ~ line 66 ~ find ~ getAll", getAll)
		res.status(200).send(getAll)
	} catch (error) {
		console.log("🚀 ~ file: teacher.controller.js ~ line 70 ~ find ~ error", error.messag)
		res.status(500).send({ message: error.message })
	}
}

export const findOne = async (req, res) => {
	try {
		const getById = await prisma.teachers.findFirst({
			where: {
				idTeacher: req.params.id * 1
			},
		})
		console.log("🚀 ~ file: teacher.controller.js ~ line 82 ~ findOne ~ getById", getById)
		res.status(200).send(getById)
	} catch (error) {
		console.log("🚀 ~ file: teacher.controller.js ~ line 88 ~ findOne ~ error", error.messag)
		res.status(500).send({ message: error.message })
	}
}

export const counts = async (req, res) => {
	try {
		const count = await prisma.teachers.count()
		console.log("🚀 ~ file: teacher.controller.js ~ line 96 ~ counts ~ count", count)
		res.status(200).send({count: count})
	} catch (error) {
		console.log("🚀 ~ file: teacher.controller.js ~ line 99 ~ counts ~ error", error)
		res.status(500).send(error.message)
	}
}