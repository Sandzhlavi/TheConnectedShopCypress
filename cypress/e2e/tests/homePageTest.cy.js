import OpenSite from "../pages/openSite";
import Homepage from "../pages/homepage";

describe ("checkHomePage",()=> {
    const openSite = new OpenSite();
    const homePage = new Homepage();
    it ("should open the page and check the title", ()=> {
        openSite.visit();
        homePage.getTitle()
            .should("eq","The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office");
        homePage.checkCurrentUrl()
            .should ("eq","https://theconnectedshop.com/")



    })


} )