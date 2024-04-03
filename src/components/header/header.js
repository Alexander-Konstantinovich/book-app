import { DivComponent } from "./div-component";

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
        `;
        return this.el;
    }
}