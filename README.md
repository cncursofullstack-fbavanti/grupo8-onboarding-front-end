# Sistema de Onboarding - Frontend

Interface web para acompanhamento do processo de onboarding de colaboradores em empresas de TI.

## 📋 Sobre o Projeto

Frontend do sistema desenvolvido como trabalho final do curso de Fullstack, que auxilia empresas de TI a gerenciar e acompanhar o onboarding de novos colaboradores do time técnico (Desenvolvedores, QAs e Product Owners).

## 🎯 Funcionalidades

### Perfil Gestor
- Visualizar dashboard com todos os colaboradores em onboarding
- Acompanhar progresso individual (% de conclusão)
- Visualizar detalhes do onboarding de cada colaborador
- Logout do sistema

### Perfil Colaborador (Dev, QA, PO)
- Visualizar lista de tarefas do próprio onboarding
- Marcar tarefas como concluídas ou pendentes
- Logout do sistema

## 🛠️ Tecnologias Utilizadas

- React
- Tailwind CSS
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- LocalStorage (persistência de sessão)

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🔐 Usuários para Teste

| Nome | Email | Senha | Tipo | Papel |
|------|-------|-------|------|-------|
| Professor X | xavier.charles@xmen.com | icanreadyourmind | Gestor | - |
| Cyclops | summers.scott@xmen.com | lookatmyeyes | Colaborador | Dev |
| Phoenix | grey.jean@xmen.com | icanreadyourmindaswellprofessor | Colaborador | PO |
| Beast | mccoy.hank@xmen.com | minhasantquerupita | Colaborador | Dev |
| Iceman | drake.robert@xmen.com | chillout | Colaborador | QA |

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
│   ├── Header.jsx
│   └── Input.jsx
├── data/
│   └── mockData.js
├── App.jsx
└── main.jsx
```

## 🎨 Componentes

### Header
- Exibe nome do usuário logado
- Botão de logout
- Presente em todas as páginas após login

### Input
- Componente reutilizável de input com label
- Suporta diferentes tipos (email, password, text)
- Estilização consistente com Tailwind

## 📄 Páginas

### Login
- Formulário de autenticação
- Validação de credenciais
- Redirecionamento automático se já logado
- Diferencia entre gestor e colaborador
- Mensagens de erro estilizadas

### Dashboard Gestor
- Lista de colaboradores em onboarding
- Percentual de conclusão por colaborador
- Acesso aos detalhes de cada colaborador

### Detalhes do Onboarding
- Lista completa de tarefas do colaborador
- Visualização de progresso detalhado
- Status de cada tarefa

### Tarefas do Colaborador
- Lista de tarefas próprias
- Checkbox para marcar como concluído
- Visualização do progresso pessoal

## 📝 Regras de Negócio

1. Gestor tem acesso ao dashboard e visualização de todos os colaboradores
2. Colaborador visualiza apenas sua própria lista de tarefas
3. Templates são aplicados automaticamente por papel (Dev/QA/PO)
4. Sistema mantém sessão via localStorage
5. Logout limpa dados da sessão e redireciona para login

## 🔄 Fluxo de Autenticação

1. Usuário acessa a aplicação
2. Se já logado (localStorage), redireciona automaticamente
3. Se não logado, exibe tela de login
4. Após login bem-sucedido, dados do usuário são salvos no localStorage
5. Usuário é redirecionado conforme seu tipo (gestor/colaborador)
6. Logout remove dados do localStorage

## 🗂️ Estrutura de Dados (Mock)

### Usuários
- id, nome, email, senha, tipo, papel (opcional)

### Templates de Tarefas
Organizados por papel (dev, qa, po) com 7 tarefas cada

### Tarefas dos Colaboradores
- id, colaborador_id, tarefa_template_id, titulo, status

## 👥 Tipos de Usuário

- **Gestor**: acessa dashboard e visualiza todos os colaboradores
- **Colaborador**: acessa apenas suas próprias tarefas
  - Dev (Desenvolvedor)
  - QA (Quality Assurance)
  - PO (Product Owner)

## 🎓 Contexto Acadêmico

Projeto desenvolvido como avaliação final do curso de Fullstack, aplicando os conhecimentos de:
- Desenvolvimento de interfaces com React
- Estilização com Tailwind CSS
- Gerenciamento de estado com Hooks (useState, useEffect)
- Roteamento de páginas com React Router
- Persistência de dados com LocalStorage
- Componentização e reutilização de código

---

**Desenvolvido como projeto final do curso de Fullstack Essencial Atlântico Avanti - FB Uni**