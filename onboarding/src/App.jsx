import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'
import GestorDashBoard from './pages/GestorDashboard';
import CadastroColaborador from './pages/CadastroColaborador'
import DetalhesOnboarding from './pages/DetalhesOnboarding';
import ColaboradorTarefas from './pages/ColaboradorTarefas';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gestor/dashboard" element={<GestorDashBoard />} />
        <Route path="/gestor/cadastro" element={<CadastroColaborador />} />
        <Route path="/gestor/onboarding/:id" element={<DetalhesOnboarding />} />
        <Route path="/colaborador/tarefas" element={<ColaboradorTarefas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
