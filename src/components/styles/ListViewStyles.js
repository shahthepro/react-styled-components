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

const ListViewHeader = styled.div`
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 700;
  text-transform: uppercase;
`;

const ListViewItems = styled.div`
  height: 100%;
  &.hasHeader {
    height: calc(100% - 2.6rem);
    overflow: auto;
  }
`;

const ListViewWrapper = styled.div`
  border: 1px solid #f0f0f0;
  background-color: #fff;
`;

export {
  ListViewItem,
  ListViewItems,
  ListViewHeader,
  ListViewWrapper,
};