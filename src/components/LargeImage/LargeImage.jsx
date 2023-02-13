import PropTypes from 'prop-types';

// ========== styles ==========

import styles from './LargeImage.module.css';

const LargeImage = ({ largeImg, alt }) => (
  <div>
    <img className={styles.image} src={largeImg} alt={alt} />
  </div>
);

export default LargeImage;

LargeImage.propTypes = {
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
