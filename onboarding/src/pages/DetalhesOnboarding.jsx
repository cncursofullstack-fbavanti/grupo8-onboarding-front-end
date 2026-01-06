import { useState, useEffect } from "react"; // NOVO: adiciona useState
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Progress from "../components/Progress";
import { requireManager } from "../utils/auth";
import { api } from '../services/api'; // NOVO
import Avatar from '../components/Avatar';

const DetalhesOnboarding = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [collaborator, setCollaborator] = useState(null); // NOVO
  const [tasks, setTasks] = useState([]); // NOVO
  const [loading, setLoading] = useState(true); // NOVO

  useEffect(() => {
    requireManager(navigate);
    loadData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // NOVO: Função para carregar dados
  const loadData = async () => {
    try {
      setLoading(true);
      const [userData, tasksData] = await Promise.all([
        api.getUser(id),
        api.getTasks(id)
      ]);
      
      setCollaborator(userData);
      setTasks(tasksData);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setLoading(false);
    }
  };

  const progress = () => {
    if (tasks.length === 0) return null; // Muda de 0 para null
    const completed = tasks.filter(t => t.status === "completed");
    return completed.length / tasks.length;
  }

  const backToDashboard = () => {
    navigate('/manager/dashboard');
  }

  // NOVO: Loading state
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

  // NOVO: Se não encontrou colaborador
  if (!collaborator) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-stone-200 p-6 flex items-center justify-center">
          <p className="text-gray-600 text-lg">Colaborador não encontrado</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-200 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Botão Voltar */}
          <button 
            onClick={backToDashboard}
            className="mb-4 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
          >
            ← Voltar
          </button>

          {/* Header do Colaborador com Progresso */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mb-6">
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
                <Progress percentage={progress()} />
              </div>
            </div>
          </div>

          {/* Lista de Tarefas */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tarefas</h3>
            <ul className="space-y-3">
              {tasks.map(t => (
                <li 
                  key={t.id} 
                  className="flex items-start gap-3 p-3 border-l-4 border-gray-200"
                  style={{ 
                    borderLeftColor: t.status === "completed" ? "#eab308" : "#d1d5db" 
                  }}
                >
                  <span className={`flex-1 ${t.status === "completed" ? "line-through text-gray-400" : "text-gray-700"}`}>
                    {t.title}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    t.status === "completed" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-gray-100 text-gray-600"
                  }`}>
                    {t.status === "completed" ? "Concluída" : "Pendente"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetalhesOnboarding