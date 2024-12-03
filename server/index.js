import { MONGODB_URI } from '../.env.js';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import { createApiHandlers } from './api-handlers.js';
import { createDeleteHandler } from './api2-handlers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);
console.log('MONGODB_URI from index.js:', MONGODB_URI);

const app = express();
app.use(express.json());

// const questionsHandlers = createApiHandlers('questions');

// app.get('/api/about/questions', questionsHandlers.GET);
// app.post('/api/about/questions', questionsHandlers.POST);
// app.delete(
//   '/api/about/questions/:id',
//   createDeleteHandler('questions', '/api/about/questions/[id]')
// );

// const englishClubHandlers = createApiHandlers('englishclub');

// app.get('/api/english_club/questions', englishClubHandlers.GET);
// app.post('/api/english_club/questions', englishClubHandlers.POST);
// app.delete(
//   '/api/english_club/questions/:id',
//   createDeleteHandler('englishclub', '/api/english_club/questions/[id]')
// );

// const lectoriumHandlers = createApiHandlers('lectorium');

// app.get('/api/lectorium/questions', lectoriumHandlers.GET);
// app.post('/api/lectorium/questions', lectoriumHandlers.POST);
// app.delete(
//   '/api/lectorium/questions/:id',
//   createDeleteHandler('lectorium', '/api/lectorium/questions/[id]')
// );

// const psychologyClubHandlers = createApiHandlers('psychology_club');

// app.get('/api/psychology_club/questions', psychologyClubHandlers.GET);
// app.post('/api/psychology_club/questions', psychologyClubHandlers.POST);
// app.delete(
//   '/api/psychology_club/questions/:id',
//   createDeleteHandler('psychology_club', '/api/psychology_club/questions/[id]')
// );

// const kidsClubHandlers = createApiHandlers('kids_club');

// app.get('/api/kids_club/questions', kidsClubHandlers.GET);
// app.post('/api/kids_club/questions', kidsClubHandlers.POST);
// app.delete(
//   '/api/kids_club/questions/:id',
//   createDeleteHandler('kids_club', '/api/kids_club/questions/[id]')
// );

// const musicClubHandlers = createApiHandlers('music_club');

// app.get('/api/music_club/questions', musicClubHandlers.GET);
// app.post('/api/music_club/questions', musicClubHandlers.POST);
// app.delete(
//   '/api/music_club/questions/:id',
//   createDeleteHandler('music_club', '/api/music_club/questions/[id]')
// );

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// Обслуживание статических файлов
app.use(express.static(path.join(__dirname, '../dist')));

const collections = [
  'questions',
  'englishclub',
  'lectorium',
  'psychology_club',
  'kids_club',
  'music_club',
];

collections.forEach((collection) => {
  const handlers = createApiHandlers(collection);
  const apiPath = `/api/${collection.replace('_', '-')}/questions`;

  app.get(apiPath, handlers.GET);
  app.post(apiPath, handlers.POST);
  app.delete(
    `${apiPath}/:id`,
    createDeleteHandler(collection, `${apiPath}/[id]`)
  );
});

// Обработка всех остальных запросов
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
