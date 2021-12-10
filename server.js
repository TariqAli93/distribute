import express from 'express'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import AdminRoute from './routes/admin.routes.js'
import GroupRoute from './routes/group.routes.js'
import HallRoutes from './routes/hall.routes.js'
import TeacherRoutes from './routes/teacher.routes.js'
import TeacherHallsRoutes from './routes/teacherHalls.routes.js'

const App = express()
dotenv.config()
App.use(cors())
App.use(cookieParser())
App.use(express.json())
App.use(express.urlencoded({ extended: false }))

AdminRoute(App)
GroupRoute(App)
HallRoutes(App)
TeacherRoutes(App)
TeacherHallsRoutes(App)

App.use(
    history({
        disableDotRule: true,
        verbose: true
    })
)

App.listen(process.env.PORT || 3000, () => {
    console.log(`Server Running on http://localhost:${process.env.PORT || 3000}`)
})