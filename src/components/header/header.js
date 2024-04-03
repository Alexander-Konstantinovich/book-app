import { DivComponent } from "./div-component";
import './header.css/'
export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render(){
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
        <div>
            <img src="/static/logo.svg" alt= "Logotype" />
        </div>
        <div class="menu">
            <a class="menu__item" href="#">
            <img src="/static/search.svg" alt= "Search icon" />
            Search books
            </a>
            <a class="menu__item" href="#">
            <img src="/static/favorites.svg" alt= "Favorites books" />
            Favorites
            <div class= "menu__counter">
                ${this.appState.favorites.length}
            </div>
        </div>
        `;
        return this.el;
    }
}