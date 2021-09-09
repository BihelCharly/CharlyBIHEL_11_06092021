import '../styles/Flag.scss';
import bg from '../assets/flag_bg.png';


function Flag() {
      return (
        <div className="flag">
              <h1 className="flag-txt">Chez vous, partout et ailleurs</h1>
              <img src={bg} className="flag-img" alt="Couverture" title="Couverture" />
        </div>
      );
    }
    
export default Flag;
    