import $api from "../http";

export default class AuthService {

  static async login(email, password){
    const data =  await $api.post('user/login', {email, password})
    console.log(data);
    return data
  }

  static async registration(email, password, username){
    return await $api.post('user/registration', {email, password, username})

  }z

  static async logout(){
    return await $api.post('user/logout')
  }




}
