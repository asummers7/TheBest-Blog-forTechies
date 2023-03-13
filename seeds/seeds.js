const User = require('../models/User');

const comments = {
    text: 'test comment',
    user_id: 2 
}

const seedData = () => User.create(comments);

seedData();