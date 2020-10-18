/* Actions of Industry  */

import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SUBMIT = 'COMPANY_SUBMIT';
const LOADER = 'COMPANY_LOADER';
const SET_DATAC = 'SET_DATAC';



export const constants = {
    SUBMIT,
};


export const setLoader = loader => ({
    type: LOADER,
    loader,
});

const setData = data => ({
    type: SET_DATAC,
    data,
});


const formatData = ( values ) => {

    return {
        nombre: values.nombre,
        description: values.description,
        cantidad: values.cantidad,
    }

}


const onSubmit = () => (dispatch, getStore) => {
    const { values } = getStore().form.productosForm;
    console.log(values)
    const data = formatData(values)
    console.log(data)
    api.post('productos', data).then((response) => {
        NotificationManager.success('Producto correctamente');
        dispatch(push('/productos'));
    }).catch(() => {
        
    });
};
 


const listar = (page = 1) => (dispatch, getStore) => {
    dispatch(setLoader(true));
    const params = { page };

    api.get('productos', params).then((response) => {
        console.log("response: ",response);
        dispatch(setData(response));
        dispatch(setPage(page));
    }).catch(() => {
    }).finally(() => {
        dispatch(setLoader(false));
    });
};

const eliminar = id => (dispatch) => {
    api.eliminar(`productos/${id}`).then(() => {
        NotificationManager.success('Producto eliminada correctamente');
        dispatch(listar());
    }).catch(() => {
        NotificationManager.error('Hubo error en la eliminación');
    });
};



export const actions = {
    onSubmit,
    listar,
    eliminar,

};

export const reducers = {
    [LOADER]: (state, { loader }) => {
        return {
            ...state,
            loader,
        };
    },     
    [SET_DATAC]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
};

export const initialState = {
    loader: false,
    mensaje: "saludo",
    data: {},
    page: 1,
};

export default handleActions(reducers, initialState);
