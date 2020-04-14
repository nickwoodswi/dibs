import React from 'react';
import { render } from '@testing-library/react';
import AgentForm from './AgentForm';
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

test('renders agent form', () => {
    render(<MemoryRouter><AgentForm /></MemoryRouter>);
});

it('AgentForm renders the UI as expected', () => {
    const tree = renderer
        .create(<MemoryRouter><AgentForm /></MemoryRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

