describe('Change Password', () => {

  it("change password", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]/button').click()
    cy.contains("Profile").click()
    cy.contains("Security").click()
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/div[1]/form/label[1]/input').type("Password123!")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/div[1]/form/label[2]/input').type("Password1234!")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/div[1]/form/label[3]/input').type("Password1234!")
    cy.contains("Confirm change").click()
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]').click();
    cy.contains("Log out").click()
  })
  it("reset password to previous", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password1234!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]/button').click()
    cy.contains("Profile").click()
    cy.contains("Security").click()
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/div[1]/form/label[1]/input').type("Password1234!")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/div[1]/form/label[2]/input').type("Password123!")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/div[1]/form/label[3]/input').type("Password123!")
    cy.contains("Confirm change").click()
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]').click();
    cy.contains("Log out").click()
  })
   
})