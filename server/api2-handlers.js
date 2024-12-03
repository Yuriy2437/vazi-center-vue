import clientPromise from './mongodb.js';
import { ObjectId } from 'mongodb';

export function createDeleteHandler(collectionName, apiPath) {
  return async function DELETE(req, res) {
    try {
      const client = await clientPromise;
      const db = client.db('nameQuestionDb');
      const { id } = req.params;

      const result = await db
        .collection(collectionName)
        .deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 1) {
        res.json({ message: 'Question deleted successfully' });
      } else {
        res.status(404).json({ error: 'Question not found' });
      }
    } catch (e) {
      console.error(`Error in DELETE ${apiPath}:`, e);
      res.status(500).json({ error: 'Unable to delete question' });
    }
  };
}
