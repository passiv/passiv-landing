describe('Home Page works', () => {
    beforeEach( () => {
    cy.visit('localhost:3000')

    })

    it('Email box works', () => {
    const typedtext = 'a.suds@unb.ca'
    cy.get('[name=email]')
    .type(typedtext)
    .should('have.value', typedtext)
    cy.get('[type=submit]')
    .click()
    })

    it('Blog button works', () => {
    cy.contains('Blog')
    .should('have.attr', 'href', '/blog/')
    .click()

    })
    it('About button works', () => {
    cy.contains('About')
    .should('have.attr', 'href', '/about/')

    })
    it('Pricing button works', () => {
    cy.contains('Pricing')
    .should('have.attr', 'href', '/pricing/')

    })
    it('Security button works', () => {
    cy.contains('Security')
    .should('have.attr', 'href', '/security/')
    .click()

    })
    it('Tutorials button works', () => {
    cy.contains('Tutorials')
    .should('have.attr', 'href', '/tutorials/')
    .click()

    })
    it('Login button works', () => {
    cy.contains('Log in')
    .should('have.attr', 'href', '/app/login/')
    .click()

    })
    it('Sign up button works', () => {
    cy.contains('Sign Up')
    .should('have.attr', 'href', '/app/register/')
    .click()


    })
})
