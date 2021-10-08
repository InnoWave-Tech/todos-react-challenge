import { toggleDone } from '../../../lib/db';

export default function handler(req, res) {
  switch (req.method) {
    case 'PUT':
      return res.status(200).json(toggleDone(req.query.id));

    default:
      return res.status(400).end();
  }
}
