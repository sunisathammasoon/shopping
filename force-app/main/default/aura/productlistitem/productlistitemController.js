({
    handleKeyUp:function(component, event, helper) {
        
       
        var searchInput = component.find("qtyInput");
        var searchValue = searchInput.get("v.value");
        var productqty= component.get("v.product.quantity");
        var productpri= component.get("v.product.Price__c");
        var total =productqty*productpri;
        component.set('v.product.total', total);
        component.set('v.product.quantity', searchValue);
      
        var product = component.get("v.product");
        var updateEvent = component.getEvent("updateqty");
        updateEvent.setParams({ "product": product });
        updateEvent.fire();
       // console.log('qty',JSON.stringify(component.get("v.product") ));

      //  console.log('qty',JSON.stringify(searchValue));

        //alert(searchValue);
         // console.log('keyuppp',searchValue);
        //  console.log('keyyyy',JSON.stringify(productqty));
        //  console.log('keyyyy',JSON.stringify(productpri));
        //  console.log('keyyyy',JSON.stringify(total));

        
    }
})
