({
    createCustomer : function(component, Customer,Orderlist) {
        console.log('Orderlist'+JSON.stringify(Orderlist));
        var action = component.get("c.createOrder");
        action.setParams({
            "user": Customer,
            "Order" : Orderlist
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


        

        // Copy the expense to a new object
        // THIS IS A DISGUSTING, TEMPORARY HACK
        // var newCustomer = JSON.parse(JSON.stringify(expense));
 
        // theCustomer.push(newCustomer);
        // component.set("v.expenses", theCustomer);

    }
})
