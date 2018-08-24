export default class Patient {
  constructor (id = '', name = '', email = '', contact = '', cpf = '', bornDate = '') {
    this.id = id
    this.name = name
    this.email = email
    this.contact = contact
    this.cpf = cpf
    this.bornDate = bornDate
  }
}
