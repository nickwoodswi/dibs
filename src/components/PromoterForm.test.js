import React from 'react';
import { render } from '@testing-library/react';
import PromoterForm from './AgentForm';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders promoter form', () => {
    render(<MemoryRouter><PromoterForm /></MemoryRouter>);
});

it('PromoterForm renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><PromoterForm /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});