import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";

export default class  Controller{
    constructor(){
        this.dataService=new DataService()

        this.dataService.getData("flights", this.megjelenit)
        $(window).on("sorTorles",(e)=>{
            console.log(e.detail)
            this.dataService.deleteData("flights", e.detail)
        })
    }


    megjelenit(list){
       // console.log(list)
        //példányosítjuk a view-t Táblázatot
        new TablaView(list, $(".adatok"))
    }
}