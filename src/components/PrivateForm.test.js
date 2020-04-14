import React from 'react';
import { render } from '@testing-library/react';
import PrivateForm from './AgentForm';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders private form', () => {
    render(<MemoryRouter><PrivateForm /></MemoryRouter>);
});

it('PrivateForm renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><PrivateForm /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});