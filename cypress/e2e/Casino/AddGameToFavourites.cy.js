describe('Add game to Favourite', () => {

  it("open a selected game and add to Favourite and see if its visible on Favourite page", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.contains("Juicy7 - 3 reels").click()
    cy.contains("Add to").click()
    cy.xpath('/html/body/div[2]/div[1]/div[3]/button[1]').click()
    cy.contains("Juicy7 - 3 reels").should('be.visible');
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]').click();
    cy.contains("Log out").click()
   })
   
})