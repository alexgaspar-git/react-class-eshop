import React, { Component } from 'react';

class Panier extends Component {
    render() {
        return (
            <div>
                Produit: {this.props.allState.nom} || Unités: 1 <button onClick={this.props.foncRendre} className="bg-primary text-white">Rendre</button>
            </div>
        );
    }
}

export default Panier;