import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

// ========== styles ==========

import styles from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
  const close = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  }, [close]);

  return (
    <div className={styles.overlay} onClick={close}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
