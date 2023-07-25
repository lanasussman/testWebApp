/// <reference types="cypress" />

describe('e-commerce website testing', () => {

    beforeEach(() => {
        cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
    })

    it('Verify empty card has 0 balance', () => {
        cy.get('button.sc-1h98xa9-0.gFkyvN').click()
        cy.get('p.sc-1h98xa9-9.jzywDV').should('have.text', '$ 0.00')
    })

    it('Verify message in empty card', () => {
        cy.get('button.sc-1h98xa9-0.gFkyvN').click()
        cy.get('p.sc-7th5t8-1.hqDkK').should('contain', 'Add some products in the cart')
    })

    it('Verify user can Add to cart and checkout', () => {
        cy.get('div.dwOYCh > button').click()
        cy.contains('Checkout').click()
        cy.on('window:alert', (alertText) => {
            // Perform your assertion on the alertText
            expect(alertText).to.equal('Checkout - Subtotal: $ 10.90')
        })
    })

    it('Verify user can Add and Remove item from the cart', () => {
        cy.get('div.dwOYCh > button').click()
        cy.get('button[title="remove product from cart"]').click()
        cy.get('div.sc-1h98xa9-3.VLMSP').should('have.text', '0')
    })
})