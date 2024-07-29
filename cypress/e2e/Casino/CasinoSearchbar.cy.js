describe('Casino Sign In', () => {

  it("signin", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}") 
    cy.get('[placeholder="Search for games..."]').type("Slot")
  })
})