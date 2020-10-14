const router = require("express").Router();
const votersController = require("../../controllers/votersControllers.js");

// Matches with "/api/voters"
router
    .route("/")
    .get(votersController.findAll)
    .post(votersController.create);

// Matches with "/api/voters/:id"
router
    .route("/:id")
    .get(votersController.findById)
    .put(votersController.update)
    .delete(votersController.remove);

module.exports = router;