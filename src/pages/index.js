import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.indexCtas}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/QAInsights/hamster/releases">
            Download Hamster Free
          </Link>    
          <span style={{ margin: '0 10px' }}></span>
          <Link
            className="button button button--secondary button--lg"
            to="https://qainsights.gumroad.com/">
            Download Hamster Pro
          </Link>
        </div>        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="JMeter productivity app - Launch JMeter test plans from your menu or status bar.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
