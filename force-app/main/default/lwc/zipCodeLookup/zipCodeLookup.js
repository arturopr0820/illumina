import { LightningElement,wire,api,track} from 'lwc';
import getPicklistValues from '@salesforce/apex/GetPickListValuesHelper.getPicklistValues';

export default class ZipCodeLookup extends LightningElement {
     zipCode;
     city;
     state;
     showResult = true;
     options ;
     value;

    handleZipCodeChange(event) {
        this.zipCode = event.target.value;
    };
@wire(getPicklistValues)pickListValues({data,error}){
        if(data){
          //  data.forEach(i => {
                this.options = data.map(d => {
                    return { this.city: d, this.value: d };
                  });
          //  });
            console.log('opts'+JSON.stringify(this.options));
        }


    };
  
    handleZipCodeQuery() {

        fetch(`http://api.zippopotam.us/us/${this.zipCode}`)
            .then(response => response.json())
            .then(data => {
                this.city = data.places[0]['place name'];
                this.state = data.places[0].state;
                this.showResult = true;
                console.log('place name: '+JSON.stringify(data.places[0]['place name']));
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    handleChange(event) {
    this.value = event.detail.value;
    this.value = event.detail.value;
    console.log('selected'+this.value);
  }
}
