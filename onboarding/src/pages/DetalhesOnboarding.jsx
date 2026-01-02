import { useEffect } from "react";
import Header from "../components/Header";
import Progress from "../components/Progress";
import data from "../data/mockData"
import { useParams, useNavigate } from "react-router-dom";
import { requireManager } from "../utils/auth";

const DetalhesOnboarding = () => {
  const params = useParams();
  const collab = data.users.find(u => u.id == params.id);
  const tasks = data.tasks.filter(t => t.collaborator_id === collab.id);
  const navigate = useNavigate();

  useEffect(() => {
    requireManager(navigate);
  }, [navigate]);
  
  const progress = () => {
    const completed = tasks.filter(t => t.status === "completed");
    return completed.length / tasks.length;
  }
  
  const backToDashboard = () => {
    navigate('/manager/dashboard');
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
              <img 
                src={collab.avatar} 
                alt={collab.name}
                className="w-45 rounded-l-lg"
              />
              <div className="pr-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {collab.name} <span className='text-gray-400 text-sm uppercase'>{collab.role}</span>
                </h3>
                <ul>
                  <li className="text-sm text-gray-500">
                    {collab.email}
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