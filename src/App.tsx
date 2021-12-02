import React from 'react';
import cn from 'classnames';
import l from './layout.module.scss';
import { flex } from './components';

function App()  {
  return (
      <div className={cn(l.wr, flex.row)}>
        <div className={cn(l.side)}>1</div>
        <div className={cn(l.content)}>
            2
        </div>
      </div>
  );
}

export default App;
