import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Input from "../components/Input"
import { getLoggedUser, setLoggedUser } from '../utils/auth';
import { api } from '../services/api'; 
import logo from "../assets/imgs/SchoolLogo.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();
  
  const navigateLogin = (u) => {
    if(u.type === 'manager'){
      navigate('/manager/dashboard');
    } else if(u.type === 'collaborator') {
      navigate('/collaborator/tasks');
    }
  }
  
  useEffect(() => {
    const user = getLoggedUser();
    if(user) {
      navigateLogin(user);
    }
  }, []);

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setLoading(true); 
    setErro(''); 
    
    try {
      const data = await api.login(email, password); 
      
      if (data.error) {
        setErro(data.error);
        return;
      }
      
      setLoggedUser(data.user);
      navigateLogin(data.user);
    } catch (error) {
      console.error('Erro no login:', error);
      setErro('Erro ao conectar com o servidor');
    } finally {
      setLoading(false); 
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <img src={logo} alt="Xavier's School for Gifted Youngsters" className='w-50 mx-auto mb-4' />
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
            disabled={loading} 
          />
          
          <Input 
            label="Senha"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="***"
            required
            disabled={loading} 
          />
          
          <button 
            type="submit"
            disabled={loading} 
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        
        {erro && (
          <div className="mt-4 p-3 bg-red-100 border border-red-400 rounded-lg">
            <p className="text-sm text-red-700 text-center font-medium">⚠️ {erro}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login