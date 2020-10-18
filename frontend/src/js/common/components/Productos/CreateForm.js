import React,{Component} from 'react';
import { Field, reduxForm, clearFields } from 'redux-form';
import { validate, validators } from 'validate-redux-form';
import { api } from "api";


const ProductosForm = (props) => {
    const { handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit} className="uk-card uk-card-default uk-padding uk-margin-auto">

            <div className="uk-child-width-1-2@s uk-grid">
                <div>
                    <label>Nombre</label>
                    <Field
                        name="nombre"
                        type="text"
                        component="input"
                        className="uk-input uk-border-rounded"
                    />
                </div>

                <div>
                    <label>Descripcion</label>
                    <Field
                        name="description"
                        type="text"
                        component="input"
                        className="uk-input uk-border-rounded"
                    />
                </div>
                <div>
                    <label>Cantidad</label>
                    <Field
                        name="cantidad"
                        type="tel"
                        component="input"
                        className="uk-input uk-border-rounded"
                    />
                </div>
                </div>
                    <div className="uk-flex uk-flex-center">
                    <a
                        className="uk-button uk-button-secondary uk-border-rounded uk-button-small uk-flex"
                        href="/#/productos"
                    
                    >
                    Cancelar
                    <i style={{ marginLeft: "2px" }} className="material-icons">cancel</i>

                </a>
                {

                    !ver
                    && (
                        <button
                            type="submit"
                            className="uk-button uk-button-primary uk-border-rounded uk-button-small uk-margin-small-left uk-flex"
                        >
                            Guardar
                            <i style={{ marginLeft: "2px" }} className="material-icons">save</i>
                        </button>
                    )
                }
            </div>
        </form>
    );
};


export default reduxForm({
    form: 'productosForm', // a unique identifier for this form
    validate: (data) => {
        return validate(data, {
            name: validators.exists()('Este campo es requerido'),
        });
    },
})(ProductosForm);
