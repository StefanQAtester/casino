describe('Open a game and check if its showned on Recent games page', () => {

  it("open a selected game and add to Favourite and see if its visible on Favourite page", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.contains("The Tipsy Tourist").click()
    cy.wait(3000)
    cy.contains('Recent games').click()
    cy.contains("The Tipsy Tourist").should('be.visible');
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]').click();
    cy.contains("Log out").click()
   })
   
})