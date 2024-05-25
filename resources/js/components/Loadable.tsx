import { Suspense } from 'react';
import React from 'react';
// project import
import Loader from './Loader';

const Loadable = (Component: any) => (props: any) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
