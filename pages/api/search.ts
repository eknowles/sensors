import aqp from 'api-query-params';
import dbConnect from '../../lib/db/connection';
import Reading from '../../lib/db/models/reading';

// https://www.npmjs.com/package/api-query-params
export default async (req, res) => {
  await dbConnect();

  const { filter, skip, limit, sort, projection, population } = aqp(req.query);

  const readings = await Reading.find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .select(projection)
    .populate(population)
    .exec();

  return res.send(readings);
};
