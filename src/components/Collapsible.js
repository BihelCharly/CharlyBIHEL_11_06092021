import React from "react";
//import ReactDOM from 'react-dom'
import "../styles/Collapsible.scss";
import PropTypes from 'prop-types';

class Collapsible extends React.Component {

      constructor(props){
            super(props);
            this.state = {open: this.props.open} 
            this.togglePanel = this.togglePanel.bind(this);
      }
      
      togglePanel(e){
            this.setState({open: !this.state.open})
      }
      
      render() {
            return (
                  <>
                        <button className={this.props.btnColClassName} onClick={(e)=>this.togglePanel(e)} >
                              {this.props.title}
                        </button>
                        { this.state.open ?
                              (
                                    <div className={this.props.divColClassName}>
                                          <p>{this.props.content}</p>
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
      content: PropTypes.string,
      btnColClassName: PropTypes.string,
      divColClassName: PropTypes.string

};

export default Collapsible;