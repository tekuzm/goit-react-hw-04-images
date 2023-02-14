import React, { useState, useEffect } from 'react';

// ========== components ==========

import searchImages from '../services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import LargeImage from './LargeImage/LargeImage';
import Loader from './Loader/Loader';

// ========== styles ==========

import styles from './App.module.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    if (search) {
      const fetchImages = async () => {
        try {
          setIsLoading(true);
          const response = await searchImages(search, page, total);
          const data = response.hits.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return {
                id,
                smallImg: webformatURL,
                largeImg: largeImageURL,
                descr: tags,
              };
            }
          );

          const totalImgs = response.totalHits;

          setImages(prevImages => [...prevImages, ...data]);
          setTotal(prevTotal => {
            return { ...prevTotal, totalImgs };
          });
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };

      fetchImages();
    }
  }, [search, page, total, setImages, setTotal, setError, setIsLoading]);

  const onSearchImages = ({ search }) => {
    setSearch(search);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onModalOpen = data => {
    setLargeImage(data);
    setShowModal(true);
  };

  const onModalCLose = () => {
    setShowModal(false);
    setLargeImage('');
  };

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={onSearchImages} />
      {search && <ImageGallery items={images} openModal={onModalOpen} />}
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {images.length < total && !isLoading && (
        <div className={styles.buttonWrap}>
          <Button clickHandler={onLoadMore} />
        </div>
      )}

      {showModal && (
        <Modal closeModal={onModalCLose}>
          <LargeImage {...largeImage} />
        </Modal>
      )}
    </div>
  );
};

export default App;
