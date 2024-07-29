describe('Navigate to Analytics', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("navigate to analytics, financial", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.contains("Analytics").click()
    cy.xpath('//*[@id="root"]/div/nav/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[2]/div/ul/div[4]/div/div/ul/a/div').click()
  })
   
})