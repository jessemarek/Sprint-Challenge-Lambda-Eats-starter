import { v4 as uuid } from 'uuid'

const name = uuid().slice(0, 6)
const specialText = uuid()

describe('MVP Testing', () => {
    //Navigate to site
    it('Can navigate to site', () => {

        cy.visit('')
        cy.url().should('contain', 'localhost')
    })
    //Click btn to get to order form
    it('Can click button to order pizza', () => {
        cy.get('button[data-cy="order-btn"]')
            .click()
    })
    //Type in the name input
    it('Can type in the Name input', () => {
        cy.get('input[data-cy="name"]')
            .type(name)
            .should('have.value', name)
    })
    //Select size from dropdown
    it('Can select a size from dropdown', () =>{
        cy.get('select[data-cy="size"]')
          //Select small
          .select('small')
          .should('have.value', 'small')
          //Select medium
          .select('medium')
          .should('have.value', 'medium')
          //Select large
          .select('large')
          .should('have.value', 'large')
          //Select extra large
          .select('extra')
          .should('have.value', 'extra')
    })
    //Select Radio btns for sauce
    it('Can select a sauce from the radio buttons', () =>{
        cy.get('input[data-cy="garlic"]')
          .click()

          cy.get('input[data-cy="bbq"]')
          .click()

          cy.get('input[data-cy="spinach"]')
          .click()

          cy.get('input[data-cy="original"]')
          .click()
    })
    //Select the toppings checkboxes
    it('Can select multiple toppings', () => {

        cy.get('input[data-cy="pepperoni"]')
            .check()

        cy.get('input[data-cy="sausage"]')
            .check()

        cy.get('input[data-cy="cBacon"]')
            .check()

        cy.get('input[data-cy="onions"]')
            .check()

        cy.get('input[data-cy="olives"]')
            .check()

        cy.get('input[data-cy="pineapple"]')
            .check()
    })
    //Type special instructions
    it('Can type in the textarea with special instructions', () =>{
        cy.get('textarea[data-cy="special"]')
          .type(specialText)
          .should('have.value', specialText)
    })
    //Submit the order
    it('Can submit the order form', () =>{
        cy.get('button[data-cy="submit"]')
          .click()
    })
})