import { create, update, find, remove , findOne, counts} from "../controllers/teacher.controller.js"

const TeacherRoutes = (app) => {
	app.post("/api/teachers/add", create)
	app.patch("/api/teacher/:id", update)
	app.delete("/api/teacher/:id", remove)
	app.get("/api/teachers/", find)
	app.get("/api/teacher/:id", findOne)
	app.get("/api/countTeachers/", counts)
}

export default TeacherRoutes