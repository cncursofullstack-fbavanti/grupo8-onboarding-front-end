# Sistema de Onboarding - Frontend

Interface web para acompanhamento do processo de onboarding de colaboradores em empresas de TI.

## 📋 Sobre o Projeto

Frontend do sistema desenvolvido como trabalho final do curso de Fullstack, que auxilia empresas de TI a gerenciar e acompanhar o onboarding de novos colaboradores do time técnico (Desenvolvedores, QAs e Product Owners).

## 🎯 Funcionalidades

### Perfil Gestor
- Visualizar dashboard com todos os colaboradores em onboarding
- Acompanhar progresso individual e geral do time
- Visualizar detalhes do onboarding de cada colaborador
- Cadastrar novos colaboradores (funcionalidade temporária - dados em memória)
- Menu de navegação responsivo
- Proteção de rotas (acesso exclusivo para gestores)

### Perfil Colaborador (Dev, QA, PO)
- Visualizar lista de tarefas do próprio onboarding
- Marcar tarefas como concluídas ou pendentes
- Acompanhar progresso pessoal
- Tratamento de lista vazia quando não há tarefas atribuídas
- Proteção de rotas (acesso exclusivo para colaboradores)

### Funcionalidades Gerais
- Sistema de autenticação com persistência via localStorage
- Menu de navegação dropdown com ícones
- Página 404 para rotas inexistentes
- Avatares com fallback para iniciais do nome
- Design responsivo e temático (cores dos X-Men)

## 🛠️ Tecnologias Utilizadas

- React
- Tailwind CSS
- React Router DOM
- Lucide React (ícones)
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

| Nome | Email | Senha | Tipo | Papel | Progresso |
|------|-------|-------|------|-------|-----------|
| Professor X | xavier.charles@xmen.com | icanreadyourmind | Gestor | - | - |
| Cyclops | summers.scott@xmen.com | lookatmyeyes | Colaborador | Dev | 100% (7/7) |
| Phoenix | grey.jean@xmen.com | icanreadyourmindaswellprofessor | Colaborador | PO | 57% (4/7) |
| Beast | mccoy.hank@xmen.com | minhasantquerupita | Colaborador | Dev | 71% (5/7) |
| Iceman | drake.robert@xmen.com | chillout | Colaborador | QA | 14% (1/7) |
| Storm | ororo@xmen.com | weather | Colaborador | Dev | Sem tarefas |

## 📦 Estrutura do Projeto

```
src/
├── pages/
│   ├── Login.jsx
│   ├── GestorDashboard.jsx
│   ├── CadastroColaborador.jsx
│   ├── DetalhesOnboarding.jsx
│   ├── ColaboradorTarefas.jsx
│   └── NotFound.jsx
├── components/
│   ├── Header.jsx
│   ├── Input.jsx
│   ├── Progress.jsx
│   └── Avatar.jsx
├── utils/
│   └── auth.js
├── data/
│   └── mockData.js
├── assets/
│   └── imgs/
│       ├── SchoolLogo.png
│       ├── professor.png
│       ├── cyclops.png
│       ├── phoenix.png
│       ├── beast.png
│       └── iceman.png
├── App.jsx
└── main.jsx
```

## 🎨 Componentes Reutilizáveis

### Avatar
- Exibe imagem do usuário ou inicial do nome como fallback
- Suporta 4 tamanhos: `sm`, `md`, `lg`, `card`
- Estilização consistente com border e cores temáticas

### Header
- Menu de navegação responsivo com dropdown
- Exibição de avatar e nome do usuário
- Opções contextuais baseadas no tipo de usuário (gestor/colaborador)
- Botão de logout
- Proteção automática de rotas

### Input
- Componente reutilizável de input com label
- Suporta diferentes tipos (email, password, text)
- Validação HTML5 integrada
- Estilização consistente com Tailwind

### Progress
- Barra de progresso visual
- Suporta diferentes tamanhos (small, large)
- Tratamento de valores inválidos (NaN)
- Mensagem customizada quando não há tarefas

## 📄 Páginas

### Login
- Formulário de autenticação
- Validação de credenciais
- Redirecionamento automático se já logado
- Diferencia entre gestor e colaborador
- Mensagens de erro estilizadas
- Persistência de sessão

### Dashboard Gestor
- Progresso geral do time (visual destacado)
- Grid responsivo de colaboradores (2 colunas desktop, 1 coluna mobile)
- Cards com avatar, nome, papel, email e progresso individual
- Botão para visualizar detalhes de cada colaborador
- Acesso via menu ao cadastro de colaboradores

### Cadastro de Colaborador
- Formulário com nome, email, senha e papel
- Validação de campos obrigatórios
- Seleção de papel (Dev, QA, PO)
- Aplicação automática de template de tarefas (temporário - dados em memória)
- Botões de cancelar e cadastrar

### Detalhes do Onboarding
- Visualização completa das tarefas do colaborador
- Card com informações do colaborador (avatar, nome, papel, email)
- Barra de progresso detalhada
- Lista de tarefas com status visual
- Indicadores coloridos (amarelo = concluída, cinza = pendente)
- Botão voltar para dashboard

### Tarefas do Colaborador
- Lista interativa de tarefas próprias
- Checkboxes para marcar conclusão
- Barra de progresso pessoal
- Atualização em tempo real do progresso
- Tratamento especial para lista vazia
- Visual responsivo e intuitivo

### Página 404
- Design amigável para rotas inexistentes
- Botão para retornar à página inicial
- Visual consistente com o tema do sistema

## 📝 Regras de Negócio

1. Gestor tem acesso exclusivo ao dashboard, cadastro e visualização de colaboradores
2. Colaborador tem acesso exclusivo à própria lista de tarefas
3. Templates de 7 tarefas são aplicados automaticamente por papel (Dev/QA/PO)
4. Sistema mantém sessão via localStorage (persiste ao recarregar)
5. Logout limpa dados da sessão e redireciona para login
6. Proteção de rotas impede acessos não autorizados
7. Dados de cadastro são temporários (memória) - serão persistidos com backend

## 🔄 Fluxo de Autenticação

1. Usuário acessa a aplicação
2. Se já logado (localStorage), redireciona automaticamente para rota apropriada
3. Se não logado, exibe tela de login
4. Após login bem-sucedido:
   - Dados do usuário salvos no localStorage
   - Redirecionamento baseado no tipo (manager → /manager/dashboard, collaborator → /collaborator/tasks)
5. Proteção ativa em todas as rotas
6. Logout remove dados e retorna ao login

## 🔒 Segurança e Proteção de Rotas

- Função `requireManager()` protege rotas de gestores
- Função `requireCollaborator()` protege rotas de colaboradores
- Função `getLoggedUser()` centraliza acesso aos dados do usuário
- Redirecionamento automático para login em caso de acesso não autorizado
- Header verifica autenticação antes de renderizar

## 🗂️ Estrutura de Dados (Mock)

### Users
```javascript
{
  id: number,
  name: string,
  email: string,
  password: string,
  type: "manager" | "collaborator",
  role?: "dev" | "qa" | "po",
  avatar: string
}
```

### Tasks
```javascript
{
  id: number,
  collaborator_id: number,
  template_task_id: number,
  title: string,
  status: "pending" | "completed"
}
```

### Templates
Organizados por papel (dev, qa, po) com 7 tarefas específicas cada

## 🎨 Design System

### Cores Principais
- **Amarelo (Tema X-Men)**: `yellow-500`, `yellow-600` - Elementos interativos e progresso
- **Cinza**: `stone-200` - Background geral
- **Branco**: Cards e containers
- **Vermelho**: `red-600` - Botão de logout e alertas

### Tipografia
- Títulos: `text-3xl`, `font-bold`
- Subtítulos: `text-xl`, `font-semibold`
- Corpo: `text-base`, `text-sm`
- Labels: `text-xs`, `font-medium`

### Componentes Visuais
- Cards com `rounded-lg`, `shadow-md`, `hover:shadow-lg`
- Botões com estados hover e focus
- Transições suaves em elementos interativos
- Borders consistentes com `border-gray-300`

## 👥 Tipos de Usuário

- **Gestor (Manager)**: Acesso completo à gestão de colaboradores e visualização de progresso
- **Colaborador (Collaborator)**: Acesso à própria lista de tarefas e gestão do progresso pessoal
  - **Dev** (Desenvolvedor): 7 tarefas focadas em setup técnico
  - **QA** (Quality Assurance): 7 tarefas focadas em testes
  - **PO** (Product Owner): 7 tarefas focadas em produto e stakeholders

## ⚠️ Limitações Conhecidas

- Dados de cadastro são temporários (memória) e são perdidos ao recarregar a página
- Avatares dos novos colaboradores cadastrados ficam vazios (mostram inicial)
- Alterações no status das tarefas não persistem ao recarregar
- Autenticação simplificada sem criptografia (ambiente acadêmico)

Estas limitações serão resolvidas com a implementação do backend.

## 🎓 Contexto Acadêmico

Projeto desenvolvido como avaliação final do curso de Fullstack, aplicando os conhecimentos de:
- Desenvolvimento de interfaces com React e componentização
- Estilização avançada com Tailwind CSS
- Gerenciamento de estado com Hooks (useState, useEffect)
- Roteamento de páginas com React Router DOM
- Persistência de dados com LocalStorage
- Proteção de rotas e controle de acesso
- Componentização e reutilização de código
- Design responsivo e acessível
- Integração de bibliotecas de ícones (Lucide React)

## 📚 Aprendizados Técnicos

- Estruturação de projetos React escaláveis
- Padrões de componentes reutilizáveis
- Gerenciamento de estado local e sessão
- Implementação de fluxos de autenticação
- Proteção e validação de rotas
- Design de interfaces intuitivas
- Tratamento de casos extremos (listas vazias, dados inválidos)
- Uso efetivo de Tailwind CSS para estilização rápida
- Trabalho com mock data estruturado

---

**Desenvolvido como projeto final do curso de Fullstack Essencial Atlântico Avanti - FB Uni**