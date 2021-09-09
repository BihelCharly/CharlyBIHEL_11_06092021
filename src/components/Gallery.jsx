import '../styles/Gallery.scss';
import Dwellings from '../data/dwellings.json';


function Gallery() {
    const json = Dwellings;
    return (
     <>
     <div className="grid">
      {json.map(element => (
            <div className="card" key={element.id.toString()}>
                  <p className="card--title">{element.title}</p>
                  <img src={element.pictures[0]} className="card--photo" alt="" title={element.title}/>
            </div>
      ))}
      </div>
    </> 
    )
}

export default Gallery;