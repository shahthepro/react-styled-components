import React from 'react';
import PropTypes from 'prop-types';
import { ListViewItem, ListViewItems, ListViewHeader, ListViewWrapper } from './styles/ListViewStyles';

const ListView = (props) => {
  return (
    <ListViewWrapper>
      {
        props.header && (
          <ListViewHeader>
            { props.header }
          </ListViewHeader>
        )
      }
      <ListViewItems className={ (!!props.header) ? 'hasHeader' : '' }>
        {
          props.items.map(item => (
            <ListViewItem key={item.id}>{ item.title }</ListViewItem>
          ))
        }
      </ListViewItems>
    </ListViewWrapper>
  );
};

ListView.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array.isRequired
};

export default ListView;