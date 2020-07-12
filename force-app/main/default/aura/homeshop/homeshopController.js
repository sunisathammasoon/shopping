({
    doInit: function(component, event, helper) {
    
        var action = component.get("c.getProduct");
       
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
    
                component.set('v.products', response.getReturnValue());
                console.log( response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },
    handleUpdateList : function(component, event, helper) {
        var updatedPro = event.getParam("product");
        var productList = component.get("v.productList");

        var Order = component.get("v.Order");
        var Orderlist = component.get("v.Orderlist");

        var found = productList.find(element => element.Name === updatedPro.Name);
        var index = productList.findIndex(element => element.Name === updatedPro.Name);
        console.log(index);
        if(!found){
            Order.Quantity__c=1;
            Order.Product__c=updatedPro.Id;
            Orderlist.push(Order);
            console.log('Orderlist'+JSON.stringify(Orderlist));

            updatedPro.quantity=1;
            updatedPro.total = updatedPro.Price__c;
             productList.push(updatedPro); 
        }
        else{
           
            var count =1;

            productList[index].quantity =parseInt(productList[index].quantity)+parseInt(count);
            component.set('v.total', productList[index].quantity)
            productList[index].total = productList[index].quantity * productList[index].Price__c 

            Orderlist[index].Quantity__c =parseInt(Orderlist[index].Quantity__c)+parseInt(count);
            //component.set('v.total', Orderlist[index].Quantity__c)
            //Orderlist[index].total = Orderlist[index].Quantity__c * Orderlist[index].Price__c ;

        }
        component.set('v.Orderlist', Orderlist);
        component.set('v.productList', productList);
        component.set('v.Order', {'sobjectType': 'Order__c',
                                'User__c': '',
                                'Product__c': '',
                                'Quantity__c': ''
                                });

        //console.log(JSON.stringify(productList));
       
    },

    gotoURL : function (component, event, helper) {
        console.log('productList'+JSON.stringify(component.get("v.Orderlist")));
        var evt = $A.get("e.force:navigateToComponent");
        console.log('Event '+evt);
        evt.setParams({
            componentDef  : "c:customer" ,
            componentAttributes: {
                Orderlist : component.get("v.Orderlist"),
                newCustomer : { 'sobjectType': 'User__c',
                                'Name': '',
                                'Phone__c': '',
                                'email__c': '',
                                'address__c': ''
                                    },
                productlist : component.get("v.productList")
            }

        });
      
        evt.fire();
    },
    handleKeyupqty: function (component, event, helper) {
        var updatedqty = event.getParam("product");
        
        var Orderlist = component.get("v.Orderlist");
        var index = Orderlist.findIndex(element => element.Product__c === updatedqty.Id);
       
        Orderlist[index].Quantity__c = updatedqty.quantity;
        //console.log('Orderlist'+JSON.stringify(Orderlist[index]));
        //console.log('Orderlist'+JSON.stringify( Orderlist[index].Product__c));
      // console.log('index'+index);
      // component.set('v.Orderlist', Orderlist);
      console.log('updatedqty'+JSON.stringify(updatedqty));
       console.log('Orderlist'+JSON.stringify(Orderlist));

    }


})
