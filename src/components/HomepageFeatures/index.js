import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/speed.svg').default,
    description: (
      <>
        Hamster was designed to improve performance test engineers productivity in mind.
        Easy to use and easy to install.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/coding.svg').default,
    description: (
      <>
        Focus on your test plan; no more juggling between JMeter test plan and terminal.
      </>
    ),
  },
  {
    title: 'For the performance engineers',
    Svg: require('@site/static/img/chart.svg').default,
    description: (
      <>
        Hamster developed as a result of my frustration in launching JMeter test plans.
        For the performance engineers, by a performance engineer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
