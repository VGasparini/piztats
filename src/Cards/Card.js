import React from 'react';
import './card-style.css';

var idpizza = 0;
class Card extends React.Component {
    state = {
        nome: '',
        tamanho: 0,
        preco: 0,
        refri: false
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleChangeRefri = e => {
        this.setState({
            refri: !this.state.refri
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.nome !== '') {

            this.props.func({ ...this.state, idpizza });//chama a funcao do componente pai
            idpizza++;
            this.handleClear();
        }
    }
    handleClear = () => {
        this.setState({
            nome: '',
            tamanho: 0,
            preco: 0,
            refri: false
        })
    }
    render() {
        return (
            <div className="card text-center">
                <div className="jumbotron bg-light">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" >Name</label>
                            </div>
                            <input type="text" className="form-control" placeholder="Pizzaria do Gasparini" aria-label="Pizzaria do Gasparini"
                                aria-describedby="basic-addon1"
                                name="nome"
                                onChange={this.handleChange}
                                value={this.state.nome} />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text">Size</label>
                            </div>
                            <select className="custom-select" id="inputSize" name="tamanho" onChange={this.handleChange}
                                value={this.state.tamanho}>
                                <option value="0">Choose...</option>
                                <option value="30">30 cm</option>
                                <option value="35">35 cm</option>
                                <option value="40">40 cm</option>
                                <option value="45">45 cm</option>
                                <option value="50">50 cm</option>
                            </select>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">R$</span>
                            </div>
                            <input type="number"
                                className="form-control"
                                aria-label="Amount"
                                min="0"
                                name="preco"
                                onChange={this.handleChange}
                                value={this.state.preco}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                        <div className="input-group mb-3 justify-content-center">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Drink included?</span>
                            </div>
                            <div className="input-group-text">
                                <input type="checkbox" aria-label="Checkbox and fill if have coke included" name="refri" onChange={this.handleChangeRefri}
                                    value={this.state.refri} />
                            </div>
                        </div>

                        <div className="input-group mb-2 justify-content-center">
                            <button type="submit" className="btn btn-success mx-2">Add</button>
                            <button type="button" className="btn btn-danger mx-2" onClick={this.handleClear}>Clear</button>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Card;