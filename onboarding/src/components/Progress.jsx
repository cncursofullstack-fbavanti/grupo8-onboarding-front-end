const Progress = ({ percentage, size = "small", showLabel = true }) => {
  const heightClass = size === "large" ? "h-4" : "h-2";
  const textSize = size === "large" ? "text-base" : "text-xs";
  
  // Se percentage for null ou NaN, não há tarefas
  if (percentage === null || isNaN(percentage)) {
    if (showLabel) {
      return (
        <div className="mt-3">
          <p className="text-sm text-gray-500 italic">
            Tarefas ainda não foram atribuídas
          </p>
        </div>
      );
    }
    return null; // Se não mostrar label, não renderiza nada
  }
  
  return (
    <div className="mt-3">
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className={`${textSize} font-medium text-gray-600`}>Progresso</span>
          <span className={`${textSize} font-semibold text-yellow-600`}>
            {Math.round(percentage * 100)}%
          </span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${heightClass}`}>
        <div 
          className={`bg-yellow-500 ${heightClass} rounded-full transition-all`}
          style={{ width: `${percentage * 100}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Progress