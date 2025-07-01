# Universidade de Brasília - Faculdade Gama

## Engenharia de Software

**Professora:** Elaine Venson
**Email:** [elainevenson@unb.br](mailto:elainevenson@unb.br)

---

# Segurança de Software e Desenvolvimento de Software Seguro

## Agenda

- O problema da Segurança de Software
- Definições
- Segurança cibernética, segurança de aplicações, segurança de software
- Segurança de Software
- Vulnerabilidades
- Técnicas de prevenção, detecção e mitigação
- Desenvolvimento de Software Seguro
- Modelos de ciclo de vida
- Teste de Segurança
- DevSecOps

---

## Referências de vídeos

- [Hackers desligam carro na rodovia – com o motorista dentro](https://www.wired.com/video/watch/hackers-wireless-jeep-attack-stranded-me-on-a-highway)

---

# O Problema da Segurança de Software

- Vulnerabilidades continuam crescendo
- O foco de segurança ainda se concentra no fim do ciclo de desenvolvimento
- Software é elemento central na segurança cibernética
- Defeitos de software têm impactos diretos na segurança
- Hackers exploram esses defeitos para invadir sistemas
- Segurança deve ser incorporada ao longo do ciclo de vida, e não apenas ao final
- Construir software seguro desde o início é melhor que tentar remediar vulnerabilidades depois

---

## Por que o problema está aumentando?

- **Conectividade**
  ![Smart City](https://www.urbannewsdigest.in/2019/08/startups-to-contribute-to-the-smart-city-model/)

- **Extensibilidade**
  ![Extensibilidade](http://www.c-pluff.org/reference/c-api/architecture.html)

- **Complexidade**
  ![Complexidade](http://qnxauto.blogspot.com/2016/10/)

---

# Origem das Vulnerabilidades

- Baseado no US National Vulnerabilities DB (NVD)

  - Mais de 85 mil vulnerabilidades reportadas publicamente
  - 93% dos buffer errors envolveram erro simples (verificação de limites de arrays)
  - Fonte: Kuhn, M. Raunak, and R. Kacker, IT Professional, 2017

- Referência adicional: Rashid et al., The Cyber Security Body of Knowledge, 2019

---

# Definições

- **Segurança Cibernética (Cybersecurity):**
  Proteção de sistemas de computação, redes, hardware, software e dados contra roubo, danos ou mau uso.

  > Schatz, Daniel; Bashroush, Rabih; Wall, Julie (2017)

- **Segurança de Software:**
  Desenvolver software que continue funcionando mesmo sob ataque

  > McGraw, 2004

---

# Objetivos de Segurança de Software

- Confidencialidade
- Integridade
- Disponibilidade

**Vulnerabilidades** são falhas de segurança que impedem o sistema de atingir esses objetivos.

---

# Vulnerabilidades

- **CVE (Common Vulnerabilities and Exposures)**

  - Lista pública de vulnerabilidades
  - [https://cve.mitre.org](https://cve.mitre.org)

- **CWE (Common Weakness Enumeration)**

  - Catalogação de fraquezas de software
  - [https://cwe.mitre.org](https://cwe.mitre.org)

- **OWASP Top Ten**

  - Principais ameaças de segurança para aplicações web
  - [https://owasp.org/Top10/](https://owasp.org/Top10/)

  ### OWASP Top Ten (2021)

  - A01 - Controle de Acesso Quebrado
  - A02 - Falhas Criptográficas
  - A03 - Injeção
  - A04 - Design Inseguro
  - A05 - Configuração de Segurança Incorreta
  - A06 - Componentes Vulneráveis e Desatualizados
  - A07 - Falhas de Identificação e Autenticação
  - A08 - Falhas de Integridade de Software e Dados
  - A09 - Falhas de Registro e Monitoramento de Segurança
  - A10 - SSRF (Server-Side Request Forgery)

---

# OWASP ASVS

- **OWASP Application Security Verification Standard (ASVS):**
  Padrão aberto para validação da segurança de aplicações web

  - [https://owasp.org/www-project-application-security-verification-standard/](https://owasp.org/www-project-application-security-verification-standard/)

---

# Categorias de Vulnerabilidades

- **Gerenciamento de memória:** buffer overflow, dangling pointers
- **Geração de saída estruturada:** SQL Injection, Command Injection, XSS
- **Race conditions**
- **APIs vulneráveis**
- **Side-channel** (tempo de execução, consumo de energia, etc.)

---

# Exemplos

## Buffer Overflow

```c
char buff[15];
int pass = 0;
printf("\n Enter the password \n");
gets(buff);
if(strcmp(buff, "thegeekstuff")) {
    printf ("\n Wrong Password \n");
} else {
    printf ("\n Correct Password \n");
    pass = 1;
}
if(pass) {
    printf ("\n Root privileges given to the user\n");
}
```

Fonte: [The Geek Stuff](https://www.thegeekstuff.com/2013/06/buffer-overflow/?utm_source=feedly)

## SQL Injection

```sql
SELECT * FROM Students WHERE name = '$name'
```

entrada do atacante:

```sql
Alice'; DROP TABLE Students; --
```

---

# Contramedidas

- **Prevenção**

  - Linguagens seguras
  - Padrões de codificação

- **Detecção**

  - Revisões de código
  - Testes de penetração
  - Análise estática

- **Mitigação**

  - Monitoramento
  - Diversidade de software

---

# Desenvolvimento de Software Seguro

- Deve envolver:

  - Requisitos de segurança
  - Revisões de arquitetura
  - Revisões de código
  - Testes orientados a riscos
  - Auditorias
  - Análises estáticas e dinâmicas

- Engenharia de Software Seguro reduz custos e incidentes

---

## Microsoft SDL

1. Definir padrões de segurança
2. Usar recursos e frameworks seguros
3. Analisar arquitetura e ameaças
4. Definir padrões criptográficos
5. Proteger cadeia de suprimentos
6. Garantir ambiente seguro
7. Testar segurança
8. Proteger plataforma operacional
9. Monitorar e responder
10. Treinamento de segurança

[Microsoft SDL](https://www.microsoft.com/en-us/securityengineering/sdl/practices)

---

## SDL - Testes de Segurança

- **SAST (análise estática)**
- **DAST (análise dinâmica)**
- **Red/Blue Team**
- **Pen tests**
- **Bug bounty**
- **Testes periódicos**

---

# SAFECode - 8 Práticas

1. Definição de controles
2. Design seguro
3. Codificação segura
4. Gerenciar riscos de terceiros
5. Testes e validações
6. Gerenciar findings
7. Resposta a vulnerabilidades
8. Planejar implementação segura

---

# Estratégia de Testes

- SAST
- DAST
- SCA (análise de composição)
- RASP (proteção em tempo de execução)

---

# Testes de Segurança

- SMPT: testes manuais sistemáticos
- EMPT: testes manuais exploratórios
- DAST: testes dinâmicos
- SAST: testes estáticos

Exemplo de ferramenta:

- **DAST**: OWASP ZAP
- **SAST**: SonarQube

---

# DevSecOps

- [CSA DevSecOps Automation](https://cloudsecurityalliance.org/artifacts/devsecops-automation)

## Pilares do DevSecOps

1. Responsabilidade coletiva
2. Colaboração e integração
3. Implementação pragmática
4. Conformidade e desenvolvimento
5. Automação
6. Medir, monitorar, relatar e agir

---

# Referências

- Cifuentes et al. (2023)
- McGraw (2006)
- Microsoft SDL
- Mohan (2022)
- Rashid et al. (2019)
- BSIMM (2019)
- SAFECode (2018)
- Elder et al. (2022)
- [Cloud Security Alliance DevSecOps](https://cloudsecurityalliance.org/research/artifacts?term=devsecops)

---

Claro, aqui está a saída anterior formatada em Markdown (`.md`).

# Perguntas e Respostas sobre "The Six Pillars of DevSecOps: Automation"

## Pergunta 1

**P:** De acordo com a introdução do texto, por que a automação é considerada um componente crítico do DevSecOps?

- **(A)** Porque ela substitui completamente a necessidade de equipes de segurança, automatizando todas as suas funções e integrando-as aos desenvolvedores.
- **(B)** Porque seu foco principal é acelerar a velocidade de entrega, mesmo que isso signifique aceitar um nível de risco de segurança mais elevado.
- **(C)** Porque ela permite a eficiência do processo, fazendo com que as equipes se concentrem em entregar valor em vez de repetir esforços manuais e erros.
- **(D)** Porque ela implementa um framework para execução manual de controles de segurança, garantindo que a supervisão humana ocorra em todas as etapas do pipeline.
- **(E)** Porque ela garante que 100% das vulnerabilidades sejam identificadas e corrigidas durante a fase de design, eliminando a necessidade de testes posteriores.

---

**Resposta Correta:** (C)

**Justificativa:** O texto afirma claramente que o valor da automação está na eficiência e na redução de trabalho repetitivo, permitindo que as equipes foquem em atividades de maior valor.

> **Trecho do livro:** "Automation is a critical component of DevSecOps because it enables process efficiency, allowing developers, infrastructure, and information security teams to focus on delivering value rather than repeating manual efforts and errors with complex deliverables."

> **Tradução:** "A automação é um componente crítico do DevSecOps porque ela permite a eficiência do processo, fazendo com que as equipes de desenvolvedores, infraestrutura e segurança da informação se concentrem em entregar valor em vez de repetir esforços manuais e erros com entregáveis complexos."

---

## Pergunta 2

**P:** Com base nas definições da seção 3, como o teste de segurança de aplicação estático (SAST) se difere fundamentalmente do teste de segurança de aplicação dinâmico (DAST)?

- **(A)** O SAST analisa o código-fonte estático da aplicação em busca de vulnerabilidades, enquanto o DAST analisa a aplicação enquanto ela está em execução, com base em seu comportamento.
- **(B)** O SAST é um teste de "caixa-preta" que não requer acesso ao código, enquanto o DAST é um teste de "caixa-branca" que analisa a estrutura interna.
- **(C)** O SAST é utilizado exclusivamente para analisar componentes de terceiros e de código aberto, enquanto o DAST foca apenas no código desenvolvido internamente.
- **(D)** O SAST só pode ser executado em ambientes de produção, enquanto o DAST é projetado para ser usado no ambiente de desenvolvimento integrado (IDE) do programador.
- **(E)** O SAST é sempre um processo de revisão manual feito por humanos, enquanto o DAST se refere a qualquer tipo de ferramenta de teste automatizado.

---

**Resposta Correta:** (A)

**Justificativa:** O texto define SAST como a análise do código-fonte e DAST como a análise de uma aplicação em execução, o que corresponde exatamente à alternativa.

> **Trecho do livro (SAST):** "Security testing that analyzes application source code for software vulnerabilities and gaps against best practices"
> **Tradução (SAST):** "Teste de segurança que analisa o código-fonte da aplicação em busca de vulnerabilidades de software e lacunas em relação às melhores práticas"

> **Trecho do livro (DAST):** "Security testing that analyzes a running application by exercising application functionality and detecting vulnerabilities based on application behavior and response"
> **Tradução (DAST):** "Teste de segurança que analisa uma aplicação em execução, exercitando a funcionalidade da aplicação e detectando vulnerabilidades com base no comportamento e na resposta da aplicação"

---

## Pergunta 3

**P:** Utilizando a tabela de exemplo da seção 5.3, como seria classificado o pipeline de uma mudança de **risco baixo (1)** em uma aplicação de **risco alto (3)** com um histórico de confiabilidade **médio (2)**?

- **(A)** Seria classificada na "faixa vermelha" (red lane), pois qualquer aplicação de risco alto exige o nível máximo de rigor, independentemente dos outros fatores.
- **(B)** Seria classificada na "faixa verde" (green lane), pois a mudança em si tem um risco baixo, o que permite otimizar a entrega contínua.
- **(C)** Seria classificada na "faixa amarela" (yellow lane), pois a pontuação total dos fatores de risco (1+3+2=6) está na faixa que exige mais escrutínio.
- **(D)** A classificação não seria possível, pois a tabela de exemplo não contempla a combinação de um risco de mudança baixo com um risco de aplicação alto.
- **(E)** Seria classificada na "faixa vermelha" (red lane), pois o risco do histórico médio anula o risco baixo da mudança, elevando a pontuação total para 7.

---

**Resposta Correta:** (C)

**Justificativa:** O texto estabelece um sistema de pontuação onde um total de 5 ou mais classifica o pipeline como "faixa amarela", e 7 ou mais como "faixa vermelha". A soma dos fatores (1+3+2) resulta em 6.

> **Trecho do livro:** "The numeric values of High (3), Medium (2), and Low (1) are used with a total score of 5 and above considered to be in a “yellow lane,” and 7 and above considered to be in the “red lane.”"
> **Tradução:** "Os valores numéricos de Alto (3), Médio (2) e Baixo (1) são usados, com uma pontuação total de 5 ou mais sendo considerada uma “faixa amarela”, e 7 ou mais sendo considerada uma “faixa vermelha”."

---

## Pergunta 4

**P:** De acordo com a seção 7.4, qual é uma das principais vantagens de implementar loops de feedback contínuos e rápidos para as equipes de DevSecOps?

- **(A)** Elimina a necessidade de "quebrar o build", pois todos os problemas são automaticamente corrigidos antes de serem integrados ao código principal.
- **(B)** Transfere a responsabilidade total pela correção de bugs para a equipe de operações, que é a única a receber os alertas de segurança.
- **(C)** Reduz a complexidade e o custo da remediação de um defeito, permitindo que os desenvolvedores o corrijam rapidamente enquanto o contexto ainda está fresco em suas mentes.
- **(D)** Permite que a organização ignore permanentemente vulnerabilidades de baixa severidade, focando o feedback exclusivamente em problemas de alta criticidade.
- **(E)** Garante que os testes assíncronos (out-of-band) não sejam mais necessários, pois todos os tipos de verificação de segurança podem ser feitos em tempo real.

---

**Resposta Correta:** (C)

**Justificativa:** O texto enfatiza que o feedback rápido reduz o custo da correção e capacita os desenvolvedores a agir de forma mais eficaz, pois o contexto da mudança ainda é recente.

> **Trecho do livro:** "The longer a security defect exists in the application, the more likely further changes and deployment will add to the complexity and cost of remediating the defect. [...] timely feedback empowers individuals to diagnose and remediate changes that caused the vulnerability quickly, allowing them to perform root cause analysis while the accompanying context is still fresh in mind."
> **Tradução:** "Quanto mais tempo um defeito de segurança existe na aplicação, maior a probabilidade de que mudanças e implantações futuras aumentem a complexidade e o custo para remediar o defeito. [...] o feedback oportuno capacita os indivíduos a diagnosticar e remediar rapidamente as mudanças que causaram a vulnerabilidade, permitindo-lhes realizar a análise de causa raiz enquanto o contexto associado ainda está fresco na mente."

---

## Pergunta 5

**P:** O texto descreve o teste assíncrono (out-of-band) como uma prática importante. Para quais duas categorias gerais de atividades ele é recomendado?

- **(A)** Para todos os testes de unidade e integração, que devem rodar fora do pipeline principal para não atrasar os desenvolvedores.
- **(B)** Apenas para a verificação de vulnerabilidades de baixa severidade e para a revisão de código por pares, que não são consideradas críticas.
- **(C)** Exclusivamente para a varredura de contêineres e a análise de componentes de software (SCA), pois essas atividades sempre requerem intervenção manual.
- **(D)** Para atividades cruciais que exigem inteligência humana (como pentest) e para testes automatizados muito demorados (como um SAST completo).
- **(E)** Para a gestão de segredos (secrets management) e a configuração de firewalls de aplicação web (WAF), que são processos contínuos e não pontuais.

---

**Resposta Correta:** (D)

**Justificativa:** A seção 7.3 divide explicitamente os testes assíncronos nessas duas categorias: os que precisam de inteligência humana e os que são automatizados, mas muito longos para o pipeline principal.

> **Trecho do livro:** "There are generally two categories of asynchronous testing: Certain crucial security activities cannot be fully automated as they require human intelligence. These include threat modeling, penetration testing, and peer code review. Heavyweight automated tests that take a long time to perform, such as SAST."
> **Tradução:** "Geralmente, existem duas categorias de testes assíncronos: certas atividades de segurança cruciais não podem ser totalmente automatizadas, pois exigem inteligência humana. Estas incluem modelagem de ameaças, testes de penetração e revisão de código por pares. Testes automatizados pesados que levam muito tempo para serem executados, como o SAST."
