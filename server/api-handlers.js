import clientPromise from './mongodb.js';

export function createApiHandlers(collectionName) {
  return {
    async GET(req, res) {
      try {
        const client = await clientPromise;
        const db = client.db('nameQuestionDb');
        const questions = await db
          .collection(collectionName)
          .find({})
          .toArray();
        res.json(questions);
      } catch (e) {
        console.error(`Error in GET /api/${collectionName}/questions:`, e);
        res.status(500).json({ error: 'Unable to fetch questions' });
      }
    },

    async POST(req, res) {
      try {
        const { name, email, question } = req.body;
        const client = await clientPromise;
        const db = client.db('nameQuestionDb');
        const result = await db
          .collection(collectionName)
          .insertOne({ name, email, question, createdAt: new Date() });
        res.status(201).json({
          message: 'Question added successfully',
          id: result.insertedId,
        });
      } catch (e) {
        console.error(`Error in POST /api/${collectionName}/questions:`, e);
        res.status(500).json({ error: 'Unable to add question' });
      }
    },
  };
}
