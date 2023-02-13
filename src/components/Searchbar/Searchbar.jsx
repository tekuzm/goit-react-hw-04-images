import { Component } from 'react';
import PropTypes from 'prop-types';

// ========== styles ==========

import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    // this.reset();
  };

  // reset() {
  //   this.setState({ search: '' });
  // }

  render() {
    const { search } = this.state;
    const { handleChange, handleSubmit } = this;

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
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
