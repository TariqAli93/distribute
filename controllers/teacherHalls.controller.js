import prismaClient from "@prisma/client"
import _ from "lodash"

const { PrismaClient } = prismaClient
const prisma = new PrismaClient()

export const create = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
    } else {
        try {
            const createTeacherHall = await prisma.teacherHalls.create({
                data: {
                    teacherId: req.body.teacherId * 1,
                    hallId: req.body.hallId * 1,
                    groupId: req.body.groupId * 1,
                    isTeacherLeader: req.body.isTeacherLeader,
                }
            })
            console.log("🚀 ~ file: teacherHalls.controller.js ~ line 18 ~ create ~ createTeacherHall", createTeacherHall)
            res.status(200).send(createTeacherHall)
        } catch (error) {
            console.log("🚀 ~ file: teacherHalls.controller.js ~ line 21 ~ create ~ error", error.message)
            res.status(500).send({ message: error.message })
        }
    }
}

export const update = async (req, res) => {
    if (Object.keys(req.body).length < 1) {
        res.status(500).send({ message: 'Invalid request, missing body' })
    } else {
        try {
            const updateTeacherHall = await prisma.teacherHalls.update({
                data: {
                    teacherId: req.body.teacherId * 1,
                    hallId: req.body.hallId * 1,
                    groupId: req.body.groupId * 1,
                    isTeacherLeader: req.body.isTeacherLeader,
                },
                where: {
                    idTeacherHall: req.params.id * 1
                }
            })
            console.log("🚀 ~ file: teacherHalls.controller.js ~ line 43 ~ update ~ updateTeacherHall", updateTeacherHall)
            res.status(200).send(updateTeacherHall)
        } catch (error) {
            console.log("🚀 ~ file: teacherHalls.controller.js ~ line 46 ~ update ~ error", error.message)
            res.status(500).send({ message: error.message })
        }
    }
}

export const remove = async (req, res) => {
    try {
        const removeTeacherHall = await prisma.teacherHalls.delete({
            where: {
                idTeacherHall: req.params.id * 1
            }
        })
        console.log("🚀 ~ file: teacherHalls.controller.js ~ line 59 ~ remove ~ removeTeacherHall", removeTeacherHall)
        res.status(200).send(removeTeacherHall)
    } catch (error) {
        console.log("🚀 ~ file: teacherHalls.controller.js ~ line 62 ~ remove ~ error", error.message)
        res.status(500).send({ message: error.message })
    }
}

export const find = async (req, res) => {
    try {
        const getAll = await prisma.teacherHalls.findMany({
            include: {
                group: true,
                hall: true,
                teacher: true
            }
        })
        const filters = _.groupBy(getAll, th => th.hall.HallName)
        console.log("🚀 ~ file: teacherHalls.controller.js ~ line 73 ~ find ~ filters", filters)
        res.status(200).send(filters)
    } catch (error) {
        console.log("🚀 ~ file: teacherHalls.controller.js ~ line 73 ~ find ~ error", error.message)
        res.status(500).send({ message: error.message })
    }
}

export const findOne = async (req, res) => {
    try {
        const getById = await prisma.teacherHalls.findFirst({
            where: {
                idTeacherHall: req.params.id * 1
            },
            include: {
                group: true,
                hall: true,
                teacher: true
            }
        })
        console.log("🚀 ~ file: teacherHalls.controller.js ~ line 85 ~ findOne ~ getById", getById)
        res.status(200).send(getById)
    } catch (error) {
        console.log("🚀 ~ file: teacherHalls.controller.js ~ line 88 ~ findOne ~ error", error.message)
        res.status(500).send({ message: error.message })
    }
}