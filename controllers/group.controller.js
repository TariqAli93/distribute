import prismaClient from "@prisma/client"
const { PrismaClient } = prismaClient
const prisma = new PrismaClient()

export const create = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
    } else {
        try {
            const createGroup = await prisma.groups.create({
                data: {
                    GroupName: req.body.GroupName
                }
            })
            console.log("🚀 ~ file: group.controller.js ~ line 15 ~ create ~ createGroup", createGroup)
            res.status(200).send(createGroup)
        } catch (error) {
            console.log("🚀 ~ file: group.controller.js ~ line 12 ~ create ~ error", error.message)
            res.status(500).send(error.message)
        }
    }
}

export const update = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
    } else {
        try {
            const updateGroup = await prisma.groups.update({
                data: {
                    GroupName: req.body.GroupName
                },
                where: {
                    idGroup: req.params.id * 1
                }
            })
            console.log("🚀 ~ file: group.controller.js ~ line 37 ~ update ~ updateGroup", updateGroup)
            res.status(200).send(updateGroup)
        } catch (error) {
            console.log("🚀 ~ file: group.controller.js ~ line 31 ~ update ~ error", error.message)
            res.status(500).send(error.message)
        }
    }
}

export const remove = async (req, res) => {
    try {
        const removeGroup = await prisma.groups.delete({
            where: {
                idGroup: req.params.id * 1
            }
        })
        console.log("🚀 ~ file: group.controller.js ~ line 53 ~ remove ~ removeGroup", removeGroup)
        res.status(200).send(removeGroup)
    } catch (error) {
        console.log("🚀 ~ file: group.controller.js ~ line 50 ~ remove ~ error", error.message)
        res.status(500).send(error.message)
    }
}

export const find = async (req, res) => {
    try {
        const getAll = await prisma.groups.findMany()
        console.log("🚀 ~ file: group.controller.js ~ line 64 ~ find ~ getAll", getAll)
        res.status(200).send(getAll)
    } catch (error) {
        console.log("🚀 ~ file: group.controller.js ~ line 65 ~ find ~ error", error.message)
        res.status(500).send(error.message)
    }
}

export const findOne = async (req, res) => {
    try {
        const getById = await prisma.groups.findFirst({
            where: {
                idGroup: req.params.id * 1
            }
        })
        console.log("🚀 ~ file: group.controller.js ~ line 79 ~ findOne ~ getById", getById)
        res.status(200).send(getById)
    } catch (error) {
        console.log("🚀 ~ file: group.controller.js ~ line 82 ~ findOne ~ error", error.message)
        res.status(500).send(error.message)
    }
}