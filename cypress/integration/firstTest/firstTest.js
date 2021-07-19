describe('First Test on K5 Website', () => {
    it('Loads Website and enter username and password', () => {

        //Visit website
        cy.visit('https://buergerservice-dev.cloudfabrik.at/');

        cy.wait(4000);

        //cy.url().should('eq', 'https://buergerservice-dev.cloudfabrik.at/initializatoin');

        //Enter username
        cy.get('#Username').type('test-user@k5-buergerservice.at');

        //Click button
        cy.get('.btn-primary').click();
        
        cy.url().should('contain', '/Account/LoginProcessUsername');

        //Enter password
        cy.get('#Password').type('skywalker');

        //Click button
        cy.get('.btn-primary').click();

        cy.wait(2000);

        //Check if URL is correct after getting redirected
        cy.url().should('eq', 'https://buergerservice-dev.cloudfabrik.at/buergerservice/home');
        
    });
});