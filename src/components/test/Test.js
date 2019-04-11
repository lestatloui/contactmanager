import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: '',
    userId: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body,
          userId: data.userId
        })
      );
  }

  /* componentWillMount() {
    console.log('componentWillMount...');
  }*/

  // componentUpdateMount() {
  //   console.log('componentUpdateMount...');
  // }

  /*componentWillReceiveProps() {
    console.log('componentWillReceiveProps...');
  }*/

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps...');
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }

  render() {
    const { title, body, userId } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <p>{userId}</p>
      </div>
    );
  }
}

export default Test;
