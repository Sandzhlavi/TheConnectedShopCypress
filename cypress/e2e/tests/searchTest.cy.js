import Search from "../pages/search";
import OpenSite from "../pages/openSite";

describe ("Search functionality",()=> {

    const openSite = new OpenSite();
    const search = new Search();
        Cypress.on('uncaught:exception', (err, runnable) => {

            return false;
        });
    beforeEach(() => {
        cy.viewport(1280,720)
        openSite.visit()
    })
    it ("Search should be clickable",()=>{
        /*search.checkSearchLink()
            .should ('exist')
            .and ('be.visible')
            .and ('have.text', 'Search')
            .and ('have.attr','href','/search')
            .and ('have.attr', 'autocomplete', 'off')
            .and ('have.attr', 'autocorrect', 'off')
            .and ('have.attr', 'autocapitalize', 'off')
            .and ('have.attr', 'placeholder', 'Search...')
            .and ('have.attr', 'autofocus')
*/

        search.checkIsSearchLinkIsVisible();
        search.checkSearchAttribute();
        search.checkSearchLink().click();
        search.checkSearchInput();
        search.checkSearchNotExistedProduct();



    })

    it ('should search existed product ',()=> {
        search.checkSearchLink().click();
        search.checkSearchExistedProduct();


    })


}

)
