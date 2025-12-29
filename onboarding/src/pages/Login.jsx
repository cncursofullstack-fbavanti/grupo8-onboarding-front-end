import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Input from "../components/Input"
import data from "../data/mockData";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const navigateLogin = (u) => {
    if(u.tipo === 'gestor'){
      navigate('/gestor/dashboard');
    } else if(u.tipo === 'colaborador') {
      navigate('/colaborador/tarefas');
    }
  }
  // Verifica se já está logado quando o componente carrega
  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario) {
      navigateLogin(usuario);
    }
  }, []); // [] significa que executa só uma vez ao montar


  const handleSubmit = (e) => {
    e.preventDefault();
    const loggedUser = data.usuarios.find(d => d.email === email && d.senha === password);
    
    if(!loggedUser){
      setErro('Email ou senha incorretos');
      return;
    }
    
    setErro('');
    localStorage.setItem('usuario', JSON.stringify(loggedUser));
    navigateLogin(loggedUser);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
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
          
          <button 
            type="submit"
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          >
            Entrar
          </button>
        </form>
        {erro && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 rounded-lg">
            <p className="text-sm text-red-700 text-center font-medium">⚠️  {erro}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login