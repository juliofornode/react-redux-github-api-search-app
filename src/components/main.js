import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, fetchRepos, handleSubmit } from '../actions/index';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { nombreUsuario: 'juliofornode' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.fetchData(this.state.nombreUsuario);
        this.props.fetchRepos(this.state.nombreUsuario);
    }

    displayObject() {
        const myObject = this.props.datosUsuario;
        let myArray = [];
        if(myObject) {
            for(let key in myObject) {
                myArray.push(`${key}: ${myObject[key]}`);
            }
        }
        return myArray.map(line => {
            return (
                <div>
                    <p>{line}</p>
                </div>
            );

        })
    }

    displayRepos() {
        const myArray = this.props.repos;
        return myArray.map(repo => {
            return (
                <div>
                    <p>{repo.name}</p>
                </div>
            );

        })
    }

    handleSubmit(eventObject) {
        if(!eventObject) {
            return <div>Enter search query...</div>;
        }

        eventObject.preventDefault();
        let nombre = this.refs.usuario.value;
        this.setState({ nombreUsuario: nombre }, function() {
            this.props.fetchData(nombre);
            this.props.fetchRepos(nombre);
        });
    }

    render() {
        if(!this.props.datosUsuario || !this.props.repos) {
            return <div>Loading...</div>;
        }

        return(
            <div>
                <h3>Search functionality</h3>
                <form onSubmit={this.handleSubmit}>
                    Enter github username: <input type="text" ref="usuario"/>
                </form>
                <h3>This is the user data:</h3>
                {this.displayObject()}
                <h3>This is the user-repos data:</h3>
                {this.displayRepos()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        datosUsuario: state.reducerFetchData.userData,
        repos: state.reducerFetchData.repos
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchData: fetchData, fetchRepos: fetchRepos, handleSubmit: handleSubmit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);