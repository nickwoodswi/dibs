import React from 'react';
import { render } from '@testing-library/react';
import HoldPreviewComp from './HoldPreviewComp';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders individual hold preview component', () => {
    render(<MemoryRouter><HoldPreviewComp /></MemoryRouter>);
});

it('HoldPreviewComp renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><HoldPreviewComp /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});