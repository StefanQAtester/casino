describe('Navigate to White Labels Black listed Countries to ban a country and check on the Casino website you are banned then erase the blacklist', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("open BackOffice and navigate to Blacklisted Countries to ban Serbia", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('Blacklisted').click()
    cy.xpath('//*[@id="full-width-tabpanel-blacklistedCountries"]/div/div/div/div/div[1]/div/div[1]/div/div').type("Serbia")
    cy.contains('Serbia').click()
    cy.contains("Save Changes").click()
  })
  it("navigate to Casino to check if the Blacklist is approved", () => {
    cy.visit("https://chipfling.com/")
    cy.contains("We're sorry, this website is not available in your region.").should('be.visible')
  })
  it("go back to BO and remove Ban from the country and see on Casino that the Ban is revoked", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('Blacklisted').click()
    cy.contains("Serbia").click()
    cy.contains("Save Changes").click()
    cy.visit("https://chipfling.com/")
    cy.contains("Sign in").should('be.visible')
  })
})