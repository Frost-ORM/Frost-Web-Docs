import React, { useEffect, useMemo, useState } from 'react';
import TOC from '@theme-original/TOC';

export default function TOCWrapper(props) {
  // useEffect(()=>{
  //   console.log(props)
  // },[])
  return (
    <>
      <TOC {...props} />
    </>
  );
}
