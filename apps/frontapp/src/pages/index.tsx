import styles from './index.module.scss';

import { Test } from '@city-frontend-test/ui';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.page}>
            <Test />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
