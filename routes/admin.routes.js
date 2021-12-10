import { create, update, find, findOne, remove, login } from "../controllers/admin.controller.js";

const AdminRoute = (app) => {
    app.post('/api/admin/add', create)
    app.patch('/api/admin/:id', update)
    app.get('/api/admin', find)
    app.get('/api/admin/:id', findOne)
    app.delete('/api/admin/:id', remove)
    app.post('/api/admin/login', login)
}

export default AdminRoute;