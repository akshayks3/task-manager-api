const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// const User = mongoose.model('User', {
//   name: { type: String, required: true, trim: true },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('age must be positive');
//       }
//     },
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('email invalid');
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     validate(value) {
//       const sub = value.includes('password');
//       console.log(sub);
//       if (value.length < 7) {
//         throw new Error('password length must be greater than 7');
//       } else if (sub == true) {
//         throw new Error('Password should not contain password in it');
//       }
//     },
//   },
// });

// const me = new User({
//   name: 'yoyo k s   ',
//   age: 2,
//   email: 'yoyo@ymail.com',
//   password: 'passuoword45',
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const Tasks = mongoose.model('Tasks', {
//   description: { type: String, required: true, trim: true },
//   completed: { type: Boolean, default: false },
// });

// const painting = new Tasks({
//   description: 'Paint the floor    ',
// });

// painting
//   .save()
//   .then((painting) => {
//     console.log(painting);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
