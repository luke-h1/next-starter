describe('index page', () => { 
    context('1080p resolution', () => { 
        beforeEach(() => { 
            cy.viewport(1920, 1080)
        })
        before(() => { 
            cy.visit('/')
            cy.get('div[id="__next"]').should('exist');
        })
        it('should render correct text', () => { 
            cy.contains('Next js typescript minimal starter')
        })
    })
})