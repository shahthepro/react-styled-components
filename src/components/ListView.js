import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListViewItem, ListViewItems, ListViewHeader, ListViewWrapper } from './styles/ListViewStyles';

class ListView extends Component {
  static propTypes = {
    header: PropTypes.string,
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      <ListViewWrapper>
        {
          this.props.header && (
            <ListViewHeader>
              { this.props.header }
            </ListViewHeader>
          )
        }
        <ListViewItems className={ (!!this.props.header) ? 'hasHeader' : '' }>
          {
            this.props.items.map(item => (
              <ListViewItem key={item.id}>{ item.title }</ListViewItem>
            ))
          }
        </ListViewItems>
      </ListViewWrapper>
    );
  }
}

export default ListView;