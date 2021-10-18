import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
   //data binding
    fullname="Zero To Hero"
    title="aura"
    //method
    changeHandler(event){
        this.title = event.target.value
    }
    //@track binding
    @track address = {
        city:"Hyderabad",
        postcode:505535,
        country:"india"
    }
    trackhandler(event){
        //Or remove @track decorator and add as follows
        //this.address={...this.address, "city":event.target.value}
        this.address.city = event.target.value
    }

    //getter Example
    users = ["JOhn", "smith", "nik"]
    num1 =10
    num2 =20

    get firstUser(){
        return this.users[0]
    }

    get multiply(){
        return this.num1*this.num2
    }
}