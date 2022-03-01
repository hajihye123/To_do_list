import Component from "../core/Component.js";


class Items extends Component{

    setup() {
        super.setup();
    }

    setEvent() {
        this.addEvent('click','.remove',({target})=>{
            this.state.removeItem(target.closest('[data-index]').dataset.index*1);
        })
        this.addEvent('click','.toggle',({target})=>{
            this.state.toggleItem(target.closest('[data-index]').dataset.index*1);
        })
    }
    
    get filteredItems (){
        const {filterBy, items} = this.state;
        if (filterBy === 'all'){
            return items
        }
        else{
            return items.filter(({active})=> active === filterBy*1);
        }
    }

    template() {
        return `
        <ul>
            ${this.filteredItems.map(({text, address, active, index})=>
                `
                <li data-index="${index}" style="background-color: ${active ? '#AEAEAE' : '#EAEAEA'}">
                    ${text} ${address}
                    <button class="toggle" data-active="false" style="color: ${active ? '#09F' : '#F09'}">${active? '완료':'미완료'}</button>
                    <button class="remove">삭제</button>
                </li> 
                `).join("")}
         </ul>
         `;
    }
}


export default Items
