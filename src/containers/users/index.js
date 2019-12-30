import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addUser} from '../../actions/add-user';
import './index.css';


class Users extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      age: 0,
      id: 4
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onHitAdd = this.onHitAdd.bind(this);
  }

  onChangeHandler(event) {
    if (event.target.name === 'username') {
      this.setState({
        username: event.target.value
      });
    } else {
      this.setState({
        age: event.target.value
      });
    }
  }

  onHitAdd() {
    this.props.addUser(this.state.id, this.state.username, this.state.age);
    this.setState({
      id: this.state.id + 1
    });
  }

  renderMovies() {
        return this.props.movies.map((movie) => {
          return (
            <div key={movie.id}>
              <h1>{movie.name}</h1>
              <img src={movie.image} alt="" />
            </div>
          )
        });
      }

  renderUsers() {
      return this.props.users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h3>{user.age}</h3>
          </div>
        )
      });
    }

  renderForm() {
    return (
      <div>
        <input type="text" name="username" value={this.state.username} onChange={this.onChangeHandler} />
        <input type="text" name="age" value={this.state.age} onChange={this.onChangeHandler} />
        <input type="button" value="Add" onClick={this.onHitAdd} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>{this.renderForm()}</div>
        <div className="users">{this.renderUsers()}</div>
        <div className="movies">{this.renderMovies()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        movies: state.movies
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addUser: addUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Users);
