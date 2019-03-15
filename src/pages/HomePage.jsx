import React, { Component } from 'react';
import Container from './../components/styles/Container';
import ListView from '../components/ListView';

class HomePage extends Component {
  state = {
    items: [
      {
        title: 'Item 1',
        id: 1010
      },
      {
        title: 'Item 2',
        id: 1011
      },
      {
        title: 'Item 3',
        id: 1012
      },
    ]
  }

  render() {
    return (
      <Container>
        <ListView items={this.state.items} />
      </Container>
    );
  }
}

export default HomePage;