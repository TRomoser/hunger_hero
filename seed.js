const Food = require('./models/food');

require('dotenv').config();
require('./config/database');

(async function() {
    await Food.deleteMany({});
    const foods = await Food.create([
        {name: 'Fresh Produce', quantity: '20lbs', description: 'Potatoes', availability: 'Within 24 hours', location: 'Los Angeles', image: '/images/image.png'},
        {name: 'Fresh Produce', quantity: '10lbs', description: 'Cucumbers', availability: 'Within 24 hours', location: 'Los Angeles', image: '/images/image4.png'},
        {name: 'Fresh Produce', quantity: '20lbs', description: 'Tomatoes', availability: 'Within 24 hours', location: 'Los Angeles', image: '/images/image3.png'},
        {name: 'Canned Food', quantity: '200 cans', description: 'Chicken Noodle soup', availability: 'Within a week', location: 'Los Angeles', image: '/images/image2.png'},
        {name: 'Mixed', quantity: '15 lbs', description: 'Assorted candy and snacks', availability: 'Within a week', location: 'Los Angeles', image: '/images/image5.png'},
    ])
    console.log(foods)
    process.exit();
    
})();