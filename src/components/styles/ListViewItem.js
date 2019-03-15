import styled from 'styled-components';

const ListViewItem = styled.div`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.5s ease;
  color: #444;
  &:last-child {
    border: 0;
  }
  &:hover {
    background-color: #f0f0f0;
    color: #000;
    cursor: pointer;
  }
`;

export default ListViewItem;