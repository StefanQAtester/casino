describe('Casino Sidebar', () => {

  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("see all Sidebar content", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Favorite games").should('be.visible')
    cy.contains("Recent games").should('be.visible')
    cy.contains("Games").should('be.visible')
    cy.xpath('/html/body/div[2]/div[1]/div[4]/div[1]').click()
    cy.contains("Live Games").should('be.visible')
    cy.contains("Slots").should('be.visible')
    cy.contains("Roulette").should('be.visible')
    cy.contains("Blackjack").should('be.visible')
    cy.contains("Baccarat").should('be.visible')
    cy.contains("Providers").should('be.visible')
    cy.contains("Providers").click()
    cy.contains("Providers").scrollIntoView()
    cy.contains("AvatarUX").should('be.visible')
    cy.contains("Live88").should('be.visible')
    cy.contains("OneTouch").scrollIntoView().should('be.visible')
    cy.contains("Betsoft").should('be.visible')
    cy.contains("7Mojos Live").scrollIntoView().should('be.visible')
   })
   
})