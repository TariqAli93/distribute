import { create, update, find, remove, findOne } from '../controllers/role.controller.js'

const RoleRoutes = (app) => {
    app.post('/api/role/add', create)
    app.get('/api/roles', find)
    app.get('/api/role/:id', findOne)
    app.patch('/api/role/:id', update)
    app.delete('/api/role/:id', remove)
}

export default RoleRoutes