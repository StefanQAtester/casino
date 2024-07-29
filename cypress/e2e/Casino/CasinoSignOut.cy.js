describe('Casino Sign Out', () => {

  it("signin", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]').click();
    cy.contains("Log out").click()
   })
})