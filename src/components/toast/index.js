import { useEffect, useRef, useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { createPortal } from 'react-dom';
import './scss/style.scss';

function ToastContainer({ message, title, time }) {
    const [show, setShow] = useState(true);
    const boxRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            boxRef.current.classList.remove('from-left');
            boxRef.current.classList.add('hide');
            console.log('toast hide');
        }, time || 3000);

        return () => clearTimeout(timer);
    }, [time]);

    if (!show) {
        return null;
    }

    return (
        <div ref={boxRef} className="toast-box from-left">
            <div className="toast-box-left">
                <div className="toast-box_left-icon">
                    <HiUserCircle className="toast-box_left-icon_hi" />
                </div>
            </div>
            <div className="toast-box-right">
                <div className="toast-box_head">
                    <span className="toast-box_head-title">{title}</span>
                </div>
                <div className="toast-box_content">
                    <span className="toast-box_head-message">{message}</span>
                </div>
            </div>
        </div>
    );
}

export const toast = (message, title, time) => {
    const toastContainer = document.createElement('div');
    document.body.appendChild(toastContainer);

    const toastElement = (
        <ToastContainer message={message} title={title} time={time} />
    );

    createPortal(toastElement, toastContainer);

    setTimeout(() => {
        document.body.removeChild(toastContainer);
        console.log('toast remove');
    }, (time || 3000) + 2000);
};

export default ToastContainer;
