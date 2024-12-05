# DESAFIO TÉCNICO - ANALISTA DE TESTES/QA
![banner-dot-desafio-tecnico-qa](https://github.com/user-attachments/assets/98173ee6-e646-4c4f-bfa7-0e0ec223334b)


## DESAFIO

Este repositório contém a entrega do desafio técnico, demonstrando habilidades de planejamento de testes, automação de testes utilizando o framework Cypress entre outras práticas de qualidade de software.

### ETAPAS DO PROJETO
  - História do usuário;
  - Critérios de aceite;
  - Casos de testes;
  - Estimativa do tempo de teste e demonstração do cálculo;
  - Fluxos automatizados com Cypress;
  - Pipeline com GitHub Actions para a execução dos testes (CI/CD).

<br />

### HISTÓRIA DO USUÁRIO
  - **Como** um usuário regular do sistema,
  - **Eu quero** fazer login na aplicação,
  - **Para** acessar e validar as informações do inventário da Swag Labs.

### CRITÉRIOS DE ACEITE
  - O sistema deve autenticar o usuário com credenciais válidas (username: `standard_user`, password: `secret_sauce`) e exibindo a página de `Produtos` com a url `/inventory.html` da aplicação Swag Labs;
  - O sistema deve exibir uma mensagem de erro para credenciais inválidas e se o campo de *username* ou *password* estiverem vazios:
    - Credenciais inválidas: `Epic sadface: Username and password do not match any user in this service`    
    - Username vazio: `Epic sadface: Username is required`;
    - Password vazio: `Epic sadface: Password is required`.

### CASOS DE TESTE
**1.  Efetuar Login com credenciais válidas**
  - Pré-condição: A página de login deve estar carregada.
    - Passo: Inserir username e password, e clicar no botão Login.
    - Resultado Esperado: O usuário é autenticado no sistema exibindo a página de Produtos.

**2.  Efetuar Login com credenciais inválidas**
  - Pré-condição: A página de login está carregada.
    - Passo: Inserir username danilo e password 123mudar, e clicar no botão Login.
    - Resultado Esperado: O sistema exibe a mensagem de erro "Epic sadface: Username and password do not match any user in this service"

**3.  Efetuar Login com username/password vazio**
  - Pré-condição: A página de login está carregada.
    - Passo: Deixar o campo de Username ou Password vazio, e clicar no botão Login.
    - Resultado Esperado: O sistema exibe a mensagem de erro respectiva ao campo não preenchido "Epic sadface: Username is required" ou "Epic sadface: Password is required"

<br />  

### ESTIMATIVA DE TESTE
Escolhi usar o modelo Fibonacci porque ele é bem popular, principalmente em metodologias ágeis como o Scrum. Ele funciona com uma sequência de números da série Fibonacci (1, 2, 3, 5, 8, 13, 21...) para dar uma pontuação para cada tarefa ou história, levando em conta a complexidade, o esforço ou o tempo que vai levar para terminar, conforme a tabela abaixo:

| **Caso de Teste**                                                           | **Pontos Fibonacci** | **Tempo Estimado** |
|-----------------------------------------------------------------------------|----------------------|--------------------|
| Efetuar Login com credenciais válidas                                         | 2                    | 20 minutos         |
| Efetuar Login com credenciais inválidas                                       | 2                    | 20 minutos         |
| Efetuar Login com username vazio                                              | 1                    | 10 minutos         |
| Efetuar Login com password vazio                                              | 1                    | 10 minutos         |

***Tempo Total Estimado: 1 hora***

<br />

## AUTOMAÇÃO E GITHUB ACTIONS
Decidi automatizar todo o processo de login porque, convenhamos, um login funcional é o começo de tudo (ou pelo menos evita aquele "Epic sadface" constrangedor 😱) ...além disso, aproveitei pra aplicar funções legais do Cypress, como Cypress Commands e Fixtures, deixando tudo mais organizado e prático e com isso, qualquer erro, seja humano ou do sistema, vai ser capturado rapidinho, garantindo que o usuário tenha a melhor experiência! 

Também configurei uma pipeline no `GitHub Actions` para executar automaticamente os testes **em cada push no repositório na branch main ou para serem executados manualmente**, porque o DEV merece a magia de rodar testes sem precisar fazer aquele "pushzinho" na branch 😆, garantindo feedback rápido sobre o fluxo e facilitando a integração contínua com segurança e eficiência:

  - GitHub Actions - Workflow: [Cypress Tests](https://github.com/eudanilobarbosa/desafio-tecnico-dot/actions/workflows/main.yml)
	- Push on branch `main` ou para serem executados `manualmente`;
	- Ubuntu (cypress/browsers:node18.12.0-chrome103-ff107);
		- Cypress (código e dependencias):
			- Execução Multi-browser:
				- Electrum (em caso de sucesso, executa nos demais browsers abaixo em paralelo);
					- Chrome;
					- Firefox.

<br />

## OBRIGADO!
### DEZ/2024 🎄🎅🎆
 


  
  

  
