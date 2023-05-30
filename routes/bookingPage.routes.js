const router = require("express").Router()
const Villa = require("../models/Villa.model")


router.get("/", async (req, res, next) => {
    try {
        const findAllBook = await Villa.find()
        res.status(201).json({
            message: "there is all villa",
            Villa: findAllBook,
        })
    } catch(e) {
        next(e)
        console.log("there is an error")
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { name,
            country,
            region,
            numberPeoples,
            squareMetter,
            bedrooms,
            bathrooms,
            views,
            price,
            galeryPhoto,
            slogan,
            descriptionText,
            idylicStatus,
            petFriendly,
            distinctiveIncluded,
            descriptionPieces,
            address,
            id } = req.body
        const newVilla = await Villa.create({
            name,
            country,
            region,
            numberPeoples,
            squareMetter,
            bedrooms,
            bathrooms,
            views,
            price,
            galeryPhoto,
            slogan,
            descriptionText,
            idylicStatus,
            petFriendly,
            distinctiveIncluded,
            descriptionPieces,
            address,
            id,
        })
        res.status(201).json({
            message: "Villa created",
            Villa: newVilla,
        })
    } catch(e) {
        next(e)
        console.log("there is an error")
    }
})


// un post sur le user 
//patch de date sur la villa 

//le nom de la villa -> name ou ID
// date de réservation 

module.exports = router