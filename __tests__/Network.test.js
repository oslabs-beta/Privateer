import React from 'react';
import { render, screen } from '@testing-library/react';
import Network from '../client/pages/Network';
import NetworkModal from '../client/components/network/NetworkModal';

describe('Network page', () => {
  it('renders Graph component', () => {
    render(<Network />);
    const networkGraph = document.querySelector('.vis-network');
    expect(networkGraph).toBeInTheDocument();
  });
});

describe('NetworkModal component', () => {
  it('displays correctly when opened', () => {
    render(
      <NetworkModal
        nodeName="testName"
        nodeData={{ foo: 'bar' }}
        pointerLocation={{ x: 0, y: 0 }}
        modalOpen={true}
        setClosed={null}
      />
    );
    const nameHeader = screen.getByRole('heading');
    expect(nameHeader).toHaveTextContent('testName');
    const rowHeader = screen.getByRole('rowheader');
    expect(rowHeader).toHaveTextContent('Foo');
    const tableCell = screen.getByRole('cell');
    expect(tableCell).toHaveTextContent('bar');
  });

  it('is not displayed when closed', () => {
    render(
      <NetworkModal
        nodeName="testName"
        nodeData={{ foo: 'bar' }}
        pointerLocation={{ x: 0, y: 0 }}
        modalOpen={false}
        setClosed={null}
      />
    );
    const nameHeader = screen.queryByRole('heading');
    expect(nameHeader).toBeNull();
  });
});
