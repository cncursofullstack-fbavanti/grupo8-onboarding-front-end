import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import data from "../data/mockData";
import Progress from "../components/Progress";

const GestorDashBoard = () => {
  const team = data.usuarios.filter((u) => u.tipo === "colaborador");
  const tasks = data.tarefas;
  const navigate = useNavigate();

  const progress = (user) => {
    const uTasks = tasks.filter((task) => user.id === task.colaborador_id);
    const completed = uTasks.filter((task) => task.status === "concluido");

    return completed.length / uTasks.length;
  }

  const progressoGeral = () => {
    const totalTarefas = team.reduce((acc, colaborador) => {
    const uTasks = tasks.filter(t => t.colaborador_id === colaborador.id);
    return acc + uTasks.length;
  }, 0);
    
  const tarefasConcluidas = team.reduce((acc, colaborador) => {
      const uTasks = tasks.filter(t => t.colaborador_id === colaborador.id);
      const completed = uTasks.filter(t => t.status === "concluido");
      return acc + completed.length;
  }, 0);
    
    return tarefasConcluidas / totalTarefas;
  }

  const verDetalhes = (id) => {
    navigate(`/gestor/onboarding/${id}`);
  }
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-200 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Colaboradores em Onboarding
          </h2>

          {/* Progresso Geral */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Progresso Geral do Time</h3>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Progress percentage={progressoGeral()} size="large" showLabel={false} />
              </div>
              <span className="text-2xl font-bold text-yellow-600">
                {Math.round(progressoGeral() * 100)}%
              </span>
            </div>
          </div>

          {/* Grid de cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((colaborador) => (
              <div key={colaborador.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <img 
                    src={colaborador.avatar} 
                    alt={colaborador.nome}
                    className="w-45 rounded-l-lg"
                  />
                  <div className="pr-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {colaborador.nome} <span className='text-gray-400 text-sm uppercase'>{colaborador.papel}</span>
                    </h3>
                    <ul>
                      <li className="text-sm text-gray-500">
                        {colaborador.email}
                      </li>
                    </ul>
                    <Progress percentage={progress(colaborador)} />
                    <button 
                      className="mt-3 px-4 py-2 text-sm text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
                      onClick={() => verDetalhes(colaborador.id)}
                    >
                      Ver Detalhes
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