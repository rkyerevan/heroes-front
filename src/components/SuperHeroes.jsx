import React, {Component} from 'react';
import Modal from './modal';

const axios = require('axios');

class superHeroes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            superHeroes: [],
            openModal: false,
        }
    }

    handleStyle = () => {
        return {
            width: 100 + '%'
        }
    }

    handleModal = (e) => {
        e.preventDefault();
        let modalState = this.state.openModal;

        this.setState({
            openModal: !modalState,

        })
    }

    componentDidMount() {
        axios.get('http://localhost:3001/users/foods')
            .then(res => {
                return res.data;
            })
            .then(data => {
                let superHeroes = data.map((hero) => {
                    return <div className="col-3 pt-3" key={hero.id}>
                        <div className='card' style={this.handleStyle()}>
                            <div className="card-header">
                                {hero.hero_name}
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-left">First Name: {hero.first_name}</li>
                                <li className="list-group-item text-left">Last Name: {hero.last_name}</li>
                                <li className="list-group-item text-left">Favorite Food: {hero.favorite_food}</li>
                            </ul>
                        </div>
                    </div>
                })
                this.setState({superHeroes: superHeroes})
            })
    }





    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.superHeroes}
                </div>
                <button onClick={this.handleModal} type="button"
                        className="btn btn-primary position-fixed add-button mr-4 mb-4"
                        data-target="#exampleModal">
                    Add New Hero
                </button>
                {
                    this.state.openModal ? <Modal close={this.handleModal}/> : null
                }
            </div>
        )
    }

}

export default superHeroes;