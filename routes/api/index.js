const router = require('express').Router();
const userRoutes = require('./users');
const voterRoutes = require('./voters');

router.use('/users', userRoutes);
router.use('/voters', voterRoutes);

module.exports = router;
