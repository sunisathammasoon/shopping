({
    viewPDF : function(component, event, helper) {
        var productList = component.get("v.productList");
        var Customer = component.get("v.Customer");
        var user = component.get("v.user");

        // console.log(JSON.stringify(productList));
        // console.log(JSON.stringify(Customer));
        
        console.log('gotoVF'+JSON.stringify(user.Id));
        // var message = component.get("v.message");
        // var vfOrigin = "https://resilient-raccoon-a8i861-dev-ed--c.visualforce.com/apex/viewPDF?" 
        // var vfWindow = component.find("vfOrigin").getElement().contentWindow;
        // vfWindow.postMessage(Customer, vfOrigin);
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": 'https://resilient-raccoon-a8i861-dev-ed--c.visualforce.com/apex/viewPDF?User='+user.Id
        });
        urlEvent.fire();
    }
})
