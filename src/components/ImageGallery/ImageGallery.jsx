import PropTypes from 'prop-types';

// ========== components ==========

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// ========== styles ==========

import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, openModal }) => (
  <ul className={styles.imageGallery}>
    {items.map(({ id, smallImg, largeImg, descr }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        img={smallImg}
        alt={descr}
        largeImg={largeImg}
        onImgClick={openModal}
      />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
};
