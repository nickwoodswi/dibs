import React from 'react';
import { render } from '@testing-library/react';
import SingleHold from './SingleHold';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders single hold component', () => {
    render(<MemoryRouter><SingleHold /></MemoryRouter>);
});

it('SingleHold renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><SingleHold /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});