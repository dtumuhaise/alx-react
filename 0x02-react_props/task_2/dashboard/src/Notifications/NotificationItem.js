import React from 'react';

function NotificationItem({ type, html, value }) {
    return (
        <li data-notification-type={type}>
            {value}
        <div dangerouslySetInnerHTML={html}></div>
        </li>
    );
}

export default NotificationItem;
