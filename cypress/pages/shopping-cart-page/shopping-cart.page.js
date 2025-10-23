Cypress.Commands.add('login', (username, password) => {
  cy.get('#UsernameOrEmail').type(username);
  cy.get('#Password').type(password);    
  cy.get('.btn-login').click();
  cy.url().should('eq', 'https://bearstore-testsite.smartbear.com/');
  cy.contains('Welcome to our store.').should('be.visible');
});


Cypress.Commands.add('selectCategory', (urlCategory) => {
    cy.contains('.art-genericname span', 'Sports').click()
    cy.url().should('eq',urlCategory);
})

Cypress.Commands.add('selectProduct', (productName) => {
    cy.contains('.art-name span', productName).click()
})


Cypress.Commands.add('nextToBillingAddress', () => {
    cy.contains('.btn-add-to-cart span', 'Add to cart').click()
    cy.get('#offcanvas-cart.offcanvas-shadow').should('have.class', 'on');
    cy.contains('.btn-action span', 'Checkout').click()
})

// Campos de texto
Cypress.Commands.add('fillCompany', (company) => {
  cy.get('#NewAddress_Company').clear().type(company);
});

Cypress.Commands.add('fillFirstName', (firstName) => {
  cy.get('#NewAddress_FirstName').clear().type(firstName);
});

Cypress.Commands.add('fillLastName', (lastName) => {
  cy.get('#NewAddress_LastName').clear().type(lastName);
});

Cypress.Commands.add('fillAddress1', (address1) => {
  cy.get('#NewAddress_Address1').clear().type(address1);
});

Cypress.Commands.add('fillAddress2', (address2) => {
  cy.get('#NewAddress_Address2').clear().type(address2);
});

Cypress.Commands.add('fillCity', (city) => {
  cy.get('#NewAddress_City').clear().type(city);
});

Cypress.Commands.add('fillZipPostalCode', (zip) => {
  cy.get('#NewAddress_ZipPostalCode').clear().type(zip);
});

Cypress.Commands.add('fillPhoneNumber', (phone) => {
  cy.get('#NewAddress_PhoneNumber').clear().type(phone);
});

// Dropdowns
Cypress.Commands.add('selectCountry', (countryName) => {
  cy.get('#select2-NewAddress_CountryId-container').click();
  cy.get('.select2-results__option').contains(countryName).click();
});

Cypress.Commands.add('selectState', (stateName) => {
  cy.get('#select2-NewAddress_StateProvinceId-container').click();
  cy.get('.select2-results__option').contains(stateName).click();
});

Cypress.Commands.add('clickNextToShippingAddress', () => {
    cy.get('.new-address-next-step-button').click()
})

Cypress.Commands.add('selectShippingAddress', () => {
    cy.get('.card.card-body.address-list-item')         
        .contains('.address', 'BRAZIL')                   
        .parents('.card.card-body.address-list-item')     
        .find('.select-shipping-address-button')          
        .click()  
})

Cypress.Commands.add('clickNextToPaymment', () => {
    cy.get('.shipping-method-next-step-button').click();
})

Cypress.Commands.add('clickNextToConfirmData', () => {
    cy.get('.payment-method-next-step-button').click();
})

Cypress.Commands.add('finishBuy', () => {
    cy.get('h1.heading-title.font-weight-light')
        .should('contain.text', 'Your order has been received')
})

Cypress.Commands.add('getOrderNumber', () => {
    cy.get('.body.fs-h5 a strong')  
        .invoke('text')              
        .then((orderNumber) => {
        return orderNumber = orderNumber.trim();
        }).as('orderNumber');
})


Cypress.Commands.add('showOrderDetails', () => {
    cy.contains('a.btn.btn-warning', 'Order details')
        .click()
})

Cypress.Commands.add('compareOrderNumberInUrl', (url) => {
    cy.get('@orderNumber').then((on) => {
        cy.url().should('eq', `${url}/${on}`)
    })
})