import React from 'react';
import { FiAlertOctagon, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi';
import { useTransition } from 'react-spring';

import { ToastMessage, useToast } from '../../hooks/toast';
import { Container, ToastElement } from './styles';

interface ToastProps {
  messages: ToastMessage[];
}

const icons = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertOctagon size={20} />,
};

const Toast: React.FC<ToastProps> = ({ messages }) => {
  const { removeToast } = useToast();

  const animatedMessages = useTransition(messages, message => message.id, {
    from: { right: '-10%', opacity: 0, transform: 'translateX(20px)' },
    enter: { right: '0', opacity: 1, transform: 'translateX(10px)' },
    leave: { right: '-10%', opacity: 0, transform: 'translateX(20px)' },
  });

  return (
    <Container>
      {animatedMessages.map(({ item, key, props }) => (
        <ToastElement key={key} style={props} type={item.type}>
          <div>
            <div>
              {icons[item.type]}
              <strong>{item.title}</strong>
            </div>

            {item.description && <p>{item.description}</p>}
          </div>

          <button type="button" onClick={() => removeToast(item.id)}>
            <FiX size={20} />
          </button>
        </ToastElement>
      ))}
    </Container>
  );
};

export default Toast;
