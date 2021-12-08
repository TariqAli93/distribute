import prismaClient from '@prisma/client'
const { PrismaClient } = prismaClient
const prisma = new PrismaClient()

export const create = async (req, res) => {
    if (!req.body) {
        res.status(404).send({ message: 'Request body is required' })
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