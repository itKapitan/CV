import s from './style.module.scss'
import cn from "classnames";

type TProps = {
  color?: string;
  type: string;
};

const SkillLevel: React.FC<TProps> = ({color, type}) => {
  return (
    <div className={s.wr}>
      <div className={cn(s.info)}>
        <div className={s.title}>Figma</div>
        <div className={s.level}>
          <i/>
          <i/>
          <i/>
          <i/>
          <i/>
          <i/>
          <i/>
          <i/>
          <i/>
          <i/>
        </div>
      </div>
    </div>
  )
}

export default SkillLevel;
