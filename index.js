const express = require('express')
const userRouter = require('./routes/user')
const postRouter = require('./routes/posts')
const calcRouter = require('./routes/calculations')

app = express()
const port = 3000;
app.set('view engine', 'ejs');
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/calculate', calcRouter);

app.listen(port, () => {
    console.log(`Server is running and listening at http://localhost:${port}`);
});