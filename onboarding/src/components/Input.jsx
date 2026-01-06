const Input = ({ label, type, id, value, onChange, placeholder, required, disabled }) => { 
  return (
    <div>
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input 
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:bg-gray-100 disabled:cursor-not-allowed" // adiciona classes disabled
        placeholder={placeholder}
        required={required}
        autoComplete={type === 'password' ? 'current-password' : type}
        disabled={disabled} 
      />
    </div>
  )
}

export default Input