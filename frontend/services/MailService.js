
class MailService {
  constructor() {
    this.URI = 'http://localhost:3000/api/mail'
  }

  async sendMail(message) {
    const response = await fetch(this.URI, {
      method: 'POST',
      body: message
    })
    const data = await response.json()
    console.log(data)
  }

}

export default MailService