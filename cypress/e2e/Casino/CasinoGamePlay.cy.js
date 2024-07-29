describe('Casino Game Play', () => {

  it("open a selected game", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.contains("Juicy7 - 3 reels").click()
   })
   
})