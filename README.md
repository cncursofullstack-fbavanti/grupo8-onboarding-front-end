# Sistema de Onboarding - Frontend

Interface web para acompanhamento do processo de onboarding de colaboradores em empresas de TI.

## 📋 Sobre o Projeto

Frontend do sistema desenvolvido como trabalho final do curso de Fullstack, que auxilia empresas de TI a gerenciar e acompanhar o onboarding de novos colaboradores do time técnico (Desenvolvedores, QAs e Product Owners).

Este frontend consome uma API REST desenvolvida em Node.js para persistência e gerenciamento de dados.

## 🎯 Funcionalidades

### Perfil Gestor
- Visualizar dashboard com todos os colaboradores em onboarding
- Acompanhar progresso individual e geral do time
- Visualizar detalhes do onboarding de cada colaborador
- Cadastrar novos colaboradores com aplicação automática de templates
- Menu de navegação responsivo
- Proteção de rotas (acesso exclusivo para gestores)

### Perfil Colaborador (Dev, QA, PO)
- Visualizar lista de tarefas do próprio onboarding
- Marcar tarefas como concluídas ou pendentes (persistência via API)
- Acompanhar progresso pessoal em tempo real
- Tratamento de lista vazia quando não há tarefas atribuídas
- Proteção de rotas (acesso exclusivo para colaboradores)

### Funcionalidades Gerais
- Sistema de autenticação integrado com API
- Persistência de sessão via localStorage
- Menu de navegação dropdown com ícones
- Página 404 para rotas inexistentes
- Avatares com fallback para iniciais do nome
- Design responsivo e temático (cores dos X-Men)
- Loading states durante requisições à API
- Tratamento de erros de conexão

## 🛠️ Tecnologias Utilizadas

- React 18
- Tailwind CSS
- React Router DOM 6
- Lucide React (ícones)
- JavaScript (ES6+)
- Fetch API (requisições HTTP)
- LocalStorage (sessão do usuário)
- Vite (build tool)

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado (versão 16+)
- Backend rodando em `http://localhost:3000` ([ver repositório do backend](link-do-repo-backend))

### Instalação

```bash
# Clonar o repositório
git clone [url-do-repositorio]
cd frontend

# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

O frontend estará disponível em `http://localhost:5173`

## 🔗 Integração com Backend

O frontend consome a API REST do backend através do serviço `src/services/api.js`.

**Configuração da URL da API:**
Por padrão, a URL está configurada para `http://localhost:3000/api`. Se precisar alterar:

```javascript
// src/services/api.js
const API_URL = 'http://localhost:3000/api'; // Altere aqui se necessário
```

**Endpoints consumidos:**
- `POST /api/auth/login` - Autenticação
- `GET /api/users` - Lista usuários
- `GET /api/users/:id` - Busca usuário
- `POST /api/users` - Cria colaborador
- `GET /api/tasks` - Lista tarefas
- `GET /api/tasks?collaborator_id=:id` - Tarefas por colaborador
- `PATCH /api/tasks/:id` - Atualiza status da tarefa

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
├── services/
│   └── api.js
├── utils/
│   └── auth.js
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
- Botão de logout com limpeza de sessão
- Proteção automática de rotas

### Input
- Componente reutilizável de input com label
- Suporta diferentes tipos (email, password, text)
- Estados de loading/disabled
- Validação HTML5 integrada
- Estilização consistente com Tailwind

### Progress
- Barra de progresso visual animada
- Suporta diferentes tamanhos (small, large)
- Tratamento de valores inválidos (null, NaN)
- Mensagem customizada quando não há tarefas atribuídas
- Formatação de porcentagem automática

## 📄 Páginas

### Login
- Autenticação via API
- Validação de credenciais
- Redirecionamento automático se já logado
- Diferenciação entre gestor e colaborador
- Mensagens de erro estilizadas
- Loading state durante login

### Dashboard Gestor
- Carregamento de dados via API
- Progresso geral do time (visual destacado)
- Grid responsivo de colaboradores
- Cards com avatar, nome, papel, email e progresso individual
- Botão para visualizar detalhes de cada colaborador
- Atualização automática ao cadastrar novos colaboradores

### Cadastro de Colaborador
- Formulário integrado com API
- Validação de campos obrigatórios
- Verificação de email duplicado (backend)
- Seleção de papel (Dev, QA, PO)
- Aplicação automática de template de tarefas
- Loading state durante cadastro
- Tratamento de erros de criação

### Detalhes do Onboarding
- Visualização completa das tarefas via API
- Card com informações do colaborador
- Barra de progresso detalhada
- Lista de tarefas com status visual
- Indicadores coloridos por status
- Botão voltar para dashboard

### Tarefas do Colaborador
- Lista interativa de tarefas carregadas da API
- Checkboxes para marcar conclusão
- Atualização em tempo real do progresso
- Persistência de mudanças via API
- Tratamento especial para lista vazia
- Loading state durante carregamento

### Página 404
- Design amigável para rotas inexistentes
- Botão para retornar à página inicial
- Visual consistente com o tema do sistema

## 🔒 Segurança e Autenticação

### Frontend
- Proteção de rotas com `useEffect` e redirecionamento
- Funções utilitárias: `requireManager()`, `requireCollaborator()`
- Armazenamento seguro de sessão via localStorage
- Limpeza de dados sensíveis ao logout

### Integração com Backend
- Headers customizados com tipo de usuário
- Tratamento de respostas 401 (não autorizado) e 403 (acesso negado)
- Validação de permissões no servidor

## 📝 Regras de Negócio

1. Gestor tem acesso exclusivo ao dashboard, cadastro e visualização de colaboradores
2. Colaborador tem acesso exclusivo à própria lista de tarefas
3. Templates de 7 tarefas são aplicados automaticamente por papel (Dev/QA/PO)
4. Sistema mantém sessão via localStorage
5. Logout limpa dados da sessão e redireciona para login
6. Proteção de rotas impede acessos não autorizados
7. Dados são persistidos via API REST no backend
8. Mudanças de status de tarefas são salvas imediatamente
9. Novos colaboradores aparecem automaticamente no dashboard

## 🔄 Fluxo de Dados

```
Usuário → Frontend → API Service → Backend API → JSON File
                ↓                        ↓
            localStorage            data.json
```

1. Usuário interage com interface React
2. Componente chama função do `api.js`
3. Requisição HTTP para backend
4. Backend processa e retorna dados
5. Frontend atualiza estado e renderiza
6. Sessão mantida em localStorage

## 🎨 Design System

### Cores Principais
- **Amarelo (Tema X-Men)**: `yellow-500`, `yellow-600` - Elementos interativos e progresso
- **Cinza**: `stone-200` - Background geral
- **Branco**: Cards e containers
- **Vermelho**: `red-600` - Botão de logout e alertas
- **Verde**: `green-600` - Status de conclusão

### Tipografia
- Títulos: `text-3xl`, `font-bold`
- Subtítulos: `text-xl`, `font-semibold`
- Corpo: `text-base`, `text-sm`
- Labels: `text-xs`, `font-medium`

### Estados de Interface
- **Loading**: Spinners e mensagens "Carregando..."
- **Erro**: Cards vermelhos com ícone de alerta
- **Sucesso**: Transições suaves e feedback visual
- **Vazio**: Mensagens amigáveis para estados vazios

## 👥 Tipos de Usuário

- **Gestor (Manager)**: Acesso completo à gestão de colaboradores e visualização de progresso
- **Colaborador (Collaborator)**: Acesso à própria lista de tarefas e gestão do progresso pessoal
  - **Dev** (Desenvolvedor): 7 tarefas focadas em setup técnico
  - **QA** (Quality Assurance): 7 tarefas focadas em testes
  - **PO** (Product Owner): 7 tarefas focadas em produto e stakeholders

## 🐛 Tratamento de Erros

- Erros de conexão: Mensagens amigáveis
- Erros 401/403: Redirecionamento para login
- Erros 404: Página customizada
- Erros de validação: Feedback inline nos formulários
- Console.log detalhado para debugging

## 🎓 Contexto Acadêmico

Projeto desenvolvido como avaliação final do curso de Fullstack, aplicando os conhecimentos de:
- Desenvolvimento de interfaces com React e componentização
- Estilização avançada com Tailwind CSS
- Gerenciamento de estado com Hooks (useState, useEffect)
- Roteamento de páginas com React Router DOM
- Consumo de APIs REST com Fetch
- Persistência de dados com LocalStorage
- Proteção de rotas e controle de acesso
- Componentização e reutilização de código
- Design responsivo e acessível
- Integração frontend-backend

## 📚 Aprendizados Técnicos

- Estruturação de projetos React escaláveis
- Padrões de componentes reutilizáveis
- Gerenciamento de estado local e global
- Implementação de fluxos de autenticação
- Consumo de APIs REST e tratamento de respostas assíncronas
- Proteção e validação de rotas
- Design de interfaces intuitivas
- Tratamento de casos extremos (listas vazias, dados inválidos, erros de rede)
- Uso efetivo de Tailwind CSS para estilização rápida
- Integração frontend-backend completa
- Loading states e feedback visual ao usuário

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção

## 📝 Notas Importantes

- **Backend obrigatório**: O frontend precisa do backend rodando para funcionar
- **CORS**: O backend deve estar configurado para aceitar requisições do frontend
- **LocalStorage**: Sessão é mantida apenas no navegador atual
- **Segurança**: Implementação básica adequada para ambiente acadêmico

---

**Desenvolvido como projeto final do curso de Fullstack Essencial Atlântico Avanti - FB Uni**