import React from "react";
//import ReactDOM from 'react-dom'
import "../styles/Collapsible.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class Collapsible extends React.Component {

      constructor(props){
            super(props);
            this.state = {open: this.props.open};
            this.contentType = this.setContentType(props);
            this.togglePanel = this.togglePanel.bind(this);
            this.arrowDown = <FontAwesomeIcon icon={faChevronDown} size="lg" color="white" title="Ouvrir" fixedWidth/>;
            this.arrowUp = <FontAwesomeIcon icon={faChevronUp} size="lg" color="white" title="Fermer" fixedWidth/>;
      }
      
      setContentType(data){
            return data.contentArray ? <ul> {data.contentArray.map((element,i) => <li key={i}>{element}</li>)} </ul> : <p> {data.contentString} </p> ;
      }

      setArrowDirection(){

      }

      togglePanel(e){
            this.setState({ open: !this.state.open })
      }
      
      render() {
            return (
                  <>
                        <button className={this.props.btnColClassName} onClick={ (e) => this.togglePanel(e) } >
                              {this.props.title}
                              { this.state.open ? (<>{this.arrowUp}</>) : (<>{this.arrowDown}</>) }
                        </button>
                        { this.state.open ?
                              (
                                    <div className={this.props.divColClassName}>
                                          {this.contentType}
                                    </div>
                                    
                              ) : null
                        }
                  </>
            );
      }
}

Collapsible.propTypes = {
      open: PropTypes.bool,
      title: PropTypes.string,
      contentString: PropTypes.string,
      contentArray : PropTypes.array,
      btnColClassName: PropTypes.string,
      divColClassName: PropTypes.string,
      arrowDown: PropTypes.string,
      arrowUp: PropTypes.string

};

export default Collapsible;