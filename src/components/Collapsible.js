import React from "react";
//import ReactDOM from 'react-dom'
import "../styles/Collapsible.scss";
import PropTypes from 'prop-types';

class Collapsible extends React.Component {

      constructor(props){
            super(props);
            this.state = {open: this.props.open};
            this.contentType = this.setContentType(props);
            this.togglePanel = this.togglePanel.bind(this);
      }
      
      setContentType(data){
            return data.contentArray ? <ul> {data.contentArray.map((element,i) => <li key={i}>{element}</li>)} </ul> : <p> {data.contentString} </p> ;
      }

         togglePanel(e){
            this.setState({open: !this.state.open})
      }
      
      render() {
            return (
                  <>
                        <button className={this.props.btnColClassName} onClick={ (e) => this.togglePanel(e) } >
                              {this.props.title}
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
      divColClassName: PropTypes.string

};

export default Collapsible;