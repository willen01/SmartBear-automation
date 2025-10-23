describe('validar login de usuário', () => {
    beforeEach(() => {
        cy.visit('https://bearstore-testsite.smartbear.com/login');
    });


    it('Login de usuário com dados válidoso', () => {
        cy.get('#UsernameOrEmail').type('jhonDoe01')
        cy.get('#Password').type('q1w2e3')    
        cy.get('.btn-login').click()

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/')
        cy.contains('Welcome to our store.').should('be.visible')
    })

    it('Login de usuário com credenciais incorretas', () => {
        cy.get('#UsernameOrEmail').type('jhonDoe01')
        cy.get('#Password').type('q1w3')    
        cy.get('.btn-login').click()

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/login')
        cy.contains('The credentials provided are incorrect').should('be.visible')
    })

    it('Login de usuário com formulário vazio', () => {
        cy.get('#UsernameOrEmail')
        cy.get('#Password') 
        cy.get('.btn-login').click()

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/login')
        cy.contains('The credentials provided are incorrect').should('be.visible')
    })
    
})
