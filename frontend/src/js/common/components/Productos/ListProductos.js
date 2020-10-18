import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

export default class Products extends Component {
    componentWillMount = () => {
        const { listar } = this.props;

        listar();
    }

    handleSearch = (e) => {
        const { listar, filterCompany } = this.props;

        if (e.target.value != '') {
            filterCompany(e.target.value);
        } else {
            listar();
        }
    }


    render() {
        const { data, loader, onSortChange, eliminar , page, listar, mensaje } = this.props;
        console.log("DATOS EN LOS COMPONENTES -->",data);
        return (
            <React.Fragment>
                <br />
                <h3 className="uk-text-bold uk-text-lead">Productos</h3>
                <p>Contenido de loader : {mensaje}</p>
                    <a
                        className="btn btn-secondary mr-1"
                        style={{paddingLeft: "20px" , paddingRight: "20px"}}
                        href="/#/productos/create"
                    >
                    CREAR USUARIO
                            
                    </a>
                <Grid hover striped data={data} 
                    loading={loader} 
                    onPageChange={listar}
                    onSortChange={onSortChange}
                    page={page}>
                    <TableHeaderColumn
                        isKey
                        dataField="nombre"
                        dataSort
                    >
                        NOmbre
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="description"
                        dataSort
                    >
                        Descripcion
                    </TableHeaderColumn>
                    <TableHeaderColumn
                        dataField="cantidad"
                        dataSort
                    >
                        Cantidad
                    </TableHeaderColumn>
                <TableHeaderColumn
                    dataField="id"
                    ataAlign="center"
                    dataSort
                    dataFormat={standardActions({ editar: "producto", ver: "ṕroducto", eliminar: () => {} })}
                >
            Acciones
            </TableHeaderColumn>
        </Grid>
            </React.Fragment>
        );
    }
}
