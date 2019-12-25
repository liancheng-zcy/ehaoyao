import store from '../../node_modules/store/dist/store.legacy'
export default (keyVal) =>{
  let historyList = store.get('historyKey')
  let list = []
  if(historyList){
    let item = historyList.data.find((value) => {
      return value === keyVal
    })
    if(!item){
      historyList.data.push(keyVal)
      store.set('historyKey', {data:historyList.data})
    }
  }else{
    list.push(keyVal)
    store.set('historyKey', {data:list})
  }
}