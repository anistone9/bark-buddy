const db = require('../config/connection');
const { User, Dog } = require('../models');
const userSeeds = require('./userSeeds.json');
const dogSeeds = require('./dogSeeds.json');

db.once('open', async () => {
  try {
    await Dog.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);








  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('All done!');
  process.exit(0);
});
