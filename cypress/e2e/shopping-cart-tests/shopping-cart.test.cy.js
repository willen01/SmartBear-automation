import { faker } from "@faker-js/faker";
import '../../pages/shopping-cart-page/shopping-cart.page'

describe('Carrinho de compras', () => {
   
    it('Realizar compra', () => {
        
        const urlData = {
            login: 'https://bearstore-testsite.smartbear.com/login',
            home: 'https://bearstore-testsite.smartbear.com/',
            sports: 'https://bearstore-testsite.smartbear.com/sports',
            product: 'https://bearstore-testsite.smartbear.com/gbb-epic-sub-zero-driver',
            checkout: {
                billing: 'https://bearstore-testsite.smartbear.com/checkout/billingaddress',
                shipping: 'https://bearstore-testsite.smartbear.com/checkout/shippingmethod',
                payment: 'https://bearstore-testsite.smartbear.com/checkout/paymentmethod',
                confirm: 'https://bearstore-testsite.smartbear.com/checkout/confirm',
                completed: 'https://bearstore-testsite.smartbear.com/checkout/completed',
                details: 'https://bearstore-testsite.smartbear.com/order/details',
            }
        }
        
        const loginData = {
            username: 'jhonDoe01',
            password: 'q1w2e3'
        }
    
        cy.visit(urlData.login);
        cy.login(loginData.username, loginData.password)
        cy.url().should('eq', urlData.home)
        cy.contains('Welcome to our store.').should('be.visible');
        

        cy.selectCategory(urlData.sports);
        cy.selectProduct('GBB Epic Sub Zero Driver')
        cy.url().should('eq', urlData.product)

        cy.nextToBillingAddress();
        cy.url().should('eq', urlData.checkout.billing)

        cy.fillCompany(faker.company.name())
        cy.fillFirstName(faker.person.firstName())
        cy.fillLastName(faker.person.lastName())
        cy.fillAddress1(faker.location.streetAddress())
        cy.fillAddress2(faker.location.streetAddress())
        cy.fillCity(faker.location.city())
        cy.fillZipPostalCode(faker.location.zipCode())


        cy.selectCountry('Brazil')
        cy.selectState('Other (Non US)')
        cy.fillPhoneNumber(faker.phone.number())

        
        cy.clickNextToShippingAddress()
        cy.selectShippingAddress()


        cy.url().should('eq', urlData.checkout.shipping)
        cy.clickNextToPaymment()
        

        cy.url().should('eq', urlData.checkout.payment);
        cy.clickNextToConfirmData()

        cy.url().should('eq', urlData.checkout.confirm);
        cy.get('#termsofservice').check()
        cy.get('.btn-buy').click()


        cy.url().should('eq', urlData.checkout.completed)
        cy.finishBuy()


        cy.getOrderNumber()

        cy.showOrderDetails()
        cy.compareOrderNumberInUrl(urlData.checkout.details)

    })
})
