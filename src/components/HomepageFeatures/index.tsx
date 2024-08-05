import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Build Dapps',
    emoji: (<>💡</>),
    description: (
      <>
        Dive right into composing decentralized, resilient apps on the Polkadot tech stack.
      </>
    ),
  },
  {
    title: 'Build Smart Contracts',
    emoji: (<>📝</>),
    description: (
      <>
        Used to writing smart contracts, or want to migrate your existing ones? Learn how to use ink! and Solidity on Polkadot!
      </>
    ),
  },
  {
    title: 'Build Blockchains',
    emoji: (<>⛓️</>),
    description: (
      <>
        Explore the core of the protocol, and build blockchains/rollups/parachains with the Polkadot SDK.
      </>
    ),
  },
];

function Feature({ title, emoji, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <h1>{emoji}</h1>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
