import s from './style.module.scss'
import flex from '../flex.module.scss';
import cn from "classnames";

const Avatar: React.FC = () => {
    return(
        <div className={cn(s.wr, flex.colShrink, flex.center)}>
            <div className={cn(flex.center)}>1</div>
        </div>
    )
}

export default Avatar;
