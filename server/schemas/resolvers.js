const { User, Thought } = require('../models');

const resolvers = {
  Query: {
    // helloWorld: () => {
    //   return 'Hello world!';
    // }

    // thoughts: async () => {
    //   return Thought.find().sort({ createdAt: -1 });
    // }

    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    thoughts: async (_parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },

    // place this inside of the 'Query' nested object right after 'thoughts'
    thought: async (_parent, { _id }) => {
      return Thought.findOne({ _id });
    },

    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },

    // get a user by username
    user: async (_parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
    },


  }
};

module.exports = resolvers;