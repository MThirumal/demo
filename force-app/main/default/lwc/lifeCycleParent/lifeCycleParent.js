import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    isChildVisible=false
    constructor(){
        super()
        console.log("Parent Constructor called")
    }
    connectedCallback(){
        console.log("Parent connectedCallback called")
    }
    renderedCallback(){
        console.log("Parent renderedCallback called")
    }
    // name
    // changeHandler(event){
    //     this.name = event.target.value
    // }
    handleClick(){
        this.isChildVisible = !this.isChildVisible
    }
    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }

}