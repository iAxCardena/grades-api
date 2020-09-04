import express from 'express';
import controller from '../controllers/gradeController.js';

const app = express();

app.post('/create/', controller.create);
app.get('/findAll/', controller.findAll);
app.get('/findOne/:id', controller.findOne);
app.put('/update/:id', controller.update);
app.delete('/deleteOne/:id', controller.remove);
app.delete('/delete/', controller.removeAll);

export { app as gradeRouter };
