import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-200">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-9xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-6">
          A página que você está procurando não existe ou foi movida.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
        >
          Voltar ao início
        </button>
      </div>
    </div>
  )
}

export default NotFound