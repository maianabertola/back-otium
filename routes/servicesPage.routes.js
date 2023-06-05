const router = require("express").Router();
const Service = require("../models/ServiceDetail.models");

//prefix is /service
router.get("/", async (req, res, next) => {
  try {
    const allServices = await Service.find();
    res.status(201).json({
      message: "this is all the services created",
      ServiceDetail: allServices,
    });
  } catch (e) {
    next(e);
    console.log("there is an error service page");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const oneService = await Service.findById(id);
    res.status(201).json({
      message: "this is one service",
      Service: oneService,
    });
  } catch (e) {
    next(e);
    console.log("there is an error service page 2");
  }
});

module.exports = router;
