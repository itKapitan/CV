import React from 'react';
import cn from 'classnames';
import l from './layout.module.scss';
import {colors, flex, SkillLevel} from './components';

function App()  {
  return (
      <div className={cn(l.wr, flex.row)}>
        <div className={cn(l.side)}>
            <div className={cn(l.skills)}>
                <h2>Professional skills</h2>
                <h3 className={cn(colors.withe, colors.bgSecondary)}>Design</h3>
                <SkillLevel type={'primary'} />
            </div>
        </div>
        <div className={cn(l.content)}>
            2
        </div>
      </div>
  );
}

export default App;
