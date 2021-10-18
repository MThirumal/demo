import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
import NAME_FIELD from '@salesforce/schema/User.Name'
import EMAIL_FIELD from '@salesforce/schema/User.Email'
const fields = [NAME_FIELD, EMAIL_FIELD]
export default class WireDemoUserDetail extends LightningElement {
    userId = Id
    //0056D000004CIBoQAO

    userDetail

    // @wire(adapter, {adapterConfig})
    // property or function
    //*************************DON'T HARDCODE FIELDS AND VALUES********************* */
    // @wire(getRecord, {recordId:'0056D000004CIBoQAO', fields:['User.Name', 'User.Email']})
    // userdetailHandler(response){
    //     console.log(response)
    //     let data = response.data
    //     let error = response.error
    // }
    //********If HARDCODED RecordId ***************/
    //@wire(getRecord, {recordId:'0056D000004CIBoQAO', fields:fields})
    //**********IF you don't want to hardcode recod Id********* */
    @wire(getRecord, {recordId:'$userId', fields:fields})
    userdetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }

    @wire(getRecord, {recordId:'0056D000004CIBoQAO', fields:fields})
    userDetailProperty
}