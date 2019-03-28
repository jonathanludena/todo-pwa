
class MailService {
  constructor() {
    // this.URI = 'http://localhost:3000/api/mail' // DEV
    this.URI = '/api/mail' // PRODUCTION
  }

  async sendMail(message) {
    const response = await fetch(this.URI, {
      method: 'POST',
      body: message
    })
    return await response.json()
  }

}

export default MailService