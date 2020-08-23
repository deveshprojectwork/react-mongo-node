const express = require("express")
const router = express.Router()
const Subscriber = require("../models/subscribers")

// Getting all
router.get("/", async(req,res) =>{
   //res.send("hellow world")
   try{
       const subscribers = await Subscriber.find()
       //res.send(subscribers)
       res.json(subscribers)
   } catch (err){
       res.status(500).json({message: err.message})
   }
})

// Getting One
router.get('/:id', getSubscriber, (req, res) => {
    //res.send(req.params.id)
    res.json(res.subscriber)
  })

// Creating one
router.post('/', async (req, res) => {
    console.log("post" +req);
    const subscriber = new Subscriber({
      name: req.body.name,
      subscribedToChannel: req.body.subscribedToChannel
    })     

    try {
      const newSubscriber = await subscriber.save()
      res.status(201).json(newSubscriber)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

// Updating one
router.patch("/:id",getSubscriber, async (req,res) =>{
    if(req.body.name != null){
        res.subscriber.name = req.body.name
    }
    if(req.body.subscribedToChannel != null){
        res.subscriber.subscribedToChannel = req.body.subscribedToChannel
    }

    try {
        const updateSubscriber = await res.subscriber.save()
        res.json(updateSubscriber)
    } catch (err) {
        err.status(400).json({message: err.message})
    }

})

// Deleting one
router.delete("/:id",getSubscriber, async (erq,res) =>{
 try {
     await res.subscriber.remove()
     res.json({message: "Deleted Subscriber"})
 } catch (err) {
     res.status(500).json({message: err.message})
 }
})

async function getSubscriber(req, res, next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if(subscriber==null){
            return res.status(404).json({message: "Cannot find subscriber"})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }

    res.subscriber = subscriber
    next()
}

module.exports = router

//https://www.youtube.com/watch?v=fgTGADljAeg&list=PLZlA0Gpn_vH9KXLvfhRS1J10UJZ0bZTj9&index=2
//https://github.com/WebDevSimplified/Your-First-Node-REST-API/
// VS code - rest client - route.rest
