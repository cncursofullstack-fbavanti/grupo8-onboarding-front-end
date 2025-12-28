# Sistema de Onboarding - TI

Aplicativo para acompanhamento do processo de onboarding de colaboradores em empresas de TI.

## 📋 Sobre o Projeto

Sistema desenvolvido como trabalho final do curso de Fullstack, que auxilia empresas de TI a gerenciar e acompanhar o onboarding de novos colaboradores do time técnico (Desenvolvedores, QAs e Product Owners).

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

## 🏗️ Arquitetura

### Frontend
- **React** - Interface do usuário
- **Tailwind CSS** - Estilização
- **React Router** - Navegação entre páginas

### Backend
- **Node.js** - Servidor API REST
- **Express** - Framework web
- **JSON** - Armazenamento de dados (arquivo local)

## 📊 Estrutura de Dados

### Templates de Onboarding
Cada papel possui um template pré-definido de tarefas:
- **Dev**: Configurar conta Git, setup ambiente local, revisar padrões de código, etc.
- **QA**: Configurar ferramentas de teste, entender pipeline CI/CD, etc.
- **PO**: Conhecer roadmap, alinhar com stakeholders, etc.

### Status de Tarefas
- **Pendente**: tarefa não concluída
- **Concluído**: tarefa finalizada

## 🚀 Como Executar

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm start
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Tailwind CSS
- Node.js

## 📝 Regras de Negócio

1. Gestor cadastra colaborador e escolhe o papel
2. Sistema aplica template de tarefas automaticamente baseado no papel
3. Gestor pode adicionar tarefas customizadas, mas não pode editar ou remover tarefas do template
4. Colaborador visualiza apenas suas próprias tarefas
5. Tarefas são organizadas em lista linear (sem dependências)
6. Autenticação simplificada por tipo de usuário

## 👥 Tipos de Usuário

- **Gestor**: gerencia colaboradores e acompanha progresso
- **Colaborador**: executa e marca tarefas como concluídas
  - Dev (Desenvolvedor)
  - QA (Quality Assurance)
  - PO (Product Owner)

## 📦 Estrutura do Projeto

```
/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── GestorDashboard.jsx
│   │   │   └── ColaboradorTarefas.jsx
│   │   ├── components/
│   │   └── data/
│   │       └── mockData.js
│   └── package.json
├── backend/
│   ├── data/
│   │   └── data.json
│   ├── routes/
│   └── package.json
└── README.md
```

## 🎓 Contexto Acadêmico

Projeto desenvolvido como avaliação final do curso de Fullstack, aplicando os conhecimentos de:
- Desenvolvimento frontend com React
- Estilização com Tailwind CSS
- Criação de APIs REST com Node.js
- Manipulação de dados em JSON
- Arquitetura de aplicações web

---

**Desenvolvido como projeto final do curso de Fullstack**