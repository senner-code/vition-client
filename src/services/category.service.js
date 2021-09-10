import $api from "../http"

export default class CategoryService {
  static async getCategories(boardID){
    return (await $api.get(`/category/getall/${boardID}`)).data
  }

  static async getCategory(category_id){
    return (await $api.get(`/category/get/${category_id}`)).data
  }

  static async createCategory(boardID, name){
    return (await $api.post('/category/create', {boardID, name})).data
  }
}
