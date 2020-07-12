({
    clickNext : function(component, event, helper) {
        var validExpense = component.find('customerform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validExpense){

           // console.log(JSON.stringify(component.get("v.newCustomer")));
            var newCustomer = component.get("v.newCustomer");
            var newOrderlist = component.get("v.Orderlist");

             console.log('newProductList'+JSON.stringify(newOrderlist));
            // console.log(JSON.stringify(newProductList));


            //helper.createCustomer(component, newCustomer,newOrderlist);
            console.log('TestOrderlist' + JSON.stringify(newOrderlist));

            var action = component.get("c.createOrder");
            action.setParams({
                "user": newCustomer,
                "Order" : newOrderlist
            });
          
    
           
            // Add callback behavior for when response is received
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                   
                    component.set('v.user',  response.getReturnValue());
                   // console.log( JSON.stringify(response.getReturnValue()));
                    console.log( 'SUCCESS');
    
                    var evt = $A.get("e.force:navigateToComponent");
                    evt.setParams({
                        componentDef : "c:checkout",
                        componentAttributes: {
                            Customer : newCustomer,
                            productList : component.get("v.productlist"),
                            user :  component.get("v.user")
                        }
                    });
                    evt.fire();
                }
                else {
                    console.log("Failed with state: " + state);
                }
            });
            // Send action off to be executed
            $A.enqueueAction(action);
    
       
          
     


         
        }
    }
})
