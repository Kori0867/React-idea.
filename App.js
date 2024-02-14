import images from './assets/img/images.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={images} alt="Diagnóstico automotriz" style={{ width: '300px', height: 'auto' }} />
        <h1>Diagnóstico automotriz</h1> {/* Encabezado */}
        <form>
          {/* formulario */}
          <label htmlFor="firstName">Nombre:</label>
          <input type="text" id="firstName" name="firstName" /><br/>

          <label htmlFor="lastName">Apellido:</label>
          <input type="text" id="lastName" name="lastName" /><br/>

          <label htmlFor="vehicleType">Tipo de vehículo:</label>
          <select id="vehicleType" name="vehicleType">
            <option value="carroS">Sedan</option>
            <option value="carroC">Compacto</option>
            <option value="Camioneta">Camioneta</option>
            <option value="PickUp">PickUp</option>
            {}
          </select><br/>

          <label htmlFor="licensePlate">Placa:</label>
          <input type="text" id="licensePlate" name="licensePlate" /><br/>

          {/* Botón */}
          <button type="submit">Enviar</button>
          
        </form>
        
      
      </header>
    </div>
  );
}

export default App;
