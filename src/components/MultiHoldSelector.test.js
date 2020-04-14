import React from 'react';
import { render } from '@testing-library/react';
import MultiHoldSelector from './MultiHoldSelector';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders multihold selector component', () => {
    render(<MemoryRouter><MultiHoldSelector /></MemoryRouter>);
});

it('MultiHoldSelector renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><MultiHoldSelector /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});