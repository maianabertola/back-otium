const router = require("express").Router();
const ServiceDetail = require("../models/ServiceDetail.models");

router.get("/", async (req, res, next) => {
  try {
    const allServices = await ServiceDetail.find();
    res.status(201).json({
      message: "this is all the services created",
      ServiceDetail: allServices,
    });
  } catch (e) {
    next(e);
    console.log("there is an error");
  }
});

router.post("/", async (req, res, next) => {
    try {
        const { title,
            slogan,
            description } = req.body
        const newService = await ServiceDetail.create({
                title,
                slogan,
                description,
        })
        res.status(201).json({newService,
        message: "new service created"})
    } catch(e) {
        next(e)
        console.log("there is a post error")
    }
})

module.exports = router
