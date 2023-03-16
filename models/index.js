const Comment = require('./Comment');
const User = require('./User');
const Reply = require('./replies');


User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.hasMany(Reply, {
    foreignKey: 'comment_id'
});

Reply.belongsTo(Comment, {
    foreignKey: 'comment_id'
});

User.hasMany(Reply, {
    foreignKey: 'user_id'
});

Reply.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = 
{ 
    User, 
    Comment,
    Reply
}