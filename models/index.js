import mongoose from 'mongoose';
import gradeModel from './gradeModel.js';

//configuracoes de conexao com o db
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradeModel(mongoose);

export { db };
