import prismaClient from "@prisma/client"
const { PrismaClient } = prismaClient
const prisma = new PrismaClient()

export const create = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
        console.log("🚀 ~ file: hall.controller.js ~ line 8 ~ create ~ Invalid request, missing body")
    } else {
        try {
            const createHall = await prisma.halls.create({
                data: {
                    HallName: req.body.hallName,
                    HallContainment: req.body.hallCount
                }
            })
            console.log("🚀 ~ file: hall.controller.js ~ line 17 ~ create ~ createHall", createHall)
            res.status(200).send(createHall)
        } catch (error) {
            console.log("🚀 ~ file: hall.controller.js ~ line 13 ~ create ~ error", error.message)
            res.status(500).send({ message: error.message })
        }
    }
}

export const update = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
        console.log("🚀 ~ file: hall.controller.js ~ line 29 ~ update ~ Invalid request, missing body")
    } else {
        try {
            const updateHall = await prisma.halls.update({
                data: {
                    HallName: req.body.hallName,
                    HallContainment: req.body.hallCount
                },
                where: {
                    idHall: req.params.id * 1
                }
            })
            console.log("🚀 ~ file: hall.controller.js ~ line 38 ~ update ~ updateHall", updateHall)
            res.status(200).send(updateHall)
        } catch (error) {
            console.log("🚀 ~ file: hall.controller.js ~ line 41 ~ update ~ error", error.message)
            res.status(500).send({ message: error.message })
        }
    }
}

export const remove = async (req, res) => {
    try {
        const removeHall = await prisma.halls.delete({
            where: {
                idHall: req.params.id * 1
            }
        })
        console.log("🚀 ~ file: hall.controller.js ~ line 57 ~ remove ~ removeHall", removeHall)
        res.status(200).send(removeHall)
    } catch (error) {
        console.log("🚀 ~ file: hall.controller.js ~ line 54 ~ remove ~ error", error.message)
        res.status(500).send(error.message)
    }
}

export const find = async (req, res) => {
    try {
        const getAll = await prisma.halls.findMany()
        console.log("🚀 ~ file: hall.controller.js ~ line 67 ~ find ~ getAll", getAll)
        res.status(200).send(getAll)
    } catch (error) {
        console.log("🚀 ~ file: hall.controller.js ~ line 68 ~ find ~ error", error.message)
        res.status(500).send(error.message)

    }
}

export const findOne = async (req, res) => {
    try {
        const getById = await prisma.halls.findFirst({
            where: {
                idHall: req.params.id * 1
            }
        })
        console.log("🚀 ~ file: hall.controller.js ~ line 82 ~ findOne ~ getById", getById)
        res.status(200).send(getById)
    } catch (error) {
        console.log("🚀 ~ file: hall.controller.js ~ line 79 ~ findOne ~ error", error.message)
        res.status(500).send(error.message)

    }
}