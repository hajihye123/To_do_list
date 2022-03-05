import Component from "../core/Component.js";

class ItemFilters extends Component{

    setEvent() {
        this.addEvent('click', '.active', ({target})=>{
            this.state.filterItem(target.dataset.filter);
        })
    }

    template(){
        return `
        <button class="active" data-filter="all">전체 보기</button>
        <button class="active" data-filter="1">완료 보기</button>
        <button class="active" data-filter="0">미완료 보기</button>
        `;
    }
}

export default ItemFilters