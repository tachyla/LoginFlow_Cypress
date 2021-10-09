import "@testing-library/cypress/add-commands.js";
import "@testing-library/dom/dist/queries/label-text.js";

//REMEMBER TO
// Consider assesibility
//add error cases to these methods
//Refactor to not repeat

describe("LoginPage", function(){
    it("Visits login page", function(){
        cy.visit("https://www.airtable.com/login")
        cy.contains("create")
    })
})

describe("SignUp Page", function() {
    it("Click signup button", function() {
        cy.visit("https://www.airtable.com/login")
        cy.contains("create an account").click()
                cy.url()
               .should("include", "/signup")

    })
})

describe("SignUp Flow", function() {
    it.only("Interact with Form", function() {
    cy.visit("https://www.airtable.com/login")
    cy.contains("create an account").click()

    cy.url()
        .should("include", "/signup")
    cy.get(".signupInputField")

//    click name field & type
    .type("fakeremail@noemail.com")
    .should("have.value", "fakeremail@noemail.com")

//    click continue
    cy.contains("Continue").click()

//assert full name
    cy.get("#signUpForm")
    .contains("Full Name")
    .type("Fake Name")
//    add a wait time
    cy.wait(100)
    cy.get('.block > .signupInputField')
        expect("Full Name").to.exist

//    other POTENTIAL tests
//    field should not allow numbers
// should contain at least X characters

//assert Password
    cy.get("#signUpForm")
    .contains("Password").type("Z987654321#")
//    add a wait time
    cy.wait(100)

//    pick element
//    assert the state
    cy.get(".relative > input")
        assert.isNotNull("input > value")


//should contain X characters
//not be visible for security reasons

    cy.get('.flex > .rounded').click()
    cy.url()
        .contains("https://airtable.com")

//        Next Steps
//        user is logged in
//        adjust settings
//        skip
//        skip
//        Share base with collaborator by using “Invite by email” flow
//        Set the permission level as “Editor”
//        Verify that the newly collaborated user email is displayed under “Base Collaborators”
//        Verify that the collaborator has “Editor” role displayed under “Base Collaborators”

//        add to README setup instructions

/if role = "button" with text "Start a Base" exists click()
    })
})



//REMEMBER TO
// Consider assesibility
//add error cases to these methods
//Refactor to not repeat