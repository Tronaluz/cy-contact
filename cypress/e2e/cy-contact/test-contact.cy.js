/// <reference types="cypress" />

describe('Testes de Site', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    ///Inclusao
    it('Deve incluir um contato', () => {
        cy.get('input[type="text"]').type('Teste Primeiro')
        cy.get('input[type="email"]').type('teste_teste@msn.com')
        cy.get('input[type="tel"]').type('55 8986565')
        cy.contains("Adicionar").click()
        cy.screenshot("teste-inclusao")
    })



///Alteracao
    it('Deve alterar um contato', () => {
        cy.get(":nth-child(2) > .sc-gueYoa > .edit").click()
        cy.get('input[type="text"]').clear().type('Teste Alterado')
        cy.get('input[type="email"]').clear().type('Teste_Alterado@hotmail.com')
        cy.get('input[type="tel"]').clear().type('44 8989899')
        cy.get(".alterar").click()
        cy.screenshot("teste-Alteracao")
    })


///Remocao de um contato
    it('Deve deletar um contato', () => {
        cy.get(":nth-child(3) > .sc-gueYoa > .delete").click()
        cy.screenshot("teste-deletar")
    })
})

