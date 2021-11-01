import React from 'react';
import { render, screen } from '@testing-library/react';
import Network from '../client/pages/Network';
import NetworkModal from '../client/components/network/NetworkModal';

describe('Network page', () => {
  it('renders graph component', () => {
    render(<Network />);
    const networkGraph = document.querySelector('.vis-network');
    expect(networkGraph).toBeInTheDocument();
  });
});

describe('networkModal component', () => {
  it('displays correctly', () => {
    render(<NetworkModal data={{}} open={true} setClosed={null} />);
  });
});
