import mood1 from '../../../../assets/img/mood1.png';
import mood2 from '../../../../assets/img/mood2.png';
import mood3 from '../../../../assets/img/mood3.png';
import mood4 from '../../../../assets/img/mood4.png';
import { useEffect } from 'react';

export function Mood(props) {

  useEffect(() => {
  }, [props]);
  
  switch (props.moodLevel) {
    case 4:
      return <img src={mood4} alt="Logo" className="mood" />;
    case 3:
      return <img src={mood3} alt="Logo" className="mood" />;
    case 2:
      return <img src={mood2} alt="Logo" className="mood" />;
    case 1:
      return <img src={mood1} alt="Logo" className="mood" />;
    default:
      break;
  }
}