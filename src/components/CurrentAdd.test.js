import React from 'react';
import { render } from '@testing-library/react';
import CurrentAdd from './CurrentAdd';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders current add component', () => {
    render(<MemoryRouter><CurrentAdd /></MemoryRouter>);
});

it('CurrentAdd renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><CurrentAdd /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});