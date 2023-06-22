import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cookieParser('esteesmisecret'))

app.get('/get-cookie', (req, res) => {
    const cookie = req.cookies.mail;
    res.send(cookie)
});

app.post('/create-cookie', (req, res) => {
    const mail = req.body.userEmail;
    res.cookie('mail', mail).send('Cookie creada correctamente')
})

// app.get('/setCookie', (req, res) => {
//     res.cookie('unaCookie', 'valor1').send('Cookie')
// })

// app.get('/getCookies', (req, res) => {
//     res.send(req.cookies)
// })

// app.get('/deleteCookies', (req, res) => {
//     res.clearCookie('unaCookie').send('Cookie eliminada')
// })

// app.get('/signedCookie', (req, res) => {
//     res.cookie('signed', 'valor para cookie firmada', { signed: true }).send('Cookie firmada creada')
// })

// app.get('/getAllCookies', (req, res) => {
//     let cookies = {
//         firmadas: req.signedCookies,
//         normales: req.cookies
//     }
//     res.send(cookies)
// })

const server = app.listen(8080, () => console.log('Server running'))
server.on('error', error => console.log(error))