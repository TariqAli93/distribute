import { create, update, find, remove, findOne, counts } from '../controllers/hall.controller.js';

const HallRoutes = (app) => {
    app.post('/api/halls/add', create)
    app.patch('/api/hall/:id', update)
    app.delete('/api/hall/:id', remove)
    app.get('/api/halls', find)
    app.get('/api/hall/:id', findOne)
    app.get('/api/countHalls', counts)
}

export default HallRoutes