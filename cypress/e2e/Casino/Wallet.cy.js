describe('Open Wallet', () => {

  it("open UserMenu to see Wallet", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]').click()
    cy.contains("Wallet").click()
    cy.xpath('/html/body/div[3]/div/div/div[2]/div[1]/button').click()
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]').click()
    cy.contains("Log out").click()

  })
   it("select Wallet placed at header", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")

  })
})