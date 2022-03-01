import Component from "../core/Component.js";

class ItemInput extends Component{
    template(){
        return `
    <form >
        <input type="text" class="add-input" placeholder="내용을 입력하세요" autofocus>
        <input type="text" class="add-address" placeholder="주소를 입력하세요">
        <button class="add">추가</button>
    </form>`
    }

    setEvent() {
        this.addEvent('click','.add',(e)=>{
            e.preventDefault();
            const inputItem = this.$target.querySelector('.add-input');
            const inputAddr = this.$target.querySelector('.add-address');
            this.state.addItem(inputItem.value, inputAddr.value);
            inputItem.value = '';
            inputAddr.value = '';
            inputItem.focus();
        })
    }

}

export default ItemInput