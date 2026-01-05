import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Progress from "../components/Progress";
import { getLoggedUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import data from "../data/mockData"

const ColaboradorTarefas = () => {
  const navigate = useNavigate();
  const loggedUser = getLoggedUser();
  const [tasks, setTasks] = useState(
    data.tasks.filter(t => t.collaborator_id === loggedUser?.id)
  );

  useEffect(() => {
    if (!loggedUser) {
      navigate('/');
    }
  }, [loggedUser, navigate]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id 
        ? { ...t, status: t.status === "completed" ? "pending" : "completed" }
        : t
    ));
  }

  const progress = () => {
    if (tasks.length === 0) return 0;
    const completed = tasks.filter(t => t.status === "completed");
    return completed.length / tasks.length;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-200 p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Minhas Tarefas de Onboarding
          </h2>

          {/* Card de Progresso */}
          {tasks.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Seu progresso</h3>
              <Progress percentage={progress()} size="large" showLabel={true} />
            </div>
          )}

          {/* Lista de Tarefas ou Mensagem Vazia */}
          {tasks.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-500 text-lg mb-2">
                Você ainda não possui tarefas de onboarding.
              </p>
              <p className="text-gray-400 text-sm">
                Aguarde a atribuição de tarefas pelo gestor.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-3">
                {tasks.map(t => (
                  <li key={t.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded transition-colors">
                    <input 
                      type="checkbox" 
                      checked={t.status === "completed"}
                      onChange={() => toggleTask(t.id)}
                      className="mt-1 w-5 h-5 text-yellow-500 rounded focus:ring-2 focus:ring-yellow-400"
                    />
                    <span className={`flex-1 ${t.status === "completed" ? "line-through text-gray-400" : "text-gray-700"}`}>
                      {t.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ColaboradorTarefas