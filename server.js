import express from "express"
import history from "connect-history-api-fallback"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import fileUpload from "express-fileupload"
import path from "path"
import xlsxFile from "read-excel-file"

const __dirname = path.resolve()


import AdminRoute from "./routes/admin.routes.js"
import GroupRoute from "./routes/group.routes.js"
import HallRoutes from "./routes/hall.routes.js"
import TeacherRoutes from "./routes/teacher.routes.js"
import TeacherHallsRoutes from "./routes/teacherHalls.routes.js"
import RoleRoutes from "./routes/role.routes.js"

const App = express()
dotenv.config()
App.use(cors())
App.use(cookieParser())
App.use(express.json())
App.use(express.urlencoded({ extended: false }))

App.use(fileUpload())

AdminRoute(App)
GroupRoute(App)
HallRoutes(App)
TeacherRoutes(App)
TeacherHallsRoutes(App)
RoleRoutes(App)

App.use(
	history({
		disableDotRule: true,
		verbose: true
	})
)


function generateRandomName(length, patientId) {
	var result = ""
	var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	var charactersLength = characters.length
	for (var i = 0; i < length; i++) {
		result +=
            characters.charAt(Math.floor(Math.random() * charactersLength)) +
            patientId
	}
	return result
}

App.post("/api/upload-teacher", async (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send("No files were uploaded.")
	}

	else {
		let uploadedFile = req.files.excel
		let photoName = generateRandomName(5, 3)
		var filename = uploadedFile.name
		var ext = filename.substr(filename.lastIndexOf(".") + 1)
		let imagePath = `${__dirname}/attachments/${photoName}.${ext}`

		uploadedFile.mv(imagePath, function (err) {
			if (err) return res.status(500).send(err)
			console.log(xlsxFile(imagePath))
			xlsxFile(uploadedFile).then((rows) => {
				console.log(rows)
				res.send(rows)
			})
		})
	}
})

App.listen(process.env.PORT || 6789, () => {
	console.log(`Server Running on http://localhost:${process.env.PORT || 5000}`)
})