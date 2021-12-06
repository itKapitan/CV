import s from './style.module.scss'
import cn from "classnames";
import store from '../../store/db.json'

type TProps = {
  color?: string;
  type: string;
};


const SkillLevel: React.FC<TProps> = ({color, type}) => {
  const data = store.skills[0];
  const level = Array(store.skills[0].main[1].level).fill(0)

  return (
    <div className={s.wr}>
      {
        data.main.map((main) =>
          <div className={cn(s.info)}>
            <div className={s.title}>{main.title}</div>
            <div className={s.level}>
              {level.map((_, key) =>
                <i key={key} className={s.no}/>
              )}
            </div>
          </div>
        )
      }

    </div>
  )
}

export default SkillLevel;
