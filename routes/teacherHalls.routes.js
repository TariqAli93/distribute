import { create, update, find, remove, findOne } from '../controllers/teacherHalls.controller.js';

const TeacherHallsRoutes = (app) => {
    app.post('/api/teacherHalls/add', create)
    app.patch('/api/teacherHall/:id', update)
    app.delete('/api/teacherHall/:id', remove)
    app.get('/api/teacherHalls', find)
    app.get('/api/teacherHall/:id', findOne)
}

export default TeacherHallsRoutes;