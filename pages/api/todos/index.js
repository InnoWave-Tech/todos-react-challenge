import { getTodos } from '../../../lib/db';

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(getTodos());
    default:
      return res.status(400).end();
  }
}
