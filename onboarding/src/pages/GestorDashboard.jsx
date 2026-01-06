import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import Progress from "../components/Progress";
import { requireManager } from "../utils/auth";
import { api } from '../services/api';
import Avatar from '../components/Avatar';

const GestorDashBoard = () => {
  const [team, setTeam] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    requireManager(navigate);
    loadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Função para carregar dados
  const loadData = async () => {
    try {
      setLoading(true);
      const [usersData, tasksData] = await Promise.all([
        api.getUsers(),
        api.getTasks()
      ]);
      
      const collaborators = usersData.filter(u => u.type === "collaborator");
      setTeam(collaborators);
      setTasks(tasksData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const progress = (user) => {
    const uTasks = tasks.filter((task) => task.collaborator_id === user.id);
    if (uTasks.length === 0) return null; // Muda de 0 para null
    const completed = uTasks.filter((task) => task.status === "completed");
    return completed.length / uTasks.length;
  }

  const progressoGeral = () => {
    const totalTarefas = team.reduce((acc, collaborator) => {
      const uTasks = tasks.filter(t => t.collaborator_id === collaborator.id);
      return acc + uTasks.length;
    }, 0);
    
    if (totalTarefas === 0) return 0;
    
    const tarefasConcluidas = team.reduce((acc, collaborator) => {
      const uTasks = tasks.filter(t => t.collaborator_id === collaborator.id);
      const completed = uTasks.filter(t => t.status === "completed");
      return acc + completed.length;
    }, 0);
    
    return tarefasConcluidas / totalTarefas;
  }

  const verDetalhes = (id) => {
    navigate(`/manager/onboarding/${id}`);
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-stone-200 p-6 flex items-center justify-center">
          <p className="text-gray-600 text-lg">Carregando...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-200 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Collaborators Onboarding
          </h2>
          
          {/* Progresso Geral */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-37 text-6xl font-bold text-yellow-600 text-center">
                {Math.round(progressoGeral() * 100)}%
              </div>
              <div className='flex-1'>
                <h3 className="text-xl font-semibold text-gray-800">Team Overall Progress</h3>
                <div className="flex-1">
                  <Progress percentage={progressoGeral()} size="large" showLabel={false} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Grid de cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((collaborator) => (
              <div key={collaborator.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <Avatar src={collaborator.avatar} name={collaborator.name} size="card" />
                  <div className="pr-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {collaborator.name} <span className='text-gray-400 text-sm uppercase'>{collaborator.role}</span>
                    </h3>
                    <ul>
                      <li className="text-sm text-gray-500">
                        {collaborator.email}
                      </li>
                    </ul>
                    <Progress percentage={progress(collaborator)} />
                    <button 
                      className="mt-3 px-4 py-2 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
                      onClick={() => verDetalhes(collaborator.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default GestorDashBoard