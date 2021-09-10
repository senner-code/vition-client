import $api from "../http";

export default class TransactionService {

  static async createTransaction(value, time, description, category_id,user_id){
    return (await $api.post(`/transaction/create`, [value, time, description, category_id,user_id])).data
  }

  static async getTransaction(transactionID){

  }

  static async getTransactionsByCategory(category_id,from, limit){
    return (await $api.get(`/transaction/getbycategory/${category_id}/${from}/${limit}`)).data
  }

  static async getTransactionsByUser(userID,from,limit){
    return (await $api.get(`/transaction/getbyuser/${userID}/${from}/${limit}`)).data
  }


}