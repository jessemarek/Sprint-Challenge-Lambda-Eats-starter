import { v4 as uuid } from 'uuid'

const name = uuid().slice(0, 6)

describe('MVP Testing', () =>{
    it('Can navigate to site', () =>{
        
        cy.visit('')
        cy.url().should('contain', 'localhost')
    })

    it('Can click button to order pizza', () =>{
        cy.get('button[data-cy="order-btn"]')
          .click()
    })

    it('Can type in the Name input', () =>{
        cy.get('input[data-cy="name"]')
          .type(name)
          .should('have.value', name)
    })
})