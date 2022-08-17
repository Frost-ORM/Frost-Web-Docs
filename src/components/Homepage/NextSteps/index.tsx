import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type StepItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: React.ReactElement;
  description: JSX.Element;
};

const Steps: StepItem[] = [
  {
    title: 'Performance & Functionality',
    Svg: require('@site/static/img/performance.svg').default,
    description: (
      <>
        Frost will keep improving the algorithms to maximize the performance. Also, it will provide more database operations to reduce boilerplate.
      </>
    ),
  },
  {
    title: 'Code Generation',
    image: <img src={('img/code-gen.png')} className={styles.featureImage} role="img"/>,
    description: (
      <>
        Frost will have a schema language that will be used to define the data models and their relations to generate the code instead of using annotations. <br/>
        This will maximize compatibility with different versions of JS.
      </>
    ),
  },
  {
    title: 'Cover All Frameworks',
    image: <img src={('img/frameworks.png')} className={styles.featureImage} role="img"/>,
    description: (
      <>
        Frost will expand its implementation and provide packages for all the important frameworks that use FirebaseDB.
        Also, Using the Frost schema language, the user will only define the schema once and Frost will generate the code for the different frameworks.
      </>
    ),
  },

];

function Step({title, Svg,image, description}: StepItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg? (<Svg className={styles.featureSvg} role="img" />) : (image || <></>)}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageNextSteps(): JSX.Element {
  return (
    <section className={styles.section}>
      <h1>Next Steps</h1>
      <div className={"container " + styles.features} >
        <div className="row">
          {Steps.map((props, idx) => (
            <Step key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
