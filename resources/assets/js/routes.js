import Dashboard from './components/pages/Dashboard.vue';
import Cliente from './components/pages/cliente/Cliente';
import ListaCliente from './components/pages/cliente/Listar';
import CrearCliente from './components/pages/cliente/Crear';
import Calendario from './components/pages/Calendario/Candelario';

export default [
    {
        path : '/',
        name : 'Dashboard',
        component: Dashboard
    },{
        path : '/cliente',
        component : Cliente,
        children: [{
            path: '/',
            component: ListaCliente
        },{
            path: 'crear',
            component: CrearCliente
        }]
    },{
        path : '/Calendario',
        component : Calendario,
        children :[{
            path: '/',
            component  : Calendario
        }]
    }
];