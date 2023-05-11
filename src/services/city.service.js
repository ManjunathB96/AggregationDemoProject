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
  // const data = await City.aggregate([{ $sort: { population: -1 } }]);
  const data = await City.aggregate([
    { $match: { continent: 'North America' } },
    { $sort: { population: 1 } }
  ]);
  return data;
};

export const cityGroup = async () => {
  // const data = await City.aggregate([{ $group: { _id: '$continent' } }]);
  // const data = await City.aggregate([
  //   {
  //     $group: {
  //       _id: {
  //         continent: '$continent',
  //         country: '$country'
  //       }
  //     }
  //   }
  // ]);
  const data = await City.aggregate([
    {
      $group: {
        _id: {
          continent: '$continent',
          country: '$country'
        },
        highest_population: { $max: '$population' },
        first_city: { $first: '$name' },
        cities_in_top_20: { $sum: 1 }
      }
    }
  ]);
  return data;
};

export const cityProject = async () => {
  const data = await City.aggregate([
    {
      $project: {
        _id: 0,
        location: {
          country: '$country',
          continent: '$continent'
        },
        name: '$name',
        population: '$population'
      }
    }
  ]);
  return data;
};

export const cityAllStages = async () => {
  const data = await City.aggregate([
    {
      $match: {
        continent: { $in: ['North America', 'Asia'] }
      }
    },
    { $sort: { population: -1 } },
    {
      $group: {
        _id: {
          continent: '$continent',
          country: '$country'
        },
        first_city: { $first: '$name' },
        "highest_population": { $max: "$population" }
      }
    }
  ]);
  return data;
};

