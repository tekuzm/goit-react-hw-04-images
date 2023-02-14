import { useState } from 'react';
import PropTypes from 'prop-types';

// ========== styles ==========

import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
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
          value={state}
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
