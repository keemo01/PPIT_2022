//combines two operations
import React from 'react';
import axios from 'axios';
import '../App.css';

export class Add extends React.Component {

    constructor() {
        super();

        //provides the scripts data to be executed whenever the submit event is occurred
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        // used by React to represent information about the components current situation
        this.state = {
            Title: '',
            Quantity: '',
            Poster: ''
        }
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangeTitle(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Title: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangeQuantity(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Quantity: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onChangePoster(e) {
        //setState updates value of state based on new user input()
        this.setState({
            Poster: e.target.value
        });
    }

    //onchange attributes fires the moment the value of the element is changed
    onSubmit(e) {
        e.preventDefault();
        alert("Song: " + this.state.Title + " " +
            "Quantity: " + this.state.Quantity + " " +
            "Poster: " + this.state.Poster);

        const newCrypto = {
            title: this.state.Title,
            quantity: this.state.Quantity,
            poster: this.state.Poster
        }

        axios.post('http://localhost:4000/api/crypto', newCrypto)

            .then((res) => {
                console.log(res);
            })

            .catch((err) => {
                console.log(err);
            });
    }

    //turns website code into the interactive pages users see
    render() {
        //returns some text
        return (
            //div is used in HTML to make divisions of content in the web page //jsx code
            <div className="Content">
                <form onSubmit={this.onSubmit}>

                    <h2>Add Your Purchases To your Portfolio Below:</h2>
                    <br></br>

                    <div className="form-group">
                        <label><b>Add Crypto Title: </b></label>
                        {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
                        <form>
                            <input type='text'
                                id='input'
                                className='form-input'
                                value={this.state.Title}
                                //onchange attributes fires the moment the value of the element is changed
                                onChange={this.onChangeTitle}
                            />
                        </form>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label><b>Add Crypto Quantity: </b></label>
                        {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
                        <form>
                            <input type='text'
                                id='input'
                                className='form-input'
                                value={this.state.Quantity}
                                //onchange attributes fires the moment the value of the element is changed
                                onChange={this.onChangeQuantity}
                            />
                        </form>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label><b>Add Crypto PNG: </b></label>
                        <form>
                            <input type='text'
                                id='input'
                                className='form-input'
                                value={this.state.Poster}
                                //onchange attributes fires the moment the value of the element is changed
                                onChange={this.onChangePoster}
                            />
                        </form>
                    </div>

                    <br></br>
                    <div className="form-group">
                        {/*input maintains its own state and gets updated based on user input can only be updated by using setState() */}
                        <input type='submit'
                            value='Add Crypto'
                            className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}