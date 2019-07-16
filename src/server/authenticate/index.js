const router = require('express').Router()
const User = require('../db/models/User')

// Checks to see if user exists in db, and whether pw is correct. 
router.get('/getUser/:id', (req, res, next) => {
  if (req.user){
    res.status(200).send(req.user)
  }
})

router.post('/checkUser', async (req, res, next) => {
  try{
    const user = await User.findOne({
      where: {
        email: req.body.user.email
      }
    }) 
    if(!user){
      res.sendStatus(401)
    } else if (!user.checkPassword(req.body.user.password)) {
      res.sendStatus(401)
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch(err){
      next(err)
  }
})

router.delete('/logout', async(req, res, next) => {
  try{
    req.logOut()
    req.session.destroy()
    res.sendStatus(202)
  }catch(err){
    next(err)
  }
})


module.exports = router 

