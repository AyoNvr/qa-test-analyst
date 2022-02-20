/// <reference types="cypress" />


// checkout validation 
describe('Shopping cart Validation',() => {
    
    before(() => {
        cy.log('Starting Test..')
    })
    
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    
    it('Open Product Details Page',function(){
        cy.visit("/google-nest-cam-outdoor-indoor-battery-1-pack.html")
        
    })

    it('Click Add to Cart',function(){
        cy.get("#btn-add-to-cart", {timeout: 2000}).click()

    })

    it('View Shopping cart', function(){
        cy.get("#btn_checkout", {timeout: 2000}).click()
    })

    it('Verify product added to cart', function(){
        cy.get('.sku', {timeout: 20000})
        cy.get('.sku').should('contain','GA01317-AU')
        
    })
    
})

 

