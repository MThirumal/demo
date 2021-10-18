import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false
    clickHandler(){
        this.showModal = true
    }
    msg
    closeHandler(event){
        //for SIMPLE DATA
        //this.msg=event.detail
        //for COMPLEX DATA
        this.msg=event.detail.name
        this.showModal=false
    }
}