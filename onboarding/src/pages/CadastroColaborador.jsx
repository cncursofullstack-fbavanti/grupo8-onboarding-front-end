import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import { requireManager } from "../utils/auth";
import { api } from '../services/api'; // NOVO

const CadastroColaborador = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false); // NOVO
  const [error, setError] = useState(''); // NOVO

  useEffect(() => {
    requireManager(navigate);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async (e) => { // NOVO: async
    e.preventDefault();
    
    try {
      setLoading(true);
      setError('');
      
      // Chama API
      const data = await api.createUser({
        name,
        email,
        password,
        role
      });
      
      if (data.error) {
        setError(data.error);
        return;
      }
      
      // Sucesso - redireciona
      console.log('Usuário criado:', data);
      navigate('/manager/dashboard');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setError('Erro ao criar colaborador. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-stone-200 p-6">
        <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Adicione um novo colaborador
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
            <Input 
              label="Nome"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              required
              disabled={loading}
            />
            
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

            <div>
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-700">
                Papel
              </label>
              <select 
                name="role" 
                id="role" 
                value={role} 
                onChange={e => setRole(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                required
                disabled={loading}
              >
                <option value="">Selecione um papel</option>
                <option value="po">Product Owner</option>
                <option value="dev">Desenvolvedor</option>
                <option value="qa">Analista de Testes</option>
              </select>
            </div>
            
            {error && (
              <div className="p-3 bg-red-100 border border-red-400 rounded-lg">
                <p className="text-sm text-red-700 text-center font-medium">⚠️ {error}</p>
              </div>
            )}
            
            <div className="flex gap-4 justify-end">
              <button 
                type="button"
                onClick={() => navigate('/manager/dashboard')}
                className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                disabled={loading}
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="px-6 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CadastroColaborador