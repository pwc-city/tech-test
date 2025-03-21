import styles from './test.module.scss';

export const Test = () => {
  return (
    <article className={styles.container}>
            <img src="https://www.mancity.com/meta/media/zzmf0yr0/comingup_16x9_mar.jpg?width=80" alt="placeholder" />
                <div><h2 className="label-small"><span className={styles.subTitle}>Mens team</span> | <span className={styles.date}>11th Aug 2024</span></h2>
                <h1 className={`${styles.title} body-small bold`}>Pep anticipating toughest of tests at Brentford</h1>
                </div>
                <p className="body-xsmall">Saturday’s 8-0 FA Cup third round win against Salford City was City’s third consecutive win in a Saturday’s 8-0 FA Cup third round win against</p>
    </article>
  );

};

export default Test;
