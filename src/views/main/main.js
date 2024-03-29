import { AbstractView } from "../../common/views.js";

export class MainView extends AbstractView{
    constructor(appState){
        super();
        this.appState=appState;
        this.setTitle('Search books');
    }
    render(){
        const main = document.createElement('div');
        main.innerHTML = `Numbers of books:${this.appState.favorites.length}`;
        this.app.innerHTML = '';
        this.app.append(main);
    }
}