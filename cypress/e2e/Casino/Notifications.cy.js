describe('Open Notifications', () => {

  it("open to see Notifications", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("qateststefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath("(//button[@class='style_primary__85_08 style_circle__a7OsD style_normal__qdiy1 style_flat___Ud9E '])[1]").click()
  })
   
})