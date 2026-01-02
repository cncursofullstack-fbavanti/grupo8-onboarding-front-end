import { useEffect, useState } from "react";
import Header from "../components/Header";
import { requireManager } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input"
import data from "../data/mockData"

const CadastroColaborador = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    requireManager(navigate);
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Gera novo ID
    const maxId = Math.max(...data.users.map(u => u.id));
    const newUserId = maxId + 1;
    
    // Cria novo usuário
    const newUser = {
      id: newUserId,
      name: name,
      email: email,
      password: password,
      type: "collaborator",
      role: role,
      avatar: ""
    }
    
    // Busca template de tarefas
    const taskTemplate = data.templates[role];
    
    // Cria tarefas para o novo usuário
    const maxTaskId = Math.max(...data.tasks.map(t => t.id));
    const newTasks = taskTemplate.map((template, index) => ({
      id: maxTaskId + index + 1,
      collaborator_id: newUserId,
      template_task_id: template.id,
      title: template.title,
      status: "pending"
    }));
    
    // AVISO: Dados temporários - somem ao recarregar
    console.log('Novo usuário:', newUser);
    console.log('Novas tarefas:', newTasks);
    
    // Redireciona
    navigate('/manager/dashboard');
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-200 p-6">
        <div className="w-full p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Adicione um novo colaborador
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
            <Input 
              label="Nome"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              required
            />
            
            <Input 
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
            />
            
            <Input 
              label="Senha"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="***"
              required
            />

            <div>
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700">
                Papel
              </label>
              <select 
                name="role" 
                id="role" 
                value={role} 
                onChange={e => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              >
                <option value="">Selecione um papel</option>
                <option value="po">Product Owner</option>
                <option value="dev">Desenvolvedor</option>
                <option value="qa">Analista de Testes</option>
              </select>
            </div>
            
            <div className="flex gap-4 justify-end">
              <button 
                type="button"
                onClick={() => navigate('/manager/dashboard')}
                className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="px-6 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CadastroColaborador