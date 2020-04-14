import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders landing page content', () => {
    render(<MemoryRouter><Landing /></MemoryRouter>);
});

it('landing renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><Landing /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});