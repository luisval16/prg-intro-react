import Inicio from "./inicio";
import Encabezado from "./Encabezado";
import { Routes, Route } from 'react-router-dom';
import Contacto from "./Contacto";
import Productos from "./Productos";

function App() {
    return ( <
        >
        <
        Encabezado / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Inicio / > }
        /> <
        Route path = "/contacto"
        element = { < Contacto / > }
        /> <
        Route path = "/productos"
        element = { < Productos / > }
        /> <
        /Routes> <
        />
    );
}

export default App;