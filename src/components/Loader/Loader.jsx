import { Vortex } from 'react-loader-spinner';

// ========== styles ==========

import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <Vortex
      visible={true}
      height="80"
      width="80"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={'#3f51b5'}
    />
  </div>
);

export default Loader;
