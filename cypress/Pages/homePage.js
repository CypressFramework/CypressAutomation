export class homePage {


    weblocators = {

        search_input: '.form-control.input-lg',
        click_search: '.input-group-btn > .btn',  //Find the element by using all types of locator
         // healing locator get the knowledge
         //sql lite db  config in cypress
        product: 'img[title="MacBook"]',
        addtocart: 'Add to Cart',

        successMessages: 'div.alert.alert-success.alert-dismissible'


    }

    searchProduct(productName) {

        cy.get(this.weblocators.search_input).type(productName)
        cy.get(this.weblocators.click_search).click()
    }
    addToCart() {

        cy.contains(this.weblocators.addtocart).first().click()
    }

    verifySucessMessage() {
        return cy.get(this.weblocators.successMessages)
    }

}