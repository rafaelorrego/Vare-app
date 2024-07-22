import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al iniciar sesión');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registro exitoso');
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al registrarse');
    }
  };

  const toggleRegisterMode = () => {
    setIsRegistering(!isRegistering);
    setError('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">{isRegistering ? 'Registro' : 'Inicio de Sesión'}</h2>
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        {error && <p className="text-red-500">{error}</p>}
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
