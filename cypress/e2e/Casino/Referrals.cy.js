describe('Open Referrals', () => {

  it("open to see Referal", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]/button').click()
    cy.contains("Referrals").click()
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/div[1]/label[1]/input').type('automation')
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/div[1]/label[2]/input').type('automation')
    cy.contains('Confirm').click()
  })
   
})