export default class Schedule {
  constructor (patient = '', doctor = '', id_dia = '', hr_ini = '', hr_fin = '') {
    this.patient = patient
    this.doctor = doctor
    this.id_dia = id_dia
    this.hr_ini = hr_ini
    this.hr_fin = hr_fin
  }
}
