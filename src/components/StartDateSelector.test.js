import React from 'react';
import { render } from '@testing-library/react';
import StartDateSelector from './StartDateSelector';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders start date selector', () => {
    render(<MemoryRouter><StartDateSelector /></MemoryRouter>);
});

it('StartDateSelector renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><StartDateSelector /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});