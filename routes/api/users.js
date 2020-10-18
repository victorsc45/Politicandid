const { response } = require('express');
const express = require('express');

const router = express.Router();

const User = require('../../database/models/user');
const passport = require('../../passport');

// router.put('/:id', (req, res) => {
//   console.log('route id hit', req.params.id);
//   console.log('put body', req.body)
//   const user_id = req.params.id;
//   User.findOne({ _id: user_id })
//     .then(res => {
//       const findIssue = res.issues.map(i => i.issue).indexOf(req.body.issue)
//       console.log("index of issues, ", findIssue)

//       res.issues[findIssue].important = !res.issues[findIssue].important
//       User.findOneAndUpdate({ _id: user_id }, { $set: { issues: res.issues } })
//         .then(res => res.json({ res }))
//         .catch(err => console.log(err))
//     })
  
// });

// User.findOneAndUpdate({ _id: user_id }, req.body)
  //   .then((dbModel) => res.json(dbModel))
  //   .catch((err) => res.send(422).json(err));
  // console.log("findone", res.json);

router.post('/', (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log('User Create Error: ', err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }

    const newUser = new User({
      username: username,
      password: password,
    });

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
});

router.post(
  '/login',
  (req, res, next) => {
    next();
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('LOGGED IN', req.user);


    User.find({ username: req.user.username }).then(document => {
      console.log("document:", document.issues);
      const { name, city, county, state, country, zip, issues, candidate, campaign} = document[0];
 
      res.send({
        username: req.user.username,
        userData: {name, city, county, state, country, zip },
        issuesData: issues,
        candidateData: {candidate, campaign},
        matchesData: null, 
        currentMatch: null
      });
    })

  }
);

router.get('/', (req, res) => {
  if (req.user) {
    console.log('Hit GET Route', req.user);

    User.find({ username: req.user.username }).then(document => {
      const { name, city, county, state, country, zip, issues, candidate, campaign} = document;
 
      res.send({
        username: req.user.username,
        userData: {name, city, county, state, country, zip },
        issuesData: issues,
        candidateData: {candidate, campaign},
        matchesData: null, 
        currentMatch: null
      });
    })

  } else {
    res.json({ user: null });
  }
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.status(200).json({ msg: 'LOGGED OUT' });
  } else {
    res.status(404).json({ msg: 'NO USER TO LOGOUT' });
  }
});

module.exports = router;
