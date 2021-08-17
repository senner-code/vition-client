import $api from "../http";

export default class TransactionService {

  static async createTransaction(value, time, description, widget_id,user_id){
    return (await $api.post(`/transaction/create`, [value, time, description, widget_id,user_id])).data
  }

  static async getTransaction(transactionID){

  }

  static async getTransactionsByWidget(widgetID,from, limit){
    return (await $api.get(`/transaction/getbywidget/${widgetID}/${from}/${limit}`)).data
  }

  static async getTransactionsByUser(userID,from,limit){
    return (await $api.get(`/transaction/getbyuser/${userID}/${from}/${limit}`)).data
  }


}