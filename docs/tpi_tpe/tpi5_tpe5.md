## Segurança Cibernética e Segurança de Software

- **O que é segurança cibernética e quais as principais diferenças em relação à segurança de software?**

  - _Trecho de apoio:_ —
  - _Resposta:_ Segurança cibernética abrange a proteção de redes, sistemas e dados de forma ampla. Segurança de software foca na robustez do código e de seus componentes ao longo do SDLC, usando práticas como SAST/DAST, correções e hardening de dependências.
  - _Resposta da web:_ Segurança cibernética protege “tudo” — infra, redes, dispositivos — enquanto **software security** cuida de vulnerabilidades internas a um programa; a primeira atua em várias camadas (firewalls, IAM, monitoramento de rede), a segunda incorpora requisitos de segurança, revisões de código e testes dentro do ciclo de desenvolvimento.

- **Quais são os objetivos principais da segurança de software (confidencialidade, integridade e disponibilidade) e como eles são aplicados na prática?**
  - _Trecho de apoio:_ “...proving **confidentiality, integrity and availability** of the data as well as the service.”
  - _Resposta:_ Controles de segurança devem manter dados acessíveis apenas a quem deve (C), impedir alterações não autorizadas (I) e garantir que o serviço permaneça funcional (A). Isso é realizado com criptografia, controle de acesso, logs imutáveis e resiliência na infraestrutura.
  - _Resposta da web:_ O **CIA Triad** guia políticas de segurança: criptografia e segregação de funções garantem confidencialidade; hashing, controle de versão e assinaturas digitais asseguram integridade; alta disponibilidade usa balanceamento de carga e redundância para manter serviços online.

---

## Vulnerabilidades

- **O que são CVEs (Common Vulnerabilities and Exposures) e como são aplicadas na identificação de vulnerabilidades de software?**

  - _Trecho de apoio:_ “...via vulnerability databases such as **CVE**.”
  - _Resposta:_ CVE é um identificador único para falhas públicas. Ferramentas de SCA, scanners de contêiner e sistemas de gestão de patch usam o ID CVE para apontar componentes afetados.
  - _Resposta da web:_ Um **CVE** fornece nome padronizado, severidade (CVSS) e referências; fornecedores e pesquisadores o citam para sincronizar patches e alertas.

- **Qual é a definição e função da CWE (Common Weakness Enumeration) em ferramentas de segurança?**
  - _Trecho de apoio:_ —
  - _Resposta:_ CWE cataloga fraquezas (erros de design ou código). Ferramentas mapeiam findings a CWEs (ex.: **CWE-89 SQL Injection**) para priorizar correções e gerar métricas de qualidade.
  - _Resposta da web:_ O projeto **CWE** da MITRE descreve mais de 900 fraquezas; scanners vinculam detecções a esses códigos para relatórios consistentes e comunicação entre equipes.

---

## OWASP Top Ten

- **O que é o OWASP Top Ten e como ele classifica as vulnerabilidades de aplicações web?**

  - _Trecho de apoio:_ —
  - _Resposta:_ Lista semestral da OWASP com as dez categorias de risco mais críticas, priorizadas por prevalência, impacto e facilidade de exploração.
  - _Resposta da web:_ O documento é referência de conscientização; cada categoria (A01-A10) consolida dados de milhares de testes, mapeando‐as a CWEs correlatas para orientar mitigação.

- **Quais são exemplos concretos de vulnerabilidades classificadas no OWASP Top Ten 2021 (como Injeção, Falhas Criptográficas e Server-Side Request Forgery)?**
  - _Trecho de apoio:_ —
  - _Resposta:_ Exemplos: **A01 Injeção** (SQL/OS), **A02 Falhas Criptográficas** (algoritmos fracos, chaves vazadas) e **A10 SSRF** (servidor faz requisições internas indevidas).
  - _Resposta da web:_ Para **A02 Cryptographic Failures**, a OWASP cita CWE-259 (senha hard-coded) e CWE-327 (algoritmo fraco); já **SSRF** permite que atacantes alcancem recursos internos via URLs manipuladas.

---

## OWASP ASVS

- **O que é o OWASP Application Security Verification Standard (ASVS) e como ele se aplica no processo de verificação de segurança em aplicações web?**
  - _Trecho de apoio:_ —
  - _Resposta:_ O ASVS fornece requisitos de verificação em três níveis (Básico, Padrão, Crítico). Equipes usam o checklist para revisar código, testar segurança e auditar controles conforme o risco do aplicativo.
  - _Resposta da web:_ A ASVS lista mais de 250 controles em áreas como autenticação, criptografia e lógica de negócios; pode ser integrada a pipelines CI para garantir cobertura mínima de segurança antes do “go-live”.

---

## Testes de Segurança

- **O que é SAST (Static Application Security Testing) e quais as vantagens e limitações dessa técnica no contexto dos testes de segurança?**

  - _Trecho de apoio:_ citações SAST
  - _Resposta:_ SAST examina código parado. Vantagens: detecção precoce, fácil integração ao CI/IDE. Limitações: alto volume de falsos-positivos e falta de visão de comportamento em tempo de execução.
  - _Resposta da web:_ Ferramentas SAST como **SonarQube** exibem CWEs e OWASP Top 10 diretamente na revisão de código; porém exigem ajuste de regras para reduzir falsos-positivos.

- **O que é DAST (Dynamic Application Security Testing) e como ele é aplicado na detecção prática de vulnerabilidades em aplicações executando em ambientes reais?**

  - _Trecho de apoio:_ citações DAST
  - _Resposta:_ DAST “ataca” a aplicação rodando, analisando respostas HTTP para detectar falhas de configuração, autenticação, vazamento de dados e comportamentos inesperados.
  - _Resposta da web:_ DAST é “black-box”: escaneia a aplicação em execução simulando ataques (XSS, SQLi). Ferramentas modernas podem integrar autenticação e scan contínuo em produção.

- **Como são realizados na prática os testes Systematic Manual Penetration Testing (SMPT) e Exploratory Manual Penetration Testing (EMPT)?**

  - _Trecho de apoio:_ —
  - _Resposta:_ SMPT segue roteiros e checklists (p.ex. WSTG), enquanto EMPT é guiado pela criatividade do pentester. Ambos combinam enumeração, exploração e prova de conceito.
  - _Resposta da web:_ Pentesters humanos executam **manual penetration testing** para detectar falhas de lógica que scanners ignoram; guias recomendam PTES/NIST 800-115 como framework sistematizado.

- **Como é realizado um teste de penetração (penetration testing), e quais as etapas e objetivos principais desta atividade?**

  - _Trecho de apoio:_ —
  - _Resposta:_ Etapas: 1) Reconhecimento, 2) Enumeração, 3) Exploração, 4) Pós-exploração, 5) Relatório. Objetivo: demonstrar impacto real e fornecer recomendações.
  - _Resposta da web:_ Organizações como EC-Council definem cinco fases: reconnaissance, scanning, vulnerability assessment, exploitation e reporting.

- **Quais são exemplos práticos de aplicação das ferramentas SAST (como SonarQube) e DAST (como OWASP ZAP)?**
  - _Trecho de apoio:_ citação ZAP
  - _Resposta:_ **SonarQube** integra-se ao CI/CD apontando CWEs; **OWASP ZAP** pode automatizar fuzzing WebSocket, spider e análise passiva durante o pipeline, bloqueando o merge em caso de achados críticos.
  - _Resposta da web:_ SonarQube 9+ cobre NIST SSDF e Top 10; já ZAP permite fuzzing de WebSockets com interface gráfica ou CLI, útil em testes de APIs em tempo real.

---

## Desenvolvimento de Software Seguro

- **No contexto do SDL (Security Development Lifecycle), quais são as principais práticas para assegurar a segurança durante todo o ciclo de vida do software?**

  - _Trecho de apoio:_
  - _Resposta:_ Planejar requisitos, modelar ameaças, SAST/DAST contínuos, gates de liberação, resposta a incidentes e monitoramento em produção.
  - _Resposta da web:_ O **Microsoft SDL** adiciona treinamento, requisitos, análise de design e verificação de mitigação antes do release; threat modeling segue 5 passos (definir requisitos, diagramar, identificar ameaças, mitigar, validar).

- **Quais são as práticas fundamentais detalhadas no modelo Microsoft Security Development Lifecycle (SDL)?**

  - _Trecho de apoio:_ —
  - _Resposta:_ Treinamento, requisitos de segurança, modelagem STRIDE, análise de design, código seguro, testes, “security gates” e resposta a incidentes.
  - _Resposta da web:_ Documentação oficial destaca STRIDE, ferramentas automáticas e revisão de binários para ASLR/DEP antes da assinatura.

- **O que são casos de abuso (abuser stories), e como podem ser usados efetivamente na especificação de requisitos de segurança?**

  - _Trecho de apoio:_ —
  - _Resposta:_ São histórias na perspectiva do atacante (“Como invasor, quero...”) usadas para derivar controles defensivos específicos logo na fase de requisitos.
  - _Resposta da web:_ Abuser stories complementam user stories em metodologias ágeis, forçando a equipe a pensar como o atacante e gerar requisitos de negação de abuso.

- **Como é aplicado na prática o método de threat modeling no contexto do SDL?**
  - _Trecho de apoio:_ cita SDL
  - _Resposta:_ Identificar ativos, decompor fluxos, aplicar STRIDE, definir mitigações e documentar riscos.
  - _Resposta da web:_ STRIDE provê check-list sistemático; ferramentas (MS Threat Modeling Tool, IriusRisk) automatizam diagramação e geração de mitigações.

---

## DevSecOps

- **O que é DevSecOps, e quais os principais pilares que sustentam sua implementação?**

  - _Trecho de apoio:_ —
  - _Resposta:_ Integra segurança à cultura DevOps. Pilares: Responsabilidade Coletiva, Treinamento & Integração, Implementação Pragmática, Conformidade × Desenvolvimento, Automação e Métricas.
  - _Resposta da web:_ CSA define **seis pilares** com ênfase em responsabilidade coletiva; Fortinet reforça o “shift-left” para reduzir custo de remediação.

- **Como a automação contribui para a eficiência e segurança no contexto de DevSecOps?**

  - _Trecho de apoio:_
  - _Resposta:_ Automatização de SAST, DAST, SCA, políticas como código e gates de segurança reduz tempo de feedback e erro humano.
  - _Resposta da web:_ DevSecOps automatiza segurança em cada commit, permitindo detecção precoce e release contínuo sem comprometer a qualidade.

- **Quais são exemplos práticos e benefícios da aplicação dos pilares específicos de DevSecOps (Responsabilidade Coletiva, Colaboração e Integração, Conformidade e Desenvolvimento)?**
  - _Trecho de apoio:_ —
  - _Resposta:_ Merge bloqueado em falha crítica (Responsabilidade Coletiva), revisões de segurança em pull requests (Colaboração), evidências versionadas para auditoria (Conformidade), resultando em menor _time-to-fix_.
  - _Resposta da web:_ Programas de bug bounty internos, pipelines GitOps assinados e políticas OPA demonstram esses pilares na prática.

---

## Aplicações Práticas e Exemplos

- **Quais são exemplos práticos de vulnerabilidade de injeção SQL, incluindo causas comuns e técnicas de prevenção?**

  - _Trecho de apoio:_
  - _Resposta:_ Exemplos incluem concatenação de parâmetros sem validação. Prevenção: _prepared statements_, validação de entrada, princípio de menor privilégio.
  - _Resposta da web:_ Prepared statements eliminam concatenação de strings e reduzem risco de SQLi; OWASP e Imperva citam-nos como defesa primária.

- **Como ocorre um ataque de buffer overflow, e quais medidas de prevenção e mitigação são recomendadas?**

  - _Trecho de apoio:_ —
  - _Resposta:_ Gravação além do limite do buffer altera ponteiros de retorno e permite execução de código arbitrário. Mitigações: ASLR, canários de pilha, _bounds-checking_.
  - _Resposta da web:_ OWASP recomenda **stack canaries** e DEP; Android implementa ASLR/KASLR para reduzir exploitabilidade.

- **Quais são as melhores práticas para a gestão de segredos (secrets management) em pipelines de desenvolvimento seguro?**
  - _Trecho de apoio:_
  - _Resposta:_ Utilizar cofres (HashiCorp Vault, AWS Secrets Manager), rotacionar chaves, evitar texto claro em repositórios e escanear vazamentos.
  - _Resposta da web:_ Guias recomendam centralizar segredos em Vault, usar tokens efêmeros e restringir permissões no pipeline CI/CD.

---
