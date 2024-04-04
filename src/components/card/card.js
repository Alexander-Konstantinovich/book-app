import { DivComponent } from "../../common/div-component";

import './card.css';

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.parentState = cardState;
    }

    render(){

        this.el.classList.add('card');
        this.el.innerHTML = `
        <div class="card__image">
            <img src="https://covers.openlibrary.org/b/olid/${this.cardState.cover_edition_key}-M.jpg" alt="cover" />
        <div/>
        <div class="card__info">
            <div class="card__tag">
                
            </div>
        </div>
        `
        return this.el;
    }
}