import { create, update, find, findOne } from "../controllers/admin.controller.js";

const AdminRoute = (app) => {
    app.post('/api/admin/add', create)
    app.patch('/api/admin/:id', update)
    app.get('/api/admin', find)
    app.get('/api/admin/:id', findOne)
}

export default AdminRoute;