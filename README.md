# Carteira Digital Carioca

## 🚀 Visão Geral

**Carteira Digital Carioca** é uma aplicação web mobile-friendly desenvolvida para a Prefeitura do Rio de Janeiro, inspirada em soluções como Google Wallet e Apple Wallet. A aplicação tem como objetivo facilitar o dia a dia do cidadão carioca, oferecendo uma solução prática e acessível para armazenar e gerenciar itens digitais importantes como documentos, cartões de transporte público e ingressos. Com esse aplicativo, o celular do usuário se torna sua nova carteira, sem a necessidade de carregar mais nada no bolso.

Este projeto é uma oportunidade de demonstrar não apenas habilidades de desenvolvimento front-end, mas também a aplicação de boas práticas de desenvolvimento, como integração contínua (CI), controle de versão e automação de deploy.

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização no lado do servidor (SSR) e client, permitindo uma aplicação altamente otimizada, com ótimo suporte a SEO e desempenho.
- **Tailwind CSS**: Framework utilitário de CSS, utilizado para criação de layouts responsivos de forma rápida e eficiente.
- **shadcn/ui**: Biblioteca de componentes acessíveis e altamente configuráveis, para garantir uma experiência de usuário consistente e de alta qualidade.
- **Husky**: Ferramenta de automação de Git hooks para garantir qualidade de código com **pre-commit** e **pre-push**, realizando verificações antes do envio de código para o repositório.
- **GitHub Actions**: Automação do processo de CI/CD, com deploy automático para a plataforma de hospedagem (Vercel).
- **Vercel**: Plataformas para hospedagem contínua da aplicação, integrando com o fluxo de trabalho de CI/CD.

---

## 🎯 Funcionalidades

- **Listar Itens**: O usuário pode visualizar todos os itens armazenados na carteira digital, com informações como tipo de item, nome e uma pré-visualização de sua imagem (se aplicável).
- **Adicionar Itens**: Funcionalidade de adicionar novos itens à carteira, como documentos pessoais (RG, CPF), ingressos, cartões de transporte e passagens.
- **Visualizar Itens**: Ao clicar sobre um item, o usuário pode visualizar informações detalhadas, como o número do documento, data de validade, etc.
- **Remover Itens**: O usuário pode remover itens da carteira, mantendo sua organização e limpeza.
- **Responsividade**: A aplicação é totalmente responsiva, utilizando o design mobile-first com Tailwind CSS para garantir que os itens sejam acessíveis em qualquer dispositivo.
- **Categorias de Itens**: Os itens podem ser organizados por categorias (ex: Documentos, Transporte, Eventos), o que melhora a usabilidade da aplicação.
- **Animações de Transição**: Animações suaves e transições entre telas e ações para melhorar a experiência do usuário.

---

## 🔧 Decisões Técnicas

### **Escolha do Next.js**

A escolha pelo **Next.js** foi estratégica, principalmente por ser um framework amplamente adotado no mercado, com uma vasta comunidade e um ecossistema rico em soluções. Isso se reflete na resolução de problemas comuns de forma já integrada, como roteamento, manipulação de rotas dinâmicas e otimização do desempenho, que são tarefas frequentemente desafiadoras em qualquer aplicação web moderna. Além disso, o Next.js possui integração nativa com **TypeScript**, o que facilita a utilização dessa poderosa linguagem sem a necessidade de configurações complicadas.

Outro ponto fundamental é a facilidade de configuração e a integração com o **Vercel**, o que torna o processo de deploy muito mais ágil, especialmente no contexto de um projeto como este, em que a entrega contínua e a automação são cruciais. A documentação do Next.js é uma das mais ricas e bem estruturadas, oferecendo acesso a recursos que agilizam qualquer tarefa, desde configurações iniciais até recursos avançados, como **SSR** (Server-Side Rendering) e **SSG** (Static Site Generation). Isso não só facilita o setup inicial do projeto, como também torna o desenvolvimento e a entrega contínua do projeto mais rápidos e sem complicações.

É importante notar que, em um contexto diferente, por exemplo, em um projeto com requisitos muito específicos ou em um ambiente onde o deploy na Vercel não seria desejado, poderia ser interessante considerar outros frameworks. No entanto, para o escopo deste projeto, que foca em praticidade, rapidez e integração com ferramentas como o Vercel, o **Next.js se mostrou mais do que perfeito**.

### **Escolha do Tailwind CSS**

O **Tailwind CSS** foi escolhido devido à sua popularidade crescente no mercado e à forte integração com o Next.js, que oferece setups iniciais de forma simples e rápida. O Tailwind é amplamente adotado por desenvolvedores devido à sua abordagem utilitária, permitindo uma construção rápida e altamente customizável de interfaces sem a necessidade de escrever CSS do zero. Ele facilita a criação de designs responsivos de maneira muito eficiente, o que é crucial para uma aplicação mobile-first como a nossa.

A velocidade que o Tailwind proporciona ao desenvolvimento é uma das suas maiores vantagens. Com ele, posso rapidamente prototipar interfaces e ajustá-las conforme necessário, sem perder a flexibilidade de personalização. Além disso, ele promove consistência no design, mantendo um padrão visual e de usabilidade em todas as partes da aplicação.

### **Escolha do shadcn/ui**

A biblioteca **shadcn/ui** foi escolhida por sua excelente combinação de **customização** e **robustez**. Ela fornece componentes bem testados e altamente configuráveis, o que nos permitiu economizar tempo de desenvolvimento sem abrir mão da flexibilidade para adaptar os componentes às necessidades do projeto. Ao mesmo tempo, esses componentes são acessíveis, o que garante uma boa experiência de usuário para todos, inclusive para aqueles com necessidades especiais.

Além disso, o shadcn/ui oferece a possibilidade de ajustar o design e o comportamento dos componentes de acordo com as preferências do projeto, o que foi um fator determinante para garantir que a aplicação tivesse uma interface agradável e de fácil navegação. Com isso, conseguimos entregar uma aplicação com componentes consistentes e de alto desempenho, enquanto mantivemos um alto nível de customização e controle sobre o design.

---

## ⚡ Desempenho

Este projeto foi desenvolvido com o objetivo de **demonstrar funcionalidades básicas e ilustrar conceitos**, sendo, portanto, uma demonstração técnica e não um aplicativo de produção. Por isso, não priorizei a otimização de desempenho sem necessidade, considerando que o foco está em entregar as funcionalidades de forma clara e concisa. 

Em um cenário de produção real, onde o aplicativo faria uso de um **backend** e consumiria dados constantemente, a otimização de desempenho se tornaria uma prioridade. Isso envolveria o uso de soluções como **Redux** ou **Zustand** para o controle de estados globais, uma vez que componentes React com grandes volumes de dados e processamento intensivo precisariam de uma gestão de estado mais eficiente.

Além disso, a combinação de hooks como **`useMemo`**, **`useCallback`** e **`memo`** ajudaria a minimizar re-renderizações desnecessárias, permitindo uma melhor performance ao evitar cálculos repetitivos e renderizações excessivas em componentes que não precisassem ser atualizados. Esses conceitos são fundamentais em aplicações grandes e dinâmicas, com interações complexas entre componentes e dados.

Porém, é importante também saber avaliar quando e como aplicar tais técnicas. O uso excessivo dessas otimizações pode, em muitos casos, gerar **overhead** e custos computacionais que não são necessários para todas as situações. Neste projeto específico, o foco foi em funcionalidades e clareza, deixando de lado o uso de técnicas complexas que, fora do escopo deste exemplo, não trariam benefícios tangíveis.

### React: `useMemo`, `useCallback` e `memo`

Com o próximo lançamento do **React Compiler**, a necessidade de usar esses recursos de otimização (como **`useMemo`**, **`useCallback`** e **`memo`**) será cada vez menor. A Meta, durante a última **React Conference**, já mencionou que muitas dessas técnicas serão desnecessárias em breve, pois o novo compilador do React lidará automaticamente com essas otimizações. Isso reforça a ideia de que, para um projeto como este, a aplicação de tais técnicas poderia acabar sendo redundante, ou até contraproducente.

### Redux/Zustand vs. React Context

Em relação ao gerenciamento de estados globais, a escolha de **Redux** ou **Zustand** seria uma solução válida em um cenário mais complexo, com maior volume de dados e componentes interdependentes. No entanto, neste caso, essas soluções trariam complexidade adicional e um custo computacional desnecessário para um projeto simples de demonstração. Portanto, optei por utilizar **React Context**, que já é suficiente para resolver os problemas de gerenciamento de estado nesse tipo de aplicação.

Em resumo, neste projeto, a escolha foi pela simplicidade e clareza. No futuro, caso a aplicação seja expandida ou colocada em produção, é claro que otimizações e soluções mais avançadas seriam implementadas para garantir um desempenho ideal.

Como referência para entender melhor os contextos de otimização e a aplicação dessas técnicas, recentemente usei um projeto **[State POC](https://state-poc.amaral.dev.br/post)**, que não é meu, mas compartilhei com meu time para levantar discussões sobre performance e contextos críticos para a otimização.

Deixo essa explicação como um ponto de reflexão sobre o uso de técnicas de otimização e estou aberto a discutir mais sobre o tema caso seja necessário.

---

### **Controle de Versão e Branches**

A abordagem adotada para o controle de versão segue a prática recomendada de trabalhar com múltiplas **branches** para diferentes fases do desenvolvimento, como:
- **main**: Branch principal com código de produção.
- **develop**: Branch de desenvolvimento, onde novas funcionalidades e testes são integrados antes de serem mesclados com a branch principal.
- **feature/<nome-da-funcionalidade>**: Branches específicas para novas funcionalidades, permitindo desenvolvimento isolado e testes sem afetar o código estável.

### **CI/CD e Automação**

A configuração de **Husky** com **Git hooks** foi uma das primeiras implementações feitas para garantir que as regras de qualidade de código sejam seguidas antes de qualquer commit. O fluxo de trabalho de **pre-commit** verifica a formatação do código usando lint-staged, e o **pre-push** garante que o código passe nos testes antes de ser enviado para o repositório.

Além disso, configurei o **GitHub Actions** para automatizar o deploy para **Vercel**, permitindo um processo contínuo de integração e deploy sempre que novas mudanças são feitas no repositório. Isso garante que a aplicação esteja sempre atualizada em produção com o mínimo de esforço manual.

---

## 📦 Estrutura do Projeto

```plaintext
.
├── public/         # Arquivos estáticos (imagens, ícones, etc.)
├── src/
│   ├── app/        # Páginas e rotas do Next.js
│   ├── components/ # Componentes reutilizáveis (como Card, Header, Footer)
│   ├── styles/     # Configurações de Tailwind CSS e ajustes personalizados
│   ├── utils/      # Funções utilitárias para lidar com mock de dados, validações, etc.
├── .husky/         # Configuração do Husky para pre-commit e pre-push
├── tailwind.config.js # Configuração do Tailwind CSS
├── .github/        # Configuração do GitHub Actions (CI/CD)
├── LICENSE         # Licença do projeto (MIT)
└── README.md       # Documentação do projeto
```

---

## 🛠️ Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/gouveags/carteira-digital-carioca.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd carteira-digital-carioca
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

---

## 🌐 Demonstração Online

Acesse a aplicação hospedada em [Vercel/Netlify](#).

---

## 📑 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo LICENSE para mais detalhes.

---

## Conclusão

Este projeto não apenas demonstra minha habilidade de criar uma aplicação funcional com foco na experiência do usuário, mas também destaca o uso de práticas modernas de desenvolvimento, como CI/CD, controle de versão eficiente, e automação de testes e deploy. Fico à disposição para quaisquer perguntas ou contribuições!
