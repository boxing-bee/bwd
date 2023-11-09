describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('p')
    .contains('I had a great time working out with you!');
  })
  
  })
