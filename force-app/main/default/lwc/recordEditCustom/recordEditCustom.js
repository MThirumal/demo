import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue =''
    handleChange(event){
        this.inputvalue = event.target.inputValue
    }
    handleSubmit(event){
        event.preventDefault()
        const inputCmp = this.template.querySelector('lightning-input')
        const value = inputCmp.value
        if(!value.includes('Australia')){
            inputCmp.setCustomValidity("The Account Name must include 'Australia' ")
        }else{
            inputCmp.setCustomValidity("")
            const fields = event.detail.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }
    successHandler(event){
      const toastEvent =  new ShowToastEvent({
            title:"Account Created",
            message:"Record Id :" +event.detail.id,
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
    }
    errorHandler(event){
        const toastEvent =  new ShowToastEvent({
            title:"Error creating Account",
            message:event.detail.message,
            variant:"error"
        })
        this.dispatchEvent(toastEvent)
    }
}