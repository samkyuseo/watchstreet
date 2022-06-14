import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.json());

/* Routes */
app.use('/api/watch', require('./routes/api/watch'));
app.use('/api/user', require('./routes/api/user'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
