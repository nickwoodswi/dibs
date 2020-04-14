import React from 'react';
import { render } from '@testing-library/react';
import HoldPreview from './HoldPreview';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders hold preview component', () => {
    render(<MemoryRouter><HoldPreview /></MemoryRouter>);
});

it('HoldPreview renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><HoldPreview /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});