import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Opcional si también tienes registro
  const navigate = useNavigate();

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    // Validación básica para un usuario de prueba
    if (username === 'rafajara986@gmail.com' && password === '54321') {
      // Redirigir al usuario a la página principal después del inicio de sesión exitoso
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Función para manejar el registro 
  const handleRegister = (e) => {
    e.preventDefault();
    // Implementa la lógica de registro porsi necesito
    alert('Registro exitoso');
    // Redirigir al usuario a la página principal después de registrarse
    navigate('/');
  };

  // Función para alternar entre el modo de inicio de sesión y registro 
  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{isRegistering ? 'Registro' : 'Inicio de Sesión'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          {isRegistering ? 'Registrar' : 'Iniciar Sesión'}
        </button>
        {isRegistering ? (
          <p className="mt-4 text-center">
            <button type="button" className="text-blue-500" onClick={toggleRegisterMode}>
              ¿Ya tienes cuenta? Inicia sesión
            </button>
          </p>
        ) : (
          <p className="mt-4 text-center">
            <button type="button" className="text-blue-500" onClick={toggleRegisterMode}>
              ¿No tienes cuenta? Regístrate aquí
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;

