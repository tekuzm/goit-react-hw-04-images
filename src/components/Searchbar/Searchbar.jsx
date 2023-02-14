import { useState } from 'react';
import PropTypes from 'prop-types';

// ========== styles ==========

import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <button className={styles.searchForm_button} type="submit">
          <span className={styles.searchForm_button_label}>Search</span>
        </button>

        <input
          className={styles.searchForm_input}
          type="text"
          value={search}
          name="search"
          onChange={handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
          required
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
