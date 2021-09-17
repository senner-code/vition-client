import { makeAutoObservable} from "mobx"
import AuthService from "../services/auth.service.js"
import axios from "axios"
import { API_URL } from "../http"

export default class Store {
  user = {}
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setWidgetDataList(newList){
    this.widgetDataList = newList
  }

  setAuth(bool) {
    this.isAuth = bool
  }

  setUser(user) {
    this.user = user
  }


  async login(email, password) {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e) {
      return e.response.data.message
    }
  }

  async registration(email, password, username) {
    try {
      const response = await AuthService.registration(email, password, username)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e) {
      console.log(e.response.data)
      return {
        message: e.response.data.message,
        error: (e.response.data.errors.map((e) => e.param)).join('')
      }
    }
  }



  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({})
    } catch (e) {
      console.log(e)
      console.log(e.response.data.message);
    }
  }



  async checkAuth() {
    try {
      const response = await axios.get(`${API_URL}user/refresh`, {
        withCredentials: true
      })
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)

    } catch (e) {
      console.log(e.response.data.message);
    }
  }

}