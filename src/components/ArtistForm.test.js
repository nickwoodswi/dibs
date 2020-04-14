import React from 'react';
import { render } from '@testing-library/react';
import ArtistForm from './ArtistForm';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders artist form', () => {
    render(<MemoryRouter><ArtistForm /></MemoryRouter>);
});

it('ArtistForm renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><ArtistForm /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});