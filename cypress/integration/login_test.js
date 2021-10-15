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
    .type("fake45email@noemail.com")
    .should("have.value", "fake45email@noemail.com")
//    click continue
    cy.contains("Continue").click()

//assert full name
    cy.get("#signUpForm")
    .contains("Full Name")
    .type("Fake Name")
//    add a wait time
    cy.wait(100)
    cy.get(".block > .signupInputField")
        expect("Full Name").to.exist

//    other POTENTIAL tests
//    field should not allow numbers
// should contain at least X characters

//assert Password
    cy.get("#signUpForm")
    .contains("Password").type("Z987654321#")
//    add a wait time
    cy.wait(100)
    cy.get(".relative > input")
        assert.isNotNull("input > value")

//    other POTENTIAL tests
//should contain X characters
//not be visible for security reasons

    cy.get('.flex > .rounded').click()
    cy.url().should("include", "https://www.airtable.com")


//        Share base with collaborator by using “Invite by email” flow
//        Get (Sign In identifier)
//        Click (Sign In button)
          cy.get('.css-10n548d').click()

//        Interact with form to input email
//        Interact with form to input password
          cy.get(":nth-child(1) > .signupInputField").type("fake45email@noemail.com")
          cy.get(":nth-child(2) > .signupInputField").type("Z987654321#")

//        Click Login button
          cy.get(".py1-and-half").click()

//      Validate user is logged in

          //Click share button
          cy.get(".justify-end > :nth-child(1) > .pointer").click()

          //Share by email is selected by default
          //Interact with Input text field Should Exist
          cy.get("span.flex > .white > .flex").type("EmailInvitedUser@noemail.com")

          //Click Creator dropdown
          cy.get(".flex.flex-none > .selectMenu > .focus-container > .items-center > .flex-auto").click()

          //Select Editor permission
          cy.get(".hdropdown > :nth-child(3) > :nth-child(1)").click()

          //Click send invite button
          cy.get('[style="width: 112px;"] > .blue').click()
          cy.wait(500)

          //Validate new user displays
          //.contains("This workspace has 2 collaborators.")
          cy.get(".overflow-auto")
            expect(".overflow-auto > :nth-child(2) > :nth-child(5)").to.exist
            expect(".overflow-auto > :nth-child(2) > :nth-child(4)").to.exist

          cy.get(".overflow-auto > :nth-child(2) > :nth-child(4) > :nth-child(3) > :nth-child(1) > .selectMenu > .focus-container > .items-center")
            expect("Editor")

//        Create base
//        skip
//        skip
//        Validate Base
//        add to README setup instructions
    })
})



//REMEMBER TO
// Consider assesibility
//add error cases to these methods
//Refactor to not repeat