import "@testing-library/cypress/add-commands.js";
import "@testing-library/dom/dist/queries/label-text.js";

describe("SignUp Flow", function() {
    it("Interact with Form", function() {
    cy.visit("https://www.airtable.com/login")
    cy.contains("create an account").click()

    cy.url()
        .should("include", "/signup")
    cy.get(".signupInputField")

//  click name field & type then click continue
    .type("fakeinformation@noemail.com")
    .should("have.value", "fakeinformation@noemail.com")
    cy.contains("Continue").click()

//  assert full name
    cy.get("#signUpForm")
    .contains("Full Name")
    .type("Fake Name")
//  wait for input to populate
    cy.wait(100)
    cy.get(".block > .signupInputField")
        expect("Full Name").to.exist

//  assert Password
    cy.get("#signUpForm")
    .contains("Password").type("Z987654321#")
//   wait for input to populate
    cy.wait(100)
    cy.get(".relative > input")
        assert.isNotNull("input > value")

    cy.get(".flex > .rounded").click()
    cy.url().should("include", "https://www.airtable.com")

//        Share base with collaborator by using “Invite by email” flow
          cy.get(".css-10n548d").click()

//        Interact with form to input email
//        Interact with form to input password
          cy.get(":nth-child(1) > .signupInputField").type("fakeinformation@noemail.com")
          cy.get(":nth-child(2) > .signupInputField").type("Z987654321#")

//        Click Login button
          cy.get(".py1-and-half").click()

//        Select "Create base" & click base element btn
          cy.get(":nth-child(1) > .flex-auto > .mb3 > .height-full > .mb1").click()
          cy.wait(100)

//        select BaseNameInputField & type name
          cy.get(".p2 > .width-full > .flex-auto").type("SampleBaseName")
//        Assert base, base name displays
          cy.get("#appTopBarHomeButton").click()
          cy.get(".flex-wrap > :nth-child(1) > :nth-child(1) > .hover-container").contains("SampleBaseName")

//        Share with collaborator button
          cy.get(".justify-end > :nth-child(1) > .pointer").click()

          //Interact with Input text field Should Exist
          cy.get("span.flex > .white > .flex").type("EmailInvitedUser@noemail.com")

          //Click Creator dropdown
          cy.get(".flex.flex-none > .selectMenu > .focus-container > .items-center > .flex-auto").click()

          //Select Editor permission
          cy.get(".hdropdown > :nth-child(3) > :nth-child(1)").click()

          //Click send invite button
          cy.get("[style='width: 112px;'] > .blue").click()
          cy.wait(500)

//        Validate new user displays
          cy.get(".overflow-auto")
            expect(".overflow-auto > :nth-child(2) > :nth-child(5)").to.exist
            expect(".overflow-auto > :nth-child(2) > :nth-child(4)").to.exist
          cy.get(".overflow-auto > :nth-child(2) > :nth-child(4) > :nth-child(3) > :nth-child(1) > .selectMenu > .focus-container > .items-center")
            expect("Editor")

//            close window ending test
          cy.get(".rounded-big > .top-0").click()
    })
})
