describe("Login", () => {
  let login;

  before(() => {
    // Carregar os dados do fixture antes de executar os testes
    cy.fixture("login").then((data) => {
      login = data;
    });
  });

  it("Efetuar Login com credenciais válidas", () => {
    const { username, password } = login.success; // Credenciais válidas da fixture
    cy.login(username, password);
    cy.get("[data-test=title]").should(
      "have.text",
      "Products");
    cy.url().should(
      "include",
      "/inventory.html");
  });

  it("Efetuar Login com credenciais inválidas", () => {
    const { username, password } = login.invalid_or_empty; // Credenciais inválidas da fixture
    cy.login(username, password);
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Efetuar Login com username vazio", () => {
    const { password } = login.success; // Usar apenas o password válido
    cy.login("", password);
    cy.get(".error-message-container").should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });

  it("Efetuar Login com password vazio", () => {
    const { username } = login.success; // Usar apenas o username válido
    cy.login(username, "");
    cy.get(".error-message-container").should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });
});
