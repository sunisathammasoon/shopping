({
    handleUpdateListitem : function(component, event, helper) {
        var updatedlist = event.getParam("product");
        component.set('v.product', updatedlist);
    },
    
 
})
