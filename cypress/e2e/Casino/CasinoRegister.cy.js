describe('Casino Register', () => {

  it("register", () => {
    cy.visit("https://chipfling.com/")
    
    cy.contains("Register").click()

    cy.get('[placeholder="Enter username"]').type("StefanTest")

    cy.get('[placeholder="Enter email"]').type("jigsaw.stefan@gmail.com")

    cy.xpath("/html/body/div[3]/div/div/div[2]/form/label[3]/input").type("Password123!")

    cy.xpath('/html/body/div[3]/div/div/div[2]/form/label[4]/input').type("Password123!")

    cy.contains("Sign up").click()

  })
})