describe('validar login de usuário', () => {
    beforeEach(() => {
        cy.visit('https://bearstore-testsite.smartbear.com/login');
    });


    it('Login com sucesso', () => {
        cy.get('#UsernameOrEmail').type('jhonDoe01')
        cy.get('#Password').type('q1w2e3')    
        cy.get('.btn-login').click()

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/')
        cy.contains('Welcome to our store.').should('be.visible')
    })
    
})
