import $api from "../http";
import SortTransactions from "./sort.transactions";

class LineGraph {

  static async getData(user_id, from, to, type) {
    try {
      const data = (await $api.get(`/graph/all/${user_id}/${from}/${to}${type ? `/${type}` : ''}`,)).data
      const list = data.map(object => {
        return {
          value: object.value,
          time: object.time.split('T')[0]
        }
      }).reduce((acc, item) => {
        const x = acc.find(x => x.time === item.time)
        x ? x.value += item.value : acc.push(item)
        return acc
      }, [])
      return SortTransactions.sortByDate(list)
    } catch (e) {
      console.log(e.response.data.message);
    }
  }

  static async getDataByCategory(board_id, from, to,type) {
    try {
      let totalValue = 0
      const data = (await $api.get(`/graph/category/${board_id}/${from}/${to}/${type}`)).data
      const list = SortTransactions.sortByType(data,type===1 ? type : null)
      console.log(list)
      return list.map((elem, index) => {
        if (index > 2) {
          totalValue += elem.value
          if (index === list.length - 1) {
            return {
              value: totalValue,
              name: 'Другие'
            }
          }else {
            return null
          }
        }else {
          return {
            value: elem.value,
            id: elem.id,
            name: elem.name
          }
        }
      }).filter(elem => elem !== null)
    } catch (e) {
      console.log(e.response.data.message)
    }
  }


}

export default LineGraph