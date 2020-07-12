public with sharing class shoppingcontroller {
    @AuraEnabled
    public static list <Product__c> product {get;set;}

    public shoppingcontroller() {

    }

    @AuraEnabled
    public static list<Product__c>  getProduct() {
        product = [SELECT Name,Price__c FROM Product__c ORDER BY Name ]; 
        return  product;      

       
    }

    @AuraEnabled
    public static User__c createOrder(User__c user,List<Order__c> Order){
        //System.debug(user);

        insert user;
        //list<Order__c> orderlist= new list<Order__c>();
      // System.debug(product);

     // System.debug(Order);

        for(Order__c Ordereach:Order){

            Ordereach.User__c = user.Id;
        }
        
        insert Order;

        return user;
        //System.debug(user);
        
    }

}
