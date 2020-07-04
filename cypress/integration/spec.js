describe("Today's date", () => {
  it('works', () => {
    // codesandbox https://codesandbox.io/s/funny-buck-d61ko?file=/index.html
    cy.visit('https://d61ko.csb.app/')

    cy.get('#dateNow').should('contain', humanDate(Date.now()))
  })
})

describe('Override today to Feb 10', () => {
  beforeEach(() => {
    cy.clock(Date.UTC(2020, 1, 10), ['Date'])
  })

  it('works', () => {
    cy.visit('https://d61ko.csb.app/')

    // Some machines fail here and output Feb 09
    cy.get('#dateNow').should('contain', 'Feb 10')
  })
})

function humanDate(datems) {
  return new Date(datems).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}