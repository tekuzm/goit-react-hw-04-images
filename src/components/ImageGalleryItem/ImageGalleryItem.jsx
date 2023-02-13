import PropTypes from 'prop-types';

// ========== styles ==========

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ img, largeImg, alt, onImgClick }) => (
  <li
    className={styles.imageGalleryItem}
    onClick={() => {
      onImgClick({ largeImg, alt });
    }}
  >
    <img className={styles.imageGalleryItem_image} src={img} alt={alt} />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
