import $api from "../http";

export default class boardService {


  static async createBoard(userID, name){
    return (await $api.post('/board/create', {userID, name})).data
  }

  //For Future (Corp Accounts)
  static async getBoards(userID){
    return (await $api.post('/board/getall', {userID})).data
  }


  static async getBoardbyUserID(userID){
    const board = (await $api.post('/board/getboard', {userID})).data[0]
    return board
  }
}

