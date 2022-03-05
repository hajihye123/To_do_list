import Items from "./components/Items.js";
import ItemInput from "./components/ItemInput.js";
import ItemFilters from "./components/ItemFilters.js";
import Component from "./core/Component.js";

class App extends Component{
    
    state = {
        filterBy: 'all',
        items: [
            {
                text: 'item1',
                address: 'addr1',
                index: 1,
                active: 0
            },
            {
                text: 'item2',
                address: 'addr2',
                index: 2,
                active: 0
                },
            ]
        }
        index = 3;

    constructor() {
        super(...arguments)
        const $target = document.querySelector('#app');
        this.itemInput = new ItemInput($target, {
            addItem : this.addItem
        });
        this.itemFilters = new ItemFilters($target, {
            filterItem : this.filterItem
        });
        this.items = new Items($target, {
            items : this.state.items,
            filterBy : this.state.filterBy,
            removeItem : this.removeItem,
            toggleItem : this.toggleItem,
        });
    }


    addItem = (value, value2) =>{
        const items = [...this.state.items];
        const newItem = {text: value, index : this.index, active: 0, address: value2};

        this.setState('items', {items: [...items, newItem]});

        this.index++;
    }

    toggleItem = (targetIndex) =>{
        const items = [...this.state.items];
        this.setState('items', {
            items: items.map(item => item.index !== targetIndex ?
                item :
                {...item, active: item.active ? 0 : 1})
        });
    }

    removeItem = (targetIndex) =>{
        const items = [...this.state.items];
        this.setState('items', {items: items.filter(item => item.index !== targetIndex)});
    }

    filterItem = (filter)=>{
        this.setState('items', {filterBy: filter});
    }

    setState(component, nextState){
        this.state = {...this.state, ...nextState};
        this[component].setState(this.state);
    }

}

export default App

/*
학생 클래스

메소드
study- 하나만 생성

화살표함수 쓰면 study가 4개가 생성(메모리 낭비)
좋은점: 클래스의 this가 그대로
*/