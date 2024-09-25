class Homepage {

    getTitle () {
        return cy.title();

    }
    checkCurrentUrl () {
        return cy.url();
    }

}
export default Homepage;