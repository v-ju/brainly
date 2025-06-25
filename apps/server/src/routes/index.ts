import express from 'express'
import { signup } from '../controllers/controllers';


const router = express.Router();

router.post('/signup', signup)





router.post('/signin',(req,res) => {

})

router.post('/content',(req,res) => {

})

router.get('/content',(req,res) => {

})

router.delete('/content',(req,res) => {

})

router.get('/brain/:shareLink', () => {

})

export default router