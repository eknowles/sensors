// import data from '../../sensor-readings.json';
import aqp from 'api-query-params';
import connectToDatabase from '../../lib/db/connection';
import Reading from '../../lib/db/models/reading';

/**
 * Normally the data here would not come from a flat file
 * this API would be used to make requests to a DB.
 */

export default async (req, res) => {
  await connectToDatabase();

  const { filter, skip, limit, sort, projection, population } = aqp(req.query);

  const readings = await Reading.find(filter)
      .skip(skip)
      .limit(limit)
      .sort(sort)
      .select(projection)
      .populate(population)
      .exec();

  return res.send(readings);
}
