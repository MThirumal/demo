import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
      const myEvent = new CustomEvent('close', {
        //for simply passing data
       // detail:"Modal Closed Successfully!!"
       //for COMPLEX data 
       detail:{
        name:"Modal Closed Successfully!!"
      }
      })
      this.dispatchEvent(myEvent)
    }
}