export class AbstractView {
    constructor(){
        this.app = document.getElementById('root');
    }

    setTitle(title){0
        document.title = title;
    }

    render(){
        return;
    }

    destroy(){
        return;
    }
}