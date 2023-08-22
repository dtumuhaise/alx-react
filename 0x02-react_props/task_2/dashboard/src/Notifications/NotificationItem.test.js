import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
  });

  it('renders with correct type and value props', () => {
    const { getByText, getByTestId } = render(
      <NotificationItem type="default" value="test" />
    );

    const listItem = getByTestId('notification-item');
    expect(listItem).toHaveAttribute('data-notification-type', 'default');
    expect(getByText('test')).toBeInTheDocument();
  });

  it('renders with correct html prop', () => {
    const htmlContent = '<u>test</u>';
    const { getByTestId } = render(
      <NotificationItem html={{ __html: htmlContent }} />
    );

    const listItem = getByTestId('notification-item');
    expect(listItem).toContainHTML(htmlContent);
  });
});
