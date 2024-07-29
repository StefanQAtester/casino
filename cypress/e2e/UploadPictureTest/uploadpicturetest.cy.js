describe('Imgur File Upload Test', () => {
  it('should upload a picture file to Imgur', () => {
    // Visit the Imgur upload page
    cy.visit('https://imgur.com/upload');

    // Path to the file in the fixtures folder
    const filePath = 'kyc-picture.png';

    // Select the file input and attach the file
    cy.get('input[type="file"]').attachFile(filePath);

    // Optionally, you can add assertions to verify the upload
    //cy.contains('Processing your image').should('be.visible');
  });
});