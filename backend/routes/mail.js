const { Router } = require('express')
const nodeMailer = require('nodemailer')
const { google } = require('googleapis')

const router = Router()
const OAuth2 = google.auth.OAuth2

router.post('/', (req, res) => {
  const oauth2Client = new OAuth2(
    process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground"
  )

  const accesToken = process.env.ACCESS_TOKEN
  const refreshToken = process.env.REFRESH_TOKEN
  
  oauth2Client.on('tokens', (tokens) => {
    if (tokens.refresh_token) {
      refreshToken = tokens.refresh_token
    }
    accessToken = tokens.access_token
  });

  const smtpTransport = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, 
    secure: true, 

    auth: {
      type: "OAuth2", 
      user: "jludenatest@gmail.com", 
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken,
      accesToken
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
      res.json({
        success: false,
        error
      })
    }
    res.json({
      success: true,
      message: `Mensaje Enviado`
    })
  })
})

module.exports = router