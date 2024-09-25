class Search {
    static searchLink = 'a[data-action="toggle-search"]';
    static searchInput = 'input[type="search"]';
    checkSearchLink () {
        return cy.get(Search.searchLink).eq(0);

    }
    checkSearchAttribute () {
        cy.get(Search.searchLink).first()
            .should ('have.text', 'Search')
            .and ('have.attr','href','/search')

    }
    checkIsSearchLinkIsVisible () {
        cy.get(Search.searchLink)
            .should ('exist')
            .and ('be.visible')

    }
    checkSearchInput () {
        cy.get(Search.searchInput)
            .should ('exist')
            .and ('have.attr', 'placeholder','Search...')

    }
    checkSearchExistedProduct (){
        cy.get (Search.searchInput)
          .type("SmartDoor");
    }
    checkSearchNotExistedProduct () {
        cy.get (Search.searchInput)
            .type("a...TDr")

    }

}
export default Search;
