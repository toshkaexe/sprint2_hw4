import express, {Express, Request, Response} from 'express';
import {blogRoute} from "./routes/blog-route"
import {postRoute} from "./routes/post-route"
import {testingRoute} from "./routes/testing-route";
import morganBody from "morgan-body";
import bodyParser from "body-parser";
import {authRoute} from "./routes/auth-route";
import {usersRouter} from "./routes/users-route";
import {commentsRoute} from "./routes/comments-route";
import {emailRoute} from "./routes/emailRoute";

export const app: Express = express();
morganBody(app);
app.use(express.json())

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("HEllO Sprint 2 HW 2")
})
app.get('/env', (req, res) => {
    res.send({
        login: process.env.AUTH_LOGIN,
        pass: process.env.AUTH_PASSWORD,
    })
})
app.use('/blogs', blogRoute)
app.use('/posts', postRoute)
app.use('/testing', testingRoute)

app.use('/auth', authRoute)
app.use('/users', usersRouter)
app.use('/comments', commentsRoute)

app.use('/email', emailRoute)