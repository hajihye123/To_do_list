class Component {
    $target
    state
    constructor ($target,props) {
        this.elem = document.createElement('div');
        this.elem.classList.add(`${this.constructor.name}`);
        this.$target = $target;
        this.props = props;
        this.setup();
        this.render();
        this.setEvent();
        this.$target.appendChild(this.elem);
    }

    setup () {
        this.state = this.props;
    }
    template () { return ''; }
    render () {
        this.elem.innerHTML = this.template();
        this.mounted();
    }
    mounted(){}
    setState (newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
    setEvent(){}

    addEvent (eventType, selector, callback) {
        const children = [...document.querySelectorAll(selector)];

        const isTarget = target => children.includes(target) || target.closest(selector);
        this.$target.addEventListener(eventType, e=>{
            if(!isTarget(e.target)) return false;
            callback(e);
        })
    }
}

export default Component