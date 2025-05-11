const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Product = require('./models/Product');

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB for seeding');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Sample pet data
const pets = [
  {
    productName: 'Max',
    sellPrice: 150,
    condition: 'Healthy, 1 year old',
    review: 'Energetic golden retriever who loves people.',
    status: 'Available',
    photoURL: "https://i.imgur.com/H6cV5Xk.jpeg" //golden retriever
  },
  {
    productName: 'Whiskers',
    sellPrice: 80,
    condition: 'Healthy, 3 years old',
    review: 'Gentle tabby cat who enjoys naps and windowsills.',
    status: 'Available',
    photoURL: "https://i.imgur.com/9HsmsiF.jpeg" //tabby cat
  },
  {
    productName: 'Bella',
    sellPrice: 200,
    condition: 'Healthy, 6 months old',
    review: 'Playful lab puppy with lots of energy!',
    status: 'Available',
    photoURL: "https://i.imgur.com/QQ4e3Vf.jpeg" //labrador
  }
];

// Seed the database
async function seedDatabase() {
  try {
    await Product.deleteMany({});
    await Product.insertMany(pets);
    console.log('🌱 Pet data successfully seeded!');
    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  }
}

seedDatabase();
