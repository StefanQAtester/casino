describe('Navigate to White Labels General', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("open BackOffice", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[2]/div/table/tbody/tr[1]/td[7]/div/div/button[1]').click()
    cy.contains('Sidebar').click()
    cy.contains("Add Category").click()
    cy.xpath('//*[@id="full-width-tabpanel-sidebar"]/div/div/div/form/div[1]/div[3]/div[2]/div[3]/div[1]/div[2]/svg[1]').click()
    cy.xpath('//*[@id="full-width-tabpanel-sidebar"]/div/div/div/form/div[2]/div/div[1]/div[1]/div/li/div').attachFile('kyc-picture.png')
    cy.xpath('//*[@id="name"]').type("Automation")
  })
   
})