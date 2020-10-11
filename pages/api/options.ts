import dbConnect from '../../lib/db/connection';
import Reading from '../../lib/db/models/reading';

// http://localhost:3000/api/options?key=name
export default async (req, res) => {
  await dbConnect();

  if (!req.query.key) {
    return res.status(400).json({ message: 'missing key query param' });
  }

  const names = await Reading.distinct(req.query.key).exec();

  return res.send(names);
};
