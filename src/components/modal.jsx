import React, {Component} from 'react';

const axios = require('axios');

class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hero_name: "",
            first_name: "",
            last_name: "",
            favorite_food: "",
        }
    }


    //

    handleForm = () => {

        let newHero = {
            hero_name: this.state.hero_name,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            favorite_food: this.state.favorite_food
        }

        axios.post('http://localhost:3001/users/food', newHero)
            .then(response => {
                setTimeout(() => window.location.reload(), 1000);
            });

    }

    handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }

    handleStyle = () => {
        return {
            width: 100 + "%",
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, .8)"
        }
    }

    render() {
        return (
            <div style={this.handleStyle()} id="exampleModal" tabIndex="-1" role="dialog"
                    aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Add a new Hero</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={this.props.close}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    {/* New Hero Form */}

                    <div className="modal-body">
                        <form onSubmit={this.handleForm}>
                            <div className="form-group">
                                <label htmlFor="hero_name" className="text-left w-100">Hero Name</label>
                                <input onChange={this.handleInput} type="text" className="form-control"
                                       placeholder="Batman" name="hero_name" value={this.state.hero_name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-left w-100">First Name</label>
                                <input onChange={this.handleInput} type="text" className="form-control"
                                       placeholder="Bruce" name="first_name" value={this.state.first_name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-left w-100">Last Name</label>
                                <input onChange={this.handleInput} type="text" className="form-control"
                                       placeholder="Wayne" name="last_name" value={this.state.last_name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2" className="text-left w-100">Favorite
                                    Food</label>
                                <input onChange={this.handleInput} type="text" className="form-control"
                                       placeholder="Mulligatawny soup" name="favorite_food"
                                       value={this.state.favorite_food}/>
                            </div>
                        </form>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal"
                                onClick={this.props.close}>Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={this.handleForm}>Add</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Modal;