import { registerPage } from "../Pages/RegisterPage";
const registerObj= new registerPage()
import registerData from '../fixtures/registerData.json'

describe("Registering the user",()=>{

it("Register Flow",()=>{

    cy.generateRandomEmail().then((randomEmail) => {
        cy.log('Generated Email:', randomEmail);

    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterlastName(registerData.lastName)
    registerObj.enterEmail(randomEmail)                 //DOnt hardcode and dont used gmail
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.selectCheckbox()
    registerObj.clickOnContinue()
})})


})