import React from 'react';
import { render } from '@testing-library/react';
import EndDateSelector from './EndDateSelector';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders end date selector component', () => {
    render(<MemoryRouter><EndDateSelector /></MemoryRouter>);
});

it('EndDateSelector renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><EndDateSelector /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});