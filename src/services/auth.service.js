import $api from "../http";

export default class AuthService {

  static async login(email, password){
    try {
      return await $api.post('user/login', {email, password})
    } catch (e) {
      throw e
    }
  }

  static async registration(email, password, username){
    try {
      return await $api.post('user/registration', {email, password, username})
    } catch (e) {
      throw e
    }
  }

  static async logout(){
    try {
      return await $api.post('user/logout')
    } catch (e) {
      throw e
    }
  }




}
