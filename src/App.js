import React, { Component } from 'react';
import './App.less';
import MyProfile from './components/MyProfile';

export default class App extends Component {
  state = {
    name: '',
    gender: 'Male',
    desc: '',
    agreement: false,
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.name === 'agreement' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <h1>My Profile</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <br />
            <input
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='Your name'
            />
          </label>
          <label>
            Gender
            <br />
            <select
              name='gender'
              value={this.state.gender}
              onChange={this.handleChange}>
              <option value='Male'>Male</option>
              <option value='Female'>Famale</option>
            </select>
          </label>
          <label>
            Description
            <br />
            <textarea
              name='desc'
              value={this.state.desc}
              onChange={this.handleChange}
              placeholder='Description about yourself'
            />
          </label>
          <label className='input-conduct'>
            <input
              name='agreement'
              type='checkbox'
              checked={this.state.agreement}
              onChange={this.handleChange}
              placeholder='Description about yourself'
            />
            I have read the terms of conduct
          </label>
          <input type="submit" value="Submit" className="input-submit"/>
        </form>
      </>
    );
  }
}
