import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  image?: React.ReactElement;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/simplify.svg').default,
    description: (
      <>
        Frost was designed on top of Firebase database to simplify creating documents and relations between them.<br/>
         Frost Will handle all the implantation of the code required to do the basic CRUD operations and provide more advanced operations.
      </>
    ),
  },
  {
    title: 'Code Generation',
    image: <img src={('img/code-gen.png')} className={styles.featureImage} role="img"/>,
    description: (
      <>
        Frost has a schema language that is used to define the data models and their relations to generate the code incase if you don't want to use annotations. <br/>
        This will maximize compatibility with different versions of JS.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: <img src={('img/relations.jpg')} className={styles.featureSvg} role="img"/>,
    description: (
      <>
        Frost allows to utilize either decorators or codegen to define all the relations easily.<br/>
        Frost lets you focus on object shapes and relations between them.
         <br/> Let Frost Handle the rest
      </>
    ),
  },
  
  {
    title: 'Reactive',
    Svg: require('@site/static/img/reactive.svg').default,
    description: (
      <>
        Frost utilizes ReactiveX to handle all realtime related functionality.
         This allows the user to extend on its functionality and use the many different operations to modify the experience as they desire.
      </>
      //  <>
      //   Frost utilizes ReactiveX to handle all realtime related functionality, it also provides tools to configure and control the listening to the events.
      //    Using ReactiveX will allow the user to extend on its functionality and use the many different operations to modify the experience of listening to realtime events to an apt way for the user.
      // </>
    ),
  },
];

function Feature({title, Svg,image, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row',styles.featuresRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
