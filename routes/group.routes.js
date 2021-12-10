import { create, update, remove, find, findOne } from '../controllers/group.controller.js';

const GroupRoute = (app) => {
    app.post('/api/groups/add', create)
    app.patch('/api/group/:id', update)
    app.delete('/api/group/:id', remove)
    app.get('/api/groups', find)
    app.get('/api/group/:id', findOne)
}

export default GroupRoute