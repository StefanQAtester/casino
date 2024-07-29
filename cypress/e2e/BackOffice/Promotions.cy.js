describe('Navigate to Promotions', () => {
  beforeEach(() => {
    // Set the viewport size before each test
    cy.viewport(1400, 720); // Set viewport width to 1280px and height to 720px
  });

  it("navigate to promotions", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.contains("Promotions").click()
  })
  it("Create a new Leaderboard Promotion", () => {
    cy.visit("https://backoffice-eu.chipfling.com/")
    cy.xpath('//*[@id="email-login"]').type('simkesimke@gmail.com')
    cy.xpath('//*[@id="-password-login"]').type('Password123!')
    cy.xpath('//*[@id=":r0:"]').click()
    cy.xpath('//*[@id="root"]/div[1]/header/div/button').click()
    cy.contains("Promotions").click()
    cy.contains("New promotion").click()
    cy.contains("Select promotion type").click()
    cy.contains("LEADERBOARD").click() 
    //cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[1]/form/div/div/div[2]/div/div[2]/div/div/div').type("Test Leaderboard")
    //cy.xpath('//*[@id="root"]/div/main/div[2]/div[1]/div[1]/form/div/div/div[2]/div/div[3]/div/div/div').type("This is a test")
    //cy.contains("No Brands Selected").click()
    //cy.xpath("//li[@id='multiple-limit-tags-option-0']").click()
    
  })
   
})