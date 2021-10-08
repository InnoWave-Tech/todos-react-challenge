import { createTodo, getTodos } from '../../../lib/db';

export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      if (req.body.title === 'error') {
        return res.status(500).json({ message: 'There was an error adding your todo!' });
      }
      return res.status(200).json(createTodo(req.body.title));
    default:
      return res.status(400).end();
  }
}
