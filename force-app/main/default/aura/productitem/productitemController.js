({
    clickSelect : function(component, event, helper) {


        var product = component.get("v.product");
       // console.log(product);
        var updateEvent = component.getEvent("updateListitem");
        updateEvent.setParams({ "product": product });
        updateEvent.fire();
    }
})
