

initilizationClass = ()=>{
    globalThis.api = new API('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=63e9c61bf01747ebfd86b3c204c8908b')
    globalThis.ui = new UI()
}

 runningClassFunctions = async  ()=> {
    await api.connection()
          ui.newCol()
}
//


initilizationClass()
runningClassFunctions()
