import "@testing-library/cypress/add-commands.js";
import "@testing-library/dom/dist/queries/label-text.js";

//describe("LoginPage", function(){
//    it("Visits login page", function(){
//        cy.visit("https://www.airtable.com/login")
//        cy.contains("create")
//    })
//})

//describe("SignUp Page", function() {
//    it("Click signup button", function() {
//        cy.visit("https://www.airtable.com/login")
//        cy.contains("create an account").click()
//                cy.url()
//               .should("include", "/signup")
//
//    })
//})

describe("SignUp Flow", function() {
    it("Interact with Form", function() {
    cy.visit("https://www.airtable.com/login")
    cy.contains("create an account").click()

    cy.url()
        .should("include", "/signup")
    cy.get(".signupInputField")

//    click name field & type
    .type("fakeemail@noemail.com")
    .should("have.value", "fakeemail@noemail.com")

//    click continue
    cy.contains("Continue").click()

//assert full name
    cy.get("#signUpForm")
    .contains("Full Name").type("Fake Name")
//    add a wait time
    .should("have.value", "Fake Name")

//assert Password
    cy.get("#signUpForm")
    .contains("Password").type("Z987654321#")
//    add a wait time
//    .should("not display for security reasons")

    })
})



//REMEMBER TO
// Consider assesibility
//Refactor to not repeat