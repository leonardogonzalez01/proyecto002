import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store'
import Rutas from "./views/Rutas";

function App() {
    return (
        <Provider store={store}>
            <Rutas/>
        </Provider>
    );
}

export default App;
