import React from 'react';
import { render } from '@testing-library/react';
import HoldConfirmation from './HoldConfirmation';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders hold confirmation component', () => {
    render(<MemoryRouter><HoldConfirmation /></MemoryRouter>);
});

it('HoldConfirmation renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><HoldConfirmation /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});