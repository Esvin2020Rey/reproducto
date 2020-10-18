import { connect } from 'react-redux'
import { actions } from  '../../../redux/modules/productos/productos'

import Products from './ListProductos'
import Productos from './Productos'

const ms2p = (state) => {
  return {
    ...state.producto,
  };
};

const md2p = { ...actions };

//conexion de listar producto

  const ListProducts = connect(ms2p, md2p)(Products);
  
//coneccion de creacion de producto

const CreateProducts = connect(ms2p, md2p)(Productos);


  export const connectionProductos = {
    ListProducts,
    CreateProducts
  }