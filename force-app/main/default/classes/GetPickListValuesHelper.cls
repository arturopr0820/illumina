/**
 * @description       : 
 * @author            : ChangeMeIn@UserSettingsUnder.SFDoc
 * @group             : 
 * @last modified on  : 04-08-2024
 * @last modified by  : ChangeMeIn@UserSettingsUnder.SFDoc
**/
public with sharing class GetPickListValuesHelper {
        @AuraEnabled(cacheable=true)
        public static List<String> getPicklistValues(){
            List<String> pickListValues = new List<String>();
            Schema.DescribeFieldResult pickList = zippoCountries__mdt.Countries__c.getDescribe();
            
            for( Schema.PicklistEntry pickVal : pickList.getPicklistValues()){
                pickListValues.add(pickVal.getValue());
            }   
            return pickListValues;
        }
    
}