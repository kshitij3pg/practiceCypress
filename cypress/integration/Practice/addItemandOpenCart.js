/// <reference types="cypress"/>
describe('Open Amazon and add item and open the cart',()=>{
    it('Open Amazon',()=>{
        cy.visit('https://www.amazon.com/')
    })
    it('Select a category',()=>{
        cy.contains('Chairs').click();
    })
    it('Select an item',()=>{
        cy.get("[alt='Sponsored Ad - Dowinx Gaming Chair with Pocket Spring Cushion, Ergonomic Computer Chair High Back, Reclining Massage Game ...']").click();
    })
    it('Add item to the cart',()=>{
        cy.contains('Add all three to Cart').click({force: true});
    })
    it('Go to cart',()=>{
        cy.get("a[class='a-button-text']").click();
    })

})