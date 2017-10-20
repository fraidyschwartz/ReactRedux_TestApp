import './dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import * as peopleRepo from './repo/peopleRepo';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/savePerson', async (req, res) => {
    let person = await peopleRepo.savePerson(req.body);
    res.json(person);
})

app.post('/deletePerson', async (req, res) => {
    let person = await peopleRepo.deletePerson(req.body);
    res.json(person);
})

app.get('/getPeople', async (req, res) => {
    let peopleList = await peopleRepo.getAllPeople();
    res.json(peopleList);
})

app.listen(1337, () => console.log('server is running on port 1337'));