import express from 'express';
import bodyParser from 'body-parser'
import process from "node:process";
import {PrismaClient} from '@prisma/client'
import cors from 'cors'


const server = express();

const client = new PrismaClient();


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(
  cors()
);

server.get('/tasks', async (_, res) => {
  const tasks = await client.task.findMany();
  console.log(tasks);
  console.log('appel du route task')
  res.status(200).json(tasks);
})

server.post('/tasks', async (req, res) => {
  const { title } = req.body;
  console.log(title);
  console.log('appel du route post')
  const newTask = await client.task.create({ data: { title } });
  res.status(200).json(newTask);
}); 

server.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const numId = Number(id);
  const lastTask = await client.task.findUnique({where: {id: numId}});
  const updatedTask = await client.task.update({ where: { id: numId }, data: { isCompleted: !lastTask?.isCompleted } });
  res.status(200).json(updatedTask);
})

server.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const numId = Number(id);
  try {
    await client.task.delete({ where: { id: numId } });
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).send('Error deleting task');
    return;
  }
  res.sendStatus(204);
})


const port = Number(process.env.PORT) || 3050;

server.listen(port, '0.0.0.0', () => {
  console.log('listening on port', port);
})