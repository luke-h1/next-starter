describe('index page', () => { 
    context('1080p resolution', () => { 
        beforeEach(() => { 
            cy.viewport(1920, 1080)
            cy.get('div[id="__next"]').should('exist');

        })
        before(() => {
            cy.visit('/about')
        })
        it('should render correct heading', () => { 
            cy.contains('About this starter') 
        })
        it('should render correct sub heading', () => { 
            cy.contains('Simple starter aimed at providing the barebones to start an awesome project.') 
        })
    })
})