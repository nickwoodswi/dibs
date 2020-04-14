import React from 'react';
import { render } from '@testing-library/react';
import ConfirmationComponent from './ConfirmationComponent';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders confirmation form', () => {
    render(<MemoryRouter><ConfirmationComponent /></MemoryRouter>);
});

it('ConfirmationForm renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><ConfirmationComponent /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});