import { faker } from "@faker-js/faker";


describe('validar registro de usuário', () => {
    beforeEach(() => {
        cy.visit('https://bearstore-testsite.smartbear.com/register');
    });


    it('Cadastro com campos obrigatórios vazios', () => {
        cy.get('#FirstName').type('Jane')
        cy.get('#LastName').type('Doe')    
        cy.get('#DateOfBirthDay').select('5')
        cy.get('#DateOfBirthMonth').select('August')        
        cy.get('#DateOfBirthYear').select('1997')
        cy.get('#Company').type('Company name')    

        cy.get('#register-button').click()
        cy.get('#Email-error').contains("\'Email'\ should not be empty.").should('be.visible')
        cy.get('#Password-error').contains("\'Password'\ should not be empty.").should('be.visible')
        cy.get("#ConfirmPassword-error").contains("\'Confirm password'\ should not be empty.").should('be.visible')

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/register')
    })
    
    it('Cadastro de usuário com e-mail já cadastrado', () => {
        cy.get("#Email").type("jhon.doe@provider.com")
        cy.get('#Username').type("jhony")
        cy.get("#Password").type("123456")
        cy.get("#ConfirmPassword").type("123456")
        cy.get('#register-button').click()
        cy.contains('li', 'The specified email already exists')

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/register')
    })

    it('Cadastro de usuário com dados válidos', () => {
        cy.get("#FirstName").type("Jhon")
        cy.get("#LastName").type("Doe")
        cy.get('#DateOfBirthDay').select('5')
        cy.get('#DateOfBirthMonth').select('August')        
        cy.get('#DateOfBirthYear').select('1997')
        cy.get("#Email").type(faker.internet.email({ firstName: 'marta', lastName: 'doe', provider: 'happyprovider.com'}))
        cy.get('#Username').type(faker.internet.username({ firstName: 'martha', lastName: 'doe'}))
        cy.get("#Password").type("123456")
        cy.get("#ConfirmPassword").type("123456")
        cy.get('#Company').type('Company name')


        cy.get('#register-button').click()
        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/registerresult/1')
        cy.contains('p', 'Your registration completed')
        })

      

})
