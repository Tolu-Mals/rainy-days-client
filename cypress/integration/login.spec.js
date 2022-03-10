

describe("login", () => {
    it("should display dashboard greeting after login", async () => {
        cy.visit("/");

        const emailField = cy.findByPlaceholderText(/Your email/i);
        emailField.type("malomo.tolz@gmail.com");

        const passwordField = cy.findByPlaceholderText(/Password/i);
        passwordField.type("masternigerd#");


        const signInButton = cy.findByRole("button", { name: /Sign In/i});
        signInButton.click();

        cy.findByText(/Hello/);

    });
})