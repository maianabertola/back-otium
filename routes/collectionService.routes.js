const router = require("express").Router();
const Collection = require("../models/CollectionService.model");

router.get("/collection", async (req, res, next) => {
  try {
    const findAllCollection = await Favori.find();
    res.status(201).json({
      message: "u have all favori",
      Collection: findAllCollection,
    });
  } catch (e) {
    next(e);
    console.log("there is a get error");
  }
});

router.post("/collection", async (req, res, next) => {
    try {
      const { collectionService } = req.body;
      const newCollectionService = await Collection.create({
        collectionService,
      });
      res.status(201).json({
        message: "collectionService added",
        Collection: newCollectionService,
      });
    } catch (e) {
      next(e), console.log("there is a post error");
    }
  });

router.delete("/collection/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCollection = await Collection.findByIdAndDelete(id);
    res.status(201).json({
      message: "the collection is deleted",
      Collection: deleteCollection,
    });
  } catch (e) {
    next(e);
    console.log("there is a delete error");
  }
});

module.exports = router