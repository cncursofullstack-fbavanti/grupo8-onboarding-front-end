const Avatar = ({ src, name, size = "md" }) => {
  const sizeClasses = {
    sm: {
      container: "w-8 h-8",
      text: "text-xs"
    },
    md: {
      container: "w-10 h-10",
      text: "text-sm"
    },
    lg: {
      container: "w-20 h-20",
      text: "text-3xl"
    },
    card: {
      container: "w-45 h-45",
      text: "text-6xl"
    }
  };

  const { container, text } = sizeClasses[size];

  if (src) {
    return (
      <img 
        src={src} 
        alt={name}
        className={`${container} ${size === 'card' ? 'rounded-l-lg' : 'rounded-full'}`}
      />
    );
  }

  return (
    <div className={`${container} ${size === 'card' ? 'rounded-l-lg' : 'rounded-full'} border-2 border-gray-300 bg-gray-200 flex items-center justify-center`}>
      <span className={`${text} text-gray-500 font-bold`}>
        {name?.charAt(0).toUpperCase() || '?'}
      </span>
    </div>
  );
};

export default Avatar;