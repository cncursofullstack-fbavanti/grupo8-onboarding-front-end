import { useNavigate } from 'react-router-dom';

const Header = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem('usuario');
    navigate('/');
  }
  
  // Se não tiver usuário, não renderiza nada (ou redireciona)
  if(!usuario) {
    return null;
  }
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Sistema de Onboarding</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700">{usuario.nome}</span>
          <button 
            onClick={logout}
            className="px-4 py-2 text-sm text-white bg-red-600 rounded-lg hover:bg-red-700"
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;