router.get("/:id", async (req, res, next) => {
    try {
      const {id} = req.params
      const oneMovie = await Movie.findById(id).populate("cast")
      res.json(oneMovie)
    } catch (e) {
      next(e)
      console.log(e)
    }
  });

  module.exports = Router;