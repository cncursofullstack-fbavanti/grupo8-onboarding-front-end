# Sistema de Onboarding - Frontend

Interface web para acompanhamento do processo de onboarding de colaboradores em empresas de TI.

## 📋 Sobre o Projeto

Frontend do sistema desenvolvido como trabalho final do curso de Fullstack, que auxilia empresas de TI a gerenciar e acompanhar o onboarding de novos colaboradores do time técnico (Desenvolvedores, QAs e Product Owners).

## 🎯 Funcionalidades

### Perfil Gestor
- Cadastrar novos colaboradores
- Selecionar papel do colaborador (Dev, QA, PO)
- Visualizar dashboard com todos os colaboradores em onboarding
- Acompanhar progresso individual (% de conclusão)
- Adicionar tarefas customizadas ao onboarding de um colaborador específico

### Perfil Colaborador (Dev, QA, PO)
- Visualizar lista de tarefas do próprio onboarding
- Marcar tarefas como concluídas ou pendentes

## 🛠️ Tecnologias Utilizadas

- React
- Tailwind CSS
- React Router
- JavaScript (ES6+)
- HTML5
- CSS3

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📦 Estrutura do Projeto

```
src/
├── pages/
│   ├── Login.jsx
│   ├── GestorDashboard.jsx
│   ├── CadastroColaborador.jsx
│   ├── DetalhesOnboarding.jsx
│   └── ColaboradorTarefas.jsx
├── components/
│   └── (componentes reutilizáveis)
├── data/
│   └── mockData.js
├── App.jsx
└── main.jsx
```

## 🎨 Páginas

### Login
- Formulário de autenticação
- Diferencia entre gestor e colaborador

### Dashboard Gestor
- Lista de colaboradores em onboarding
- Percentual de conclusão por colaborador
- Acesso rápido aos detalhes

### Cadastro de Colaborador
- Formulário com nome, email e papel
- Seleção entre Dev, QA ou PO

### Detalhes do Onboarding
- Lista completa de tarefas do colaborador
- Adicionar tarefas customizadas
- Visualização de progresso

### Tarefas do Colaborador
- Lista de tarefas próprias
- Checkbox para marcar como concluído

## 📝 Regras de Interface

1. Gestor tem acesso a todas as funcionalidades de gestão
2. Colaborador visualiza apenas sua própria lista de tarefas
3. Templates são aplicados automaticamente ao cadastrar colaborador
4. Tarefas do template não podem ser editadas ou removidas
5. Interface responsiva para diferentes tamanhos de tela

## 🔗 Integração com Backend

Este frontend consome a API REST do backend através de requisições HTTP para:
- Autenticação de usuários
- Listagem e cadastro de colaboradores
- Gerenciamento de tarefas
- Atualização de status

## 👥 Tipos de Usuário

- **Gestor**: acessa dashboard e gerencia colaboradores
- **Colaborador**: acessa lista de tarefas próprias
  - Dev (Desenvolvedor)
  - QA (Quality Assurance)
  - PO (Product Owner)

## 🎓 Contexto Acadêmico

Projeto desenvolvido como avaliação final do curso de Fullstack, aplicando os conhecimentos de:
- Desenvolvimento de interfaces com React
- Estilização com Tailwind CSS
- Gerenciamento de estado
- Roteamento de páginas
- Consumo de APIs REST

---

**Desenvolvido como projeto final do curso de Fullstack Essencial Atlântico Avanti - FB Uni**