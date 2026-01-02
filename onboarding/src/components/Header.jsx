import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/imgs/SchoolLogo.png"
import { getLoggedUser, logout } from '../utils/auth';

const Header = () => {
  const user = getLoggedUser();
  const navigate = useNavigate();
  
  const headerLogout = () => {
    logout()
    navigate('/');
  }
  
  // Se não tiver usuário, não renderiza nada (ou redireciona)
   useEffect(() => {
    if(!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if(!user) {
    return null;
  }
  
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className='flex items-center gap-5'>
          <img src={logo} alt="Xavier's School for Gifted Youngsters" className='w-20' />
          <h1 className="text-xl font-bold text-gray-800">Sistema de Onboarding</h1>
        </div>
        <div className="flex items-center gap-4">
          <img src={user.avatar} alt="Avatar do Usuário" className='rounded-full w-10 h-10 border-2 border-gray-300' />
          <span className="text-gray-700">{user.name}</span>
          <button 
            onClick={headerLogout}
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