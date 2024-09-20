import { registerPage } from "../Pages/RegisterPage";
const registerObj= new registerPage()
import registerData from '/home/neosoft/AutomationTesting/CypressFramework/CypressAutomation/cypress/fixtures/registerData.json'

describe("Registering the user",()=>{

it("Register Flow",()=>{

    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterlastName(registerData.lastName)
    registerObj.enterEmail(Math.random().toString(5).substring(2)+"@gmail.com")
    registerObj.enterTelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.selectCheckbox()
    registerObj.clickOnContinue()






})


})