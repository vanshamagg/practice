import * as mongoose from 'mongoose';
const { model, Schema, Document } = mongoose;

const User = model<any>('User', new Schema({

  name: String,

  email: String

}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }));

User.schema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'user',
  justOne: false
});

const Post = model('Post', new Schema({

  user: { type: String, ref: 'User' },

  title: String

}, { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } })

);

(async () => {
  const URI = 'mongodb+srv://admin:admin@cluster0.d2rss.mongodb.net/test?retryWrites=true&w=majority';

  await mongoose.connect(URI)
    .then(() => console.info('-- CONNECTED TO DATABASE --'))
    .catch((e) => console.error(e));


  const docs = await User.aggregate([
    { $match: { name: 'Vansham' } }
  ]);

})();