import { create, update, remove, find, findOne, counts } from '../controllers/group.controller.js';

const GroupRoute = (app) => {
    app.post('/api/groups/add', create)
    app.patch('/api/group/:id', update)
    app.delete('/api/group/:id', remove)
    app.get('/api/groups', find)
    app.get('/api/group/:id', findOne)
    app.get('/api/countGroups', counts)
}

export default GroupRoute