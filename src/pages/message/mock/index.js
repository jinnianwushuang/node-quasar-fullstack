/*
 * @Date           : 2021-05-23 01:27:18
 * @FilePath       : /node-quasar-fullstack/src/pages/message/mock/index.js
 * @Description    : 
 */


let arr= [
 
    
  ]


  for(let i=1;i<=800;i++){
    arr.push({
        id:i,
        name: 'name---'+i,
        calories: Math.ceil( Math.random()*10000)/100,
        fat: Math.ceil( Math.random()*1000)/10,
        carbs: Math.ceil( Math.random()*900),
        protein: Math.ceil( Math.random()*600),
        sodium:Math.ceil( Math.random()*990000),
        calcium:   Math.ceil( Math.random()*100)+  '%',
        iron: Math.ceil( Math.random()*100)+'%'
    }) 
  }




  export default arr