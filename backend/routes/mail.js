const { Router } = require('express')
const nodeMailer = require('nodemailer')

const clientSecret = require('../client_secret')

const router = Router()

router.post('/', (req, res) => {
  console.log(req.body)
  const smtpTransport = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, 
    secure: true, 

    auth: {
      type: "OAuth2", 
      user: "jludenatest@gmail.com", 
      clientId: clientSecret.web.client_id,
      clientSecret: clientSecret.web.client_secret,
      refreshToken: "1/UXUrGm94x2dR0XFulHRofZ99Xv4GoP8LttXhyT4g2X0"
    }
  })

  const messageTemplate = {
    from: `${req.body.nombre} <${req.body.email}>`,
    to: `jonathanludenai@gmail.com`,
    subject: "MENSAJE DE PWA-TODOApp",
    text: `${req.body.mensaje} \n Plain text body`,
    html: `<h2>Mensaje desde TodoApp - PWA [Contact]</h2><br>
          <p>
            <b>De:</b> ${req.body.nombre}<br>
            <b>Email:</b> ${req.body.email}<br>
            <b>Mensaje:</b> ${req.body.mensaje}
          </p>`
  }

  //send mail
  smtpTransport.sendMail(messageTemplate, (error, info) => {
    if(error) {
      smtpTransport.close()
      console.log(`Error en envío de mensaje: ${error}`)
    }
    res.json({
      message: `Mensaje Enviado`
    })
  })
})

module.exports = router