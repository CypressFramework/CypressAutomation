import { homePage } from "/home/neosoft/AutomationTesting/CypressFramework/CypressAutomation/cypress/Pages/homePage.js"
const homePageObj = new homePage()
import testData from '/home/neosoft/AutomationTesting/CypressFramework/CypressAutomation/cypress/fixtures/testData.json'


describe(' test automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
       })
})