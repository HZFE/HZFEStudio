import React, { useEffect, useContext, useState } from 'react';
import './index.pcss';
import { MainCtx } from '..';
import config from '../../config';

export default () => {
  const [list, setList] = useState([]);
  const ctx = useContext(MainCtx);

  useEffect(() => {
  }, []);

  return (
    <div>1</div>
  );
}
