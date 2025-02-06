import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '2025 新年快乐!',
    Png: require('@site/static/img/2025sfGroupPhoto.png').default,
    description: (
      <>
        2025.01.29
      </>
    ),
  },
];

function Feature({Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Png className={styles.featurePng} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
