public Class pdfcontroller {
    
   
    public String userId {get;set;}
    public User__c user {get;set;}
 
    // public Object dataCustomerBefore{get;set;}

    public pdfcontroller() {
        String userId = System.currentPageReference().getParameters().get('User');
        user = [SELECT 	Name,Phone__c ,email__c,address__c FROM User__c WHERE Id=:userId];
        System.debug(user);

    }

    public list<Order__c> getOrders() {
        

        String userId = System.currentPageReference().getParameters().get('User');
        List<Order__c>  orders = [SELECT Product__r.Name ,Product__r.Price__c ,Quantity__c FROM Order__c 
        WHERE User__c=:userId];
        System.debug(orders);  
        return  orders;    

        
    }


    
    // public List<Order__c> getOrder(){
    //     userId = System.currentPageReference().getParameters().get('userId');
    //     List<Order__c>  orders = [SELECT Product__r.Name ,Product__r.Price__c ,Quantity__c,Product__r.Image__c FROM Order__c 
    //                             WHERE User__c=:userId];
    //     user = [SELECT Name,Phone__c,Email__c,Address__c FROM User__c WHERE Id = :userId];
    //     System.debug(user.Id);
    //     return orders;
    // }


    // public class testURLController {
    //     public String firstName {get;set;}
    //     public String lastName {get;set;}
    //     public String userId {get;set;}
    //     public String totalPrice {get;set;}
    //     public User__c user {get;set;}
        
    //     public testURLController(){
    //         firstName = System.currentPageReference().getParameters().get('firstName');
    //         lastName = System.currentPageReference().getParameters().get('lastName');
    //         totalPrice = System.currentPageReference().getParameters().get('totalPrice');
    //     }
    //     public List<Order__c> getOrder(){
    //         userId = System.currentPageReference().getParameters().get('userId');
    //         List<Order__c>  orders = [SELECT Product__r.Name ,Product__r.Price__c ,Quantity__c,Product__r.Image__c FROM Order__c 
    //                                   WHERE User__c=:userId];
    //         user = [SELECT Name,Phone__c,Email__c,Address__c FROM User__c WHERE Id = :userId];
    //         System.debug(user.Id);
    //         return orders;
    //     }
    // }
}
