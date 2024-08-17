import React, { useState, useEffect } from 'react';
import './Toast.css';

const Toast = ({ message, duration }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return <div className="toast">{message}</div>;
};

export default Toast;
