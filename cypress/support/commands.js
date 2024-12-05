// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.visit("/");

  // Alias para os campos corretos
  cy.get("[data-test=username]").as("username");
  cy.get("[data-test=password]").as("password");

  // Preenchimento condicional
  username
    ? cy.get("@username").clear().type(username)
    : cy.log("username empty");

  password
    ? cy.get("@password").clear().type(password)
    : cy.log("password empty");

  // Clicar no botão de login
  cy.get(".submit-button").click();
});
