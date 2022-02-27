class API {
    constructor(api){
        this.api = api
    }
    connection(){
         fetch(this.api)
              .then(res => res.json())
              .then(json=> ui.newCol(json.results))
    }
 
}