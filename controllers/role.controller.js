import prismaClient from "@prisma/client"
const { PrismaClient } = prismaClient
const prisma = new PrismaClient()

export const create = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
    } else {
        try {
            const createRole = await prisma.roles.create({
                data: {
                    roleName: req.body.roleName,
                    rolePrefix: req.body.rolePrefix,
                    rolePriority: req.body.rolePriority,
                }
            })
            console.log("🚀 ~ file: role.controller.js ~ line 17 ~ create ~ createRole", createRole)
            res.status(200).send(createRole)
        } catch (error) {
            console.log("🚀 ~ file: role.controller.js ~ line 20 ~ create ~ error", error)
            res.status(500).send({ message: error.message })
        }
    }
}


export const update = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
    } else {
        try {
            const updateRole = await prisma.roles.update({
                data: {
                    roleName: req.body.roleName,
                    rolePrefix: req.body.rolePrefix,
                    rolePriority: req.body.rolePriority,
                },
                where: {
                    idRole: req.params.id * 1
                }
            })
            console.log("🚀 ~ file: role.controller.js ~ line 42 ~ update ~ updateRole", updateRole)
            res.status(200).send(updateRole)
        } catch (error) {
            console.log("🚀 ~ file: role.controller.js ~ line 45 ~ update ~ error", error.message)
            res.status(500).send({ message: error.message })
        }
    }
}


export const find = async (req, res) => {
    try {
        const getAll = await prisma.roles.findMany()
        console.log("🚀 ~ file: role.controller.js ~ line 55 ~ find ~ getAll", getAll)
        res.status(200).send(getAll)
    } catch (error) {
        console.log("🚀 ~ file: role.controller.js ~ line 58 ~ find ~ error", error)
        res.status(500).send(error)
    }
}

export const findOne = async (req, res) => {
    try {
        const getById = await prisma.roles.findMany({
            where: {
                idRole: req.params.id * 1
            }
        })
        console.log("🚀 ~ file: role.controller.js ~ line 70 ~ find ~ getById", getById)
        res.status(200).send(getAll)
    } catch (error) {
        console.log("🚀 ~ file: role.controller.js ~ line 73 ~ find ~ error", error)
        res.status(500).send(error)
    }
}

export const remove = async (req, res) => {
    try {
        const deleteById = await prisma.roles.delete({
            where: {
                idRole: req.params.id * 1
            }
        })
        console.log("🚀 ~ file: role.controller.js ~ line 85 ~ remove ~ deleteById", deleteById)
        res.status(200).send(deleteById)
    } catch (error) {
        console.log("🚀 ~ file: role.controller.js ~ line 88 ~ remove ~ error", error)
        res.status(500).send(error)
    }
}