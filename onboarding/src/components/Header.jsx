import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/imgs/SchoolLogo.png"
import { getLoggedUser, logout, isManager } from '../utils/auth'; 
import { Menu, X, Home, UserPlus, LogOut, ListTodo } from 'lucide-react'

const Header = () => {
  const user = getLoggedUser();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const headerLogout = () => {
    logout()
    navigate('/');
  }
  
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
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative"> {/* ❌ Adiciona relative */}
        <div className='flex items-center gap-5'>
          <img src={logo} alt="Xavier's School for Gifted Youngsters" className='w-20' />
          <h1 className="text-xl font-bold text-gray-800">Sistema de Onboarding</h1>
        </div>
        
        <div className="flex items-center gap-4 relative">
          <img src={user.avatar} alt="Avatar do Usuário" className='rounded-full w-10 h-10 border-2 border-gray-300' />
          <span className="text-gray-700">{user.name}</span>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-2 text-sm text-white bg-yellow-600 rounded-lg hover:bg-yellow-700"
          >
            {menuOpen ? <X className='w-4 h-4' /> : <Menu className='w-4 h-4' />} 
          </button>
          {/* Menu dropdown - FORA do container interno */}
          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50"> 
              <nav className="px-4 py-4 space-y-2">
                {isManager() && ( 
                  <>
                    <button 
                      onClick={() => { navigate('/manager/dashboard'); setMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <Home className="w-5 h-5" />
                      Dashboard
                    </button>
                    <button 
                      onClick={() => { navigate('/manager/assign'); setMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg text-left whitespace-nowrap"
                    >
                      <UserPlus className="w-5 h-5" />
                      Cadastrar Colaborador
                    </button>
                  </>
                )}
                
                {user.type === 'collaborator' && (
                  <button 
                    onClick={() => { navigate('/collaborator/tasks'); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                  >
                    <ListTodo className="w-5 h-5" />
                    Minhas Tarefas
                  </button>
                )}
                
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button 
                    onClick={() => { headerLogout(); setMenuOpen(false); }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <LogOut className="w-5 h-5" />
                    Sair
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>

    </header> 
  )
}

export default Header;