const commentsDao = require('./comments.dao');
const likesDao = require('./likes.dao');
const postsDao = require('./posts.dao');
const tagsDao = require('./tags.dao');
const usersDao = require('./users.dao');

module.exports = {
    commentsDao,
    likesDao,
    postsDao,
    tagsDao,
    usersDao
}