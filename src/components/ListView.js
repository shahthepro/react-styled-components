import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListViewWrapper from './styles/ListViewWrapper';
import ListViewItem from './styles/ListViewItem';

class ListView extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ListViewWrapper>
        {
          this.props.items.map(item => (
            <ListViewItem key={item.id}>{ item.title }</ListViewItem>
          ))
        }
      </ListViewWrapper>
    );
  }
}

export default ListView;