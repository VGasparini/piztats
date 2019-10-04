import React, { Component } from 'react';
import Card from './Card';
import { Container, Tabela } from './styles';

class Cards extends Component {
    state = {
        pizza: []
    };
    addPizza = (newPizza) => {
        //this.state.pizza.push(pizza)
        this.setState({
            pizza: [{ ...newPizza }, ...this.state.pizza]
        })
    }

    render() {
        console.log(this.state.pizza)
        return (
            <Container>
                <div className="row">
                    <Card func={this.addPizza} />
                </div>

                <Tabela className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Tamanho</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Bebida inclusa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pizza.map(piz => (
                            <tr key={piz.idpizza}>
                                <td>{piz.nome}</td>
                                <td>{piz.tamanho}</td>
                                <td>{piz.preco}</td>
                                <td>{piz.refri === true ? 'Sim' : 'Não'}</td>
                            </tr>
                        ))}

                    </tbody>
                </Tabela>

            </Container>
        );
    }
}

export default Cards;