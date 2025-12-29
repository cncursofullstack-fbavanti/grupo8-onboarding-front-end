import React from "react";
import Header from "../components/Header";
import data from "../data/mockData";
import Progress from "../components/Progress";

const GestorDashBoard = () => {
  const team = data.usuarios.filter((u) => u.tipo === "colaborador");
  const tasks = data.tarefas;

  const progress = (user) => {
    const uTasks = tasks.filter((task) => user.id === task.colaborador_id);
    const completed = uTasks.filter((task) => task.status === "concluido");

    return completed.length / uTasks.length;
  }
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-200 p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Colaboradores em Onboarding
          </h2>
    
          {/* Grid de cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((colaborador) => (
              <div key={colaborador.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4">
                  <img 
                    src={colaborador.avatar} 
                    alt={colaborador.nome}
                    className="w-30 rounded-l-lg"
                  />
                  <div className="pr-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {colaborador.nome}
                    </h3>
                    <ul>
                      <li className="text-sm text-gray-500">
                        {colaborador.email}
                      </li>
                      <li className="text-sm text-gray-500 uppercase">
                        {colaborador.papel}
                      </li>
                    </ul>
                    <Progress percentage={progress(colaborador)} />
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