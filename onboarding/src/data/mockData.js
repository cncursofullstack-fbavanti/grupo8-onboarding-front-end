const data = {
  usuarios: [
    {
      id: 1,
      nome: "Professor X",
      email: "xavier.charles@xmen.com",
      senha: "icanreadyourmind",
      tipo: "gestor"
    },
    {
      id: 2,
      nome: "Cyclops",
      email: "summers.scott@xmen.com",
      senha: "lookatmyeyes",
      tipo: "colaborador",
      papel: "dev"
    },
    {
      id: 3,
      nome: "Phoenix",
      email: "grey.jean@xmen.com",
      senha: "icanreadyourmindaswellprofessor",
      tipo: "colaborador",
      papel: "po"
    },
    {
      id: 4,
      nome: "Beast",
      email: "mccoy.hank@xmen.com",
      senha: "minhasantquerupita",
      tipo: "colaborador",
      papel: "dev"
    },
    {
      id: 5,
      nome: "Iceman",
      email: "drake.robert@xmen.com",
      senha: "chillout",
      tipo: "colaborador",
      papel: "qa"
    }
  ],

  templates: {
    dev: [
      { id: 1, titulo: "Configurar conta do Git e SSH keys" },
      { id: 2, titulo: "Instalar e configurar ambiente de desenvolvimento local" },
      { id: 3, titulo: "Revisar documentação técnica do projeto" },
      { id: 4, titulo: "Conhecer padrões de código e boas práticas da equipe" },
      { id: 5, titulo: "Configurar acesso aos repositórios" },
      { id: 6, titulo: "Fazer primeiro commit de teste" },
      { id: 7, titulo: "Participar da daily com o time" }
    ],
    qa: [
      { id: 1, titulo: "Configurar ferramentas de teste (Selenium, Jest, etc)" },
      { id: 2, titulo: "Conhecer o fluxo de testes da aplicação" },
      { id: 3, titulo: "Entender pipeline de CI/CD" },
      { id: 4, titulo: "Revisar casos de teste existentes" },
      { id: 5, titulo: "Configurar ambiente de testes" },
      { id: 6, titulo: "Executar suite de testes completa" },
      { id: 7, titulo: "Participar da daily com o time" }
    ],
    po: [
      { id: 1, titulo: "Conhecer roadmap do produto" },
      { id: 2, titulo: "Alinhar expectativas com stakeholders" },
      { id: 3, titulo: "Revisar backlog atual" },
      { id: 4, titulo: "Entender métricas e KPIs do produto" },
      { id: 5, titulo: "Conhecer o processo de discovery" },
      { id: 6, titulo: "Participar de cerimônias ágeis (planning, review, retro)" },
      { id: 7, titulo: "Fazer shadowing com PO anterior ou líder" }
    ]
  },

  tarefas: [
    // Tarefas do Cyclops (Dev - id: 2) - Todas concluídas
    { id: 1, colaborador_id: 2, tarefa_template_id: 1, titulo: "Configurar conta do Git e SSH keys", status: "concluido" },
    { id: 2, colaborador_id: 2, tarefa_template_id: 2, titulo: "Instalar e configurar ambiente de desenvolvimento local", status: "concluido" },
    { id: 3, colaborador_id: 2, tarefa_template_id: 3, titulo: "Revisar documentação técnica do projeto", status: "concluido" },
    { id: 4, colaborador_id: 2, tarefa_template_id: 4, titulo: "Conhecer padrões de código e boas práticas da equipe", status: "concluido" },
    { id: 5, colaborador_id: 2, tarefa_template_id: 5, titulo: "Configurar acesso aos repositórios", status: "concluido" },
    { id: 6, colaborador_id: 2, tarefa_template_id: 6, titulo: "Fazer primeiro commit de teste", status: "concluido" },
    { id: 7, colaborador_id: 2, tarefa_template_id: 7, titulo: "Participar da daily com o time", status: "concluido" },

    // Tarefas da Phoenix (PO - id: 3) - Parcialmente concluídas
    { id: 8, colaborador_id: 3, tarefa_template_id: 1, titulo: "Conhecer roadmap do produto", status: "concluido" },
    { id: 9, colaborador_id: 3, tarefa_template_id: 2, titulo: "Alinhar expectativas com stakeholders", status: "concluido" },
    { id: 10, colaborador_id: 3, tarefa_template_id: 3, titulo: "Revisar backlog atual", status: "pendente" },
    { id: 11, colaborador_id: 3, tarefa_template_id: 4, titulo: "Entender métricas e KPIs do produto", status: "concluido" },
    { id: 12, colaborador_id: 3, tarefa_template_id: 5, titulo: "Conhecer o processo de discovery", status: "pendente" },
    { id: 13, colaborador_id: 3, tarefa_template_id: 6, titulo: "Participar de cerimônias ágeis (planning, review, retro)", status: "pendente" },
    { id: 14, colaborador_id: 3, tarefa_template_id: 7, titulo: "Fazer shadowing com PO anterior ou líder", status: "pendente" },

    // Tarefas do Beast (Dev - id: 4) - Parcialmente concluídas
    { id: 15, colaborador_id: 4, tarefa_template_id: 1, titulo: "Configurar conta do Git e SSH keys", status: "concluido" },
    { id: 16, colaborador_id: 4, tarefa_template_id: 2, titulo: "Instalar e configurar ambiente de desenvolvimento local", status: "pendente" },
    { id: 17, colaborador_id: 4, tarefa_template_id: 3, titulo: "Revisar documentação técnica do projeto", status: "concluido" },
    { id: 18, colaborador_id: 4, tarefa_template_id: 4, titulo: "Conhecer padrões de código e boas práticas da equipe", status: "concluido" },
    { id: 19, colaborador_id: 4, tarefa_template_id: 5, titulo: "Configurar acesso aos repositórios", status: "concluido" },
    { id: 20, colaborador_id: 4, tarefa_template_id: 6, titulo: "Fazer primeiro commit de teste", status: "concluido" },
    { id: 21, colaborador_id: 4, tarefa_template_id: 7, titulo: "Participar da daily com o time", status: "pendente" },

    // Tarefas do Iceman (QA - id: 5) - Maioria pendente
    { id: 22, colaborador_id: 5, tarefa_template_id: 1, titulo: "Configurar ferramentas de teste (Selenium, Jest, etc)", status: "concluido" },
    { id: 23, colaborador_id: 5, tarefa_template_id: 2, titulo: "Conhecer o fluxo de testes da aplicação", status: "pendente" },
    { id: 24, colaborador_id: 5, tarefa_template_id: 3, titulo: "Entender pipeline de CI/CD", status: "pendente" },
    { id: 25, colaborador_id: 5, tarefa_template_id: 4, titulo: "Revisar casos de teste existentes", status: "pendente" },
    { id: 26, colaborador_id: 5, tarefa_template_id: 5, titulo: "Configurar ambiente de testes", status: "pendente" },
    { id: 27, colaborador_id: 5, tarefa_template_id: 6, titulo: "Executar suite de testes completa", status: "pendente" },
    { id: 28, colaborador_id: 5, tarefa_template_id: 7, titulo: "Participar da daily com o time", status: "pendente" }
  ]
}

export default data