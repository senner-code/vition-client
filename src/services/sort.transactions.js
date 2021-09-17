class SortTransactions {

  static sortByDate(list,type) {
    const listNew = list.sort(function (a,b) {
      a = new Date(a.time)
      b = new Date(b.time)
      return a>b ? 1 : a === b ? 0 : -1
    })
    if(type){
      return listNew.reverse()
    }
    return listNew
  }

  static sortByValue(list,type) {
    const listNew = list.sort(function (a,b) {
      a = a.value < 0 ? -a.value : a.value
      b = b.value < 0 ? -b.value : b.value
      return a>b ? 1 : a===b ? 0 : -1
    })
    if(type){
      return listNew.reverse()
    }
    return  listNew
  }

  static sortByType(list, type){
    const listNew = list.sort(function (a,b) {

      a = a.value
      b = b.value

      return a>b ? 1 : a===b ? 0 : -1
    })
    if(type){
      return listNew.reverse()
    }
    return  listNew
  }

}

export default SortTransactions