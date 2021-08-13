import $api from "../http"

export default class WidgetService {
  static async getWidgets(boardID){
    return (await $api.get(`/widget/getall/${boardID}`)).data
  }

  static async getWidget(widgetId){
    return (await $api.get(`/widget/get/${widgetId}`)).data
  }

  static async createWidget(boardID, name){
    return (await $api.post('/widget/create', {boardID, name})).data
  }
}
