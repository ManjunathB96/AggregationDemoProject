import City from '../models/city.model';

export const cityDetails = async (body) => {
  const data = await City.create(body);
  return data;
};

//$match stage as equivalent to querying the collection with find()
export const cityMatch = async () => {
  //   const data = await City.find()
  //   const data = await City.aggregate([{ $match: {} }]);
  // const data = await City.aggregate([
  //   { $match: { continent: 'North America' } }
  // ]);
  const data = await City.aggregate([
    { $match: { continent: { $in: ['North America', 'Asia'] } } }
  ]);
  return data;
};

export const citySort = async () => {
 // const data = await City.find().sort({ population: -1 });
  const data = await City.aggregate([
    { $sort: { population: -1 } }
  ]);
  return data;
};

export const cityGroup = async () => {
  console.log("service starrt.............................");
  const data = await City.aggregate([{ $group: { _id: '$continent' } }]);
  console.log(" service  Data --------------",data);
  return data;
};
