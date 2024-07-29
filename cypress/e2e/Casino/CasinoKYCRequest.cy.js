describe('KYCRequest', () => {

  it("send a kyc request", () => {
    cy.visit("https://chipfling.com/")
    cy.wait(3000)

    
    
    cy.contains("Sign in").click()
    cy.get('[placeholder="Enter email or username"]').type("jigsaw.stefan@gmail.com")
    cy.get('[placeholder="Enter your password"]').type("Password123!{enter}")
    cy.xpath('/html/body/div[1]/div[2]/div/div[2]/button').click()
    cy.contains("Profile").click()
    cy.contains("Verification").click()
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/label[1]/input').type("Automation")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/label[2]/input').type("Test")
    cy.contains("Select your gender").click()
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/div[1]/label/div[3]/div[1]').click()
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/div[2]/label/div[2]/input').type("Serbia")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/label[6]/input').type("Europe")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/label[7]/input').type("Belgrade")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/label[8]/input').type("1234")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/label[9]/input').type("TestAddress")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/label[10]/input').type("QATester")
    cy.xpath('/html/body/div[2]/div[2]/div[1]/div/main/div/form/div[3]/label[1]/div[2]/div').click()
    cy.get('input[type="file"]').attachFile('kyc-picture.png')
  })
   
})


/*cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[3]/div[3]/div/div[1]/div').click()
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[4]/div[2]').click()
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[4]/div[3]/div/div[1]/div').click()
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[6]/div[2]/div').click()
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[6]/div[3]/div/div[28]/div').click()
cy.get('[placeholder="Select country"]').type("Serbia").xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[7]/div[3]/div/div/div/div').click()
cy.xpath('/html/body/div[1]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[8]/input').click().type("Europe")
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[9]/input').type("Belgrade")
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[10]/input').type("123")
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[11]/input').type("Address123")
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[2]/div[12]/input').type("Automation Tester")
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[3]/div[2]/div[2]').click()
cy.get('input[type="file"]').attachFile('kyc-picture.png')
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[3]/div[3]/div[2]/div').click()
cy.get('input[type="file"]').attachFile('kyc-picture.png')
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[4]/div[2]/div[2]/div').click()
cy.get('input[type="file"]').attachFile('kyc-picture.png')
cy.xpath('//*[@id="root"]/div/div/div[2]/div[3]/div/div[1]/div/div[3]/div/div/div[5]/div[2]/div[2]/div').click()
cy.get('input[type="file"]').attachFile('kyc-picture.png')
cy.wait(3000)
cy.contains("Submit Verification").click()*/