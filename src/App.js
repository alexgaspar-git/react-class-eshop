import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Article from './Article'
import Panier from './Panier'
import './css/App.css'

class App extends Component {

  state = {
    monArgent: 20,
    panier: [],
    articles: [
      { nom: "Coca-Cola", prix: 1, stock: 5, image: 'https://cdn.shopify.com/s/files/1/0368/3860/4939/products/Cola20cl_540x.jpg?v=1588353615'},
      { nom: "Cecemel", prix: 1.5, stock: 5, image: 'https://cdn.shopify.com/s/files/1/0368/3860/4939/products/Cecemel20cl_540x.jpg?v=1591571321'},
      { nom: "Ice-Tea", prix: 2, stock: 5, image: 'https://cdn.shopify.com/s/files/1/0368/3860/4939/products/Ice-tea25cl_540x.jpg?v=1588351696'},
    ],
  }

  achat = (i) => {
    let {monArgent, panier, articles} = this.state
    if (monArgent < articles[i].prix || articles[i].stock == 0) {
      return null
    }
    monArgent -= articles[i].prix
    articles[i].stock --
    panier.push(articles[i])
    console.log(panier);
    this.setState({monArgent, articles, panier})
  }

  rendre = (i) => {
    let {monArgent, panier, articles} = this.state
    monArgent += panier[i].prix
    console.log(panier);
    panier[i].stock ++
    panier.splice(i, 1)
    this.setState({monArgent, articles, panier})
  }

  render() {
    return (
      <div>
        <h1>Mon argent: {this.state.monArgent}€</h1>
          {
            this.state.articles.map((el) => {
              if (this.state.monArgent < el.prix) {
                return (<h1 className="text-danger">Solde Insuffisant pour {el.nom}</h1>)
              }
            })
          }
        <div className="d-flex justify-content-center">
          {
            this.state.articles.map((el, i) => {
              return (
                <Article key={i} allState={el} foncAchat={() => this.achat(i)}/>
              )
            })
          }
        </div>
        <div className="container">
          {
            this.state.panier.map((el, i) => {
              return (
                <Panier key={i} allState={el} foncRendre={() => this.rendre(i)}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;