import React, { useState } from 'react';

const RegistrationForm = () => {
const [name, setName] = useState('');
const [cedula, setCedula] = useState('');
const [telefono, setTelefono] = useState('');
const [message, setMessage] = useState('');
const [facultad, setFacultad] = useState('');

// manejo de errores
const [errorCedula, setErrorCedula] = useState('');
const [errorTelefono, setErrorTelefono] = useState('');


const handleCedula = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setCedula(value);
    
    // Validación: debe ser un número de 7 a 8 dígitos
    if(value.length < 7 || value.length > 8 || isNaN(value)) {
       setErrorCedula('La cédula debe contener entre 7 y 8 dígitos numéricos.');
    }else{
       setErrorCedula('');
    }
}

const handleTelefono = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setTelefono(value);

    if(value.length != 11 || isNaN(value) || value[0] != 0 && value[1] != 4) {
        
        setErrorTelefono('Telefono invalido');
        
    }else{
       setErrorTelefono('');
    }
}





const handleSubmit = (e) => {
    e.preventDefault();
   
    // Aquí podrías agregar la lógica para enviar los datos a un servidor
    setMessage('Registrado correctamente!');

};

return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
      {message && <div className="mb-4 text-green-500 text-center">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Cedula de identidad
          </label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={handleCedula}
            required
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring`}
          />
            {errorCedula && <p className="mt-2 text-red-500 text-xs italic">{errorCedula}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Telefono
          </label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={handleTelefono}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
          />
            {errorTelefono && <p className="mt-2 text-red-500 text-xs italic">{errorTelefono}</p>}

        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" >
            Facultad
          </label>
            <select 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring"
                value={facultad}
                onChange={(e) => setFacultad(e.target.value)}
                
                >
                <option value="">Escoge tu facultad</option>
                <option value="Facyt">Facyt</option>
                <option value="Faces">Faces</option>
                <option value="Facing">Facing</option>
                <option value="Medicina">Medicina</option>
                <option value="Derecho">derecho</option>

            </select>


        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
            Registrarse
        </button>
      </form>
    </div>
  </div>
);
};

export default RegistrationForm;