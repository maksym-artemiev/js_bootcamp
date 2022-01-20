const { Post } = require("../db/models/posts");
const { Like } = require("../db/models/likes");
const { Comment } = require("../db/models/comments");
const { tagsDao } = require("./tags.dao");
const async = require("async");

async function getPosts(options) {
  const params = {};
  if (options.tag) {
    const sortedPostsByTags = await tagsDao.findByName({
      tagName: options.tag,
    });
    params._id = { $in: sortedPostsByTags.postId };
  }
  const result = await Post.find(params).populate('author', 'fullName');
  return result;
}

async function getPost(_id) {
  try {
    return Post.findOne({_id: _id}).populate('author', 'fullName');
  } catch (error) {
    throw error;
  }
}

async function addPost(options) {
  const tags = options.tags;
  delete options.tags;
  try {
    const post = await Post.create(options);
    await async.mapSeries(tags, async (tag) => {
      let result;
      if (await tagsDao.findByName({ tagName: tag })) {
        result = await tagsDao.updateTagPostId({
          tagName: tag,
          postId: post._id,
        });
      } else {
        result = await tagsDao.addTag({ tagName: tag, postId: post._id });
      }
      await Post.findOneAndUpdate(
        { _id: post._id },
        { $push: { tags: result._id } }
      );
    });
    const result = await Post.find({ _id: post._id }).populate('author', 'fullName');
    return result;
  } catch (error) {
    throw error;
  }
}

async function updatePost({ id, options }) {
  try {
    await Post.findOneAndUpdate(id, options);
  } catch (error) {
    throw error;
  }
}

async function deletePost(options) {
  const { id } = options;
  try {
    const result = await Post.findOneAndDelete({ id });
    await Comment.deleteMany({ id: { $in: result.comments } });
    await Like.deleteMany({ id: { $in: result.comments } });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
};
