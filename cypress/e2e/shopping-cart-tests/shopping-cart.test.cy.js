import { faker } from "@faker-js/faker";

describe('Carrinho de compras', () => {
   
    it('Realizar compra', () => {
        cy.visit('https://bearstore-testsite.smartbear.com/login');
        cy.get('#UsernameOrEmail').type('jhonDoe01')
        cy.get('#Password').type('q1w2e3')    
        cy.get('.btn-login').click()

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/')
        cy.contains('Welcome to our store.').should('be.visible')
        cy.contains('.art-genericname span', 'Sports').click()
        cy.url().should('eq','https://bearstore-testsite.smartbear.com/sports');


        cy.contains('.art-name span', 'GBB Epic Sub Zero Driver').click()
        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/gbb-epic-sub-zero-driver')

        cy.contains('.btn-add-to-cart span', 'Add to cart').click()
        cy.get('#offcanvas-cart.offcanvas-shadow').should('have.class', 'on');

        cy.contains('.btn-action span', 'Checkout').click()


        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/checkout/billingaddress')

        var address1 = faker.location.streetAddress();
        var address2 = faker.location.streetAddress();


        cy.get('#NewAddress_Company').type(faker.company.name())
        cy.get('#NewAddress_FirstName').type(faker.person.firstName())
        cy.get('#NewAddress_LastName').type(faker.person.lastName())
        cy.get('#NewAddress_Address1').type(address1)
        cy.get('#NewAddress_Address2').type(address2)
        cy.get('#NewAddress_City').type(faker.location.city())
        cy.get('#NewAddress_ZipPostalCode').type(faker.location.zipCode())


        cy.get('#select2-NewAddress_CountryId-container').click()

        cy.get('.select2-results__option').contains('Brazil').click()
        cy.get('#select2-NewAddress_StateProvinceId-container').click()
        cy.get('#NewAddress_PhoneNumber').type(faker.phone.number())

        cy.get('.new-address-next-step-button').click()


        cy.get('.card.card-body.address-list-item')           // pega todos os cards
            .contains('.address', 'BRAZIL')                    // encontra o que contém o endereço desejado
            .parents('.card.card-body.address-list-item')       // sobe até o container do card
            .find('.select-shipping-address-button')            // pega o botão dentro dele
            .click()  


        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/checkout/shippingmethod')
        cy.get('.shipping-method-next-step-button').click()
        

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/checkout/paymentmethod');
        cy.get('.payment-method-next-step-button').click()

        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/checkout/confirm');
        cy.get('#termsofservice').check()
        cy.get('.btn-buy').click()


        cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/checkout/completed')
        cy.get('h1.heading-title.font-weight-light')
        .should('contain.text', 'Your order has been received')


        cy.get('.body.fs-h5 a strong')  
            .invoke('text')              
            .then((orderNumber) => {
            return orderNumber = orderNumber.trim();
        }).as('orderNumber');


        cy.contains('a.btn.btn-warning', 'Order details')
        .click()

        cy.get('@orderNumber').then((on) => {
            cy.url().should('eq', `https://bearstore-testsite.smartbear.com/order/details/${on}`)
        })
    })
})
