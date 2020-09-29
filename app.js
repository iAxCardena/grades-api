import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { gradeRouter } from './routes/gradeRouter.js';
import { db } from './models/index.js';
console.log("app.js");

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexao realizada com sucesso");
  } catch (error) {
    process.exit();
  }
})();

const app = express();

//define o dominio de origem para consumo do servico
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'https://grades-frontend-app.herokuapp.com',
  })
);

app.use('/grade', gradeRouter);

app.get('/', (req, res) => {
  res.send('API em execucao');
});


app.listen(process.env.PORT || 8081, () => {
  console.log("API Started");
});
