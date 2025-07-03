# Questionário - TPI/TPE-5

## Questão 1

**Enunciado:**  
Por que é importante desenvolver a mentalidade correta ao testar a segurança de aplicações web?

**Alternativas:**  
a) Porque os testes de segurança devem seguir os mesmos cenários dos testes funcionais.  
b) Porque a maioria das ferramentas automatizadas cobre todos os cenários possíveis de ataque.  
c) Porque é necessário pensar como um atacante e explorar comportamentos inesperados que não foram considerados pelos desenvolvedores.  
d) Porque os testes de segurança devem priorizar a validação dos fluxos de uso previstos pelo negócio.

**Resposta correta:** c

---

## Questão 2

**Enunciado:**  
Qual das alternativas melhor descreve uma vantagem das inspeções manuais no processo de teste de segurança?

**Alternativas:**  
a) Podem ser executadas em curto espaço de tempo, principalmente se houver material de apoio disponível.  
b) Permitem que a verificação seja realizada em estágios finais do SDLC.  
c) Podem avaliar políticas, habilidades e decisões de arquitetura por meio de análise de documentação e entrevistas.  
d) São recomendadas quando não há especialista em segurança disponível para a equipe.

**Resposta correta:** c

---

## Questão 3

**Enunciado:**  
Qual é o objetivo principal da modelagem de ameaças (threat modeling) no contexto de segurança de aplicações?

**Alternativas:**  
a) Avaliar riscos e antecipar ameaças para desenvolver estratégias de mitigação desde as primeiras fases do SDLC.  
b) Medir o desempenho da aplicação em cenários de ataque de DDOS.  
c) Substituir a análise de código-fonte na identificação de falhas de segurança.  
d) Testar a eficácia das ferramentas automatizadas de segurança, a partir da modelagem da aplicação.

**Resposta correta:** a

---

## Questão 4

**Enunciado:**  
Qual é uma limitação importante da revisão de código-fonte?

**Alternativas:**  
a) O código analisado pode não ser o mesmo que será implantado em produção.  
b) É um processo lento, mesmo para desenvolvedores bastante experientes.  
c) Identifica tipos de vulnerabilidades que poderiam ser detectadas por outros métodos.  
d) É realizada apenas nos estágios finais do SDLC, reduzindo sua eficácia.

**Resposta correta:** a

---

## Questão 5

**Enunciado:**  
Qual é uma vantagem do teste de penetração em aplicações web?

**Alternativas:**  
a) Permite modificar o comportamento da aplicação sem acesso ao ambiente de produção.  
b) Pode ser realizado nos estágios iniciais do SDLC, ampliando a capacidade de detecção de vulnerabilidades.  
c) Substitui a necessidade de entrevistas e análise documental para detectar vulnerabilidades.  
d) Avalia o comportamento do código realmente implantado, mesmo sem conhecer sua implementação interna.

**Resposta correta:** d

---

## Questão 6

**Enunciado:**  
Qual é uma vantagem principal da revisão manual do código-fonte para identificar problemas de segurança em aplicações web?

**Alternativas:**  
a) Permite detectar problemas de segurança que outras formas de análise, como testes de penetração, podem não identificar.  
b) Facilita a execução sistemática de testes de segurança, por ser um método caixa-preta.  
c) Elimina a necessidade de verificar a lógica de negócios e o controle de acesso.  
d) Reduz a necessidade de habilidades técnicas para identificar vulnerabilidades.

**Resposta correta:** a

---

## Questão 7

**Enunciado:**  
No processo de derivação de requisitos de segurança usando casos de uso e abuso, qual é a importância de descrever cenários negativos, como ataques de força bruta?

**Alternativas:**  
a) Para garantir que a aplicação seja capaz de fornecer respostas específicas para cada tipo de ataque identificado.  
b) Para identificar e documentar vulnerabilidades potenciais e as contramedidas necessárias para mitigar os riscos associados a ataques.  
c) Para avaliar a conformidade da aplicação com regulamentos e padrões de segurança aplicáveis.  
d) Para implementar controles de segurança que bloqueiem o acesso não autorizado antes do início do desenvolvimento.

**Resposta correta:** b

---

## Questão 8

**Enunciado:**  
A proteção de dados sensíveis, como informações pessoalmente identificáveis (PII), deve envolver a validação de qual requisito de segurança?

**Alternativas:**  
a) A análise de risco baseada no nível de sensibilidade do dado.  
b) A verificação do uso de criptografia.  
c) A verificação da conformidade com as políticas de segurança da informação da empresa.  
d) A eliminação do armazenamento de dados sensíveis.

**Resposta correta:** c

---

## Questão 9

**Enunciado:**  
Por que os requisitos de segurança baseados em risco (negativos) são mais difíceis de testar do que os requisitos funcionais (positivos)?

**Alternativas:**  
a) Porque eles sempre exigem o uso de ferramentas de fuzzing automatizado.  
b) Porque não podem ser descritos por meio de casos de uso nem validados com testes de penetração.  
c) Porque dependem exclusivamente de verificações manuais feitas após a implantação do sistema.  
d) Porque não descrevem um comportamento esperado, exigindo análise de ameaças e cenários imprevistos.

**Resposta correta:** d

---

## Questão 10

**Enunciado:**  
O que são "misuse cases" ou "abuse cases" no contexto da engenharia de requisitos de segurança?

**Alternativas:**  
a) Cenários que descrevem como um sistema pode ser maliciosamente explorado.  
b) Casos de teste automatizados para validar funcionalidades não documentadas.  
c) Casos de uso voltados para testes de desempenho em ambientes inseguros.  
d) Casos que descrevem a experiência do usuário em situações de erro.

**Resposta correta:** a

---

## Questão 11

**Enunciado:**  
Como os testes unitários de segurança contribuem para a validação de mudanças no código após a correção de vulnerabilidades?

**Alternativas:**  
a) Garantem que a nova funcionalidade foi implementada conforme as especificações do cliente.  
b) Verificam se as alterações no código mitigam a vulnerabilidade identificada e seguem os padrões de codificação segura.  
c) Permitem que o código com problemas de segurança seja incluído no build desde que esteja documentado.  
d) Avaliam o impacto das mudanças no desempenho do sistema em tempo de execução.

**Resposta correta:** b

---

## Questão 12

**Enunciado:**  
O que ocorre com um pacote no pipeline DevSecOps quando o resultado das atividades de segurança não atender aos requisitos de um checkpoint?

**Alternativas:**  
a) O pacote é automaticamente modificado para atender aos requisitos de segurança necessários.  
b) O pacote é encaminhado para uma revisão externa para verificar a conformidade com os requisitos de segurança.  
c) O pacote avança para o próximo estágio, mas com uma nota de alerta sobre os requisitos de segurança não atendidos.  
d) O pacote permanece na fase atual e não é permitido avançar para o próximo checkpoint ou estágio.

**Resposta correta:** d

---

## Questão 13

**Enunciado:**  
Qual é a abordagem recomendada para introduzir recursos de testes de segurança no pipeline de entrega para suportar DevSecOps?

**Alternativas:**  
a) Introduzir todos os recursos de testes de segurança de forma integral para garantir uma abordagem completa desde o início.  
b) Investir em ferramentas atualizadas e avançadas substituindo as ferramentas existentes para garantir uma integração eficiente.  
c) Realizar a automação de controles e atividades de segurança antes de implementar qualquer ferramenta de segurança existente.  
d) Começar com recursos de testes de segurança de alto valor e baixo impacto, como ferramentas de qualidade de código, e adicionar novos recursos gradualmente.

**Resposta correta:** d

---

## Questão 14

**Enunciado:**  
Qual é um benefício de utilizar uma suíte de testes de segurança genérica integrada ao framework de testes unitários dos desenvolvedores?

**Alternativas:**  
a) Permitir a verificação das funcionalidades de segurança tanto para requisitos positivos quanto negativos em componentes de software.  
b) Facilitar a criação de novos módulos de software sem a necessidade de análise de código.  
c) Identificar problemas de desempenho em tempo real durante a execução do código, em função dos requisitos de segurança adicionais.  
d) Automatizar os testes, substituindo a necessidade de testes de segurança realizados por engenheiros de segurança especializados.

**Resposta correta:** a

---
