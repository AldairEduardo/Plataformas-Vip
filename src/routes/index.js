import { Router } from "express"

const router= Router()

router.get('/',(req,res)=> res.render('index',{title: 'Plataformas Vip' } ))



router.get('/Servicios',(req,res)=> res.render('Servicios',{title: 'Servicios' }))
router.get('/promociones',(req,res)=> res.render('promociones',{title: 'Promociones' }))
router.get('/Chat_Bot',(req,res)=> res.render('Chat_Bot',{title: 'Chat_Bot' }))
router.get('/Productos',(req,res)=> res.render('Productos',{title: 'Productos' }))
router.get('/informacionPython',(req,res)=> res.render('informacionPython',{title: 'Python' }))
router.get('/informacionJava',(req,res)=> res.render('informacionJava',{title: 'Java' }))
router.get('/informacionJavascript',(req,res)=> res.render('informacionJavascript',{title: 'Javascript' }))
router.get('/informacionReact',(req,res)=> res.render('informacionReact',{title: 'React' }))
router.get('/informacionMovil',(req,res)=> res.render('informacionMovil',{title: 'Movil' }))

export default router