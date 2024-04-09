import { LightningElement,api } from 'lwc';

export default class ZipCodeResults extends LightningElement {
    Message;

    @api
    changeMessage(strString) {
         this.Message = strString.toUpperCase();
    }


}