import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import GestorDashBoard from './pages/GestorDashboard';
import CadastroColaborador from './pages/CadastroColaborador'
import DetalhesOnboarding from './pages/DetalhesOnboarding';
import ColaboradorTarefas from './pages/ColaboradorTarefas';
import NotFound from './pages/NotFound'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manager/dashboard" element={<GestorDashBoard />} />
        <Route path="/manager/assign" element={<CadastroColaborador />} />
        <Route path="/manager/onboarding/:id" element={<DetalhesOnboarding />} />
        <Route path="/collaborator/tasks" element={<ColaboradorTarefas />} />
        
        {/* 404 Route - it has to be the last one */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
