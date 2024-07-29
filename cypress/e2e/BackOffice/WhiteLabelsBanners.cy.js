describe('Navigate to White Labels General', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("create new Banner", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains("Banners").click()
    cy.xpath('//*[@id="full-width-tabpanel-banners"]/div/div/div/div/div[1]/div[1]/div[2]/div').click()
    cy.get('input[type="file"]').attachFile('kyc-picture.png')
    cy.xpath('//*[@id="banner-title"]').type('Test')
    cy.xpath('//*[@id="banner-description"]').type('Auto Test')
    cy.xpath('//*[@id="banner-url"]').type('/')
    cy.xpath('//*[@id="banner-urlText"]').type('Click Test')
    cy.xpath('//*[@id="full-width-tabpanel-banners"]/div/div/div/div/div[2]/form/div/div[1]/div/div[3]/div/div/div/div').click()
    cy.contains("internal").click()
    cy.contains("Confirm").click()
  })
  it("check to see the new Banner is on Casino", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Auto Test").should('be.visible')
    
  })
  it("Edit changes on the Banner", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains("Banners").click()
    cy.xpath('//*[@id="full-width-tabpanel-banners"]/div/div/div/div/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div/div[1]').click()
    cy.xpath('//*[@id="banner-title"]').clear().type('Edited Test')
    cy.xpath('//*[@id="banner-description"]').clear().type('Auto Test Edited')
    cy.xpath('//*[@id="full-width-tabpanel-banners"]/div/div/div/div/div[2]/form/div/div[3]/button').click()
  })
  it("Check changes on the Banner by visiting the Casino", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("Edited Test").should('be.visible')
    cy.contains("Auto Test Edited").should('be.visible')
  })
  it("remove the added Banner and check if the Banner is removed from Casino", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains("Banners").click()
    cy.xpath('//*[@id="full-width-tabpanel-banners"]/div/div/div/div/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div/div[2]/button').click()
    cy.contains("Yes").click()
    cy.visit("https://chipfling.com/")
    cy.contains("Auto Test").should('not.exist')
    
  })
   
})