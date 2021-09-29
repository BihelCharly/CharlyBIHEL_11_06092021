import React from "react";
//import ReactDOM from 'react-dom';
import Banner from "../components/Banner";
import "../styles/AboutUs.scss";
import Collapsible from "../components/Collapsible";

function AboutUs() {
      return(
            <div className="main">
                  <Banner propsImg="aboutus"/>
                  <div className="aboutus-block">
                        <div className="collapses-block">
                              <Collapsible open={false} title="Fiabilité" contentString="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." btnColClassName="collapse-title--aboutus" divColClassName="collapse-content--aboutus" />
                        </div> 
                            <div className="collapses-block">
                              <Collapsible open={false} title="Respect" contentString="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." btnColClassName="collapse-title--aboutus" divColClassName="collapse-content--aboutus" />
                        </div>
                        <div className="collapses-block">
                              <Collapsible open={false} title="Service" contentString="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." btnColClassName="collapse-title--aboutus" divColClassName="collapse-content--aboutus"/>
                        </div>
                        <div className="collapses-block">
                              <Collapsible open={false} title="Sécurité" contentString="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." btnColClassName="collapse-title--aboutus" divColClassName="collapse-content--aboutus"/>
                        </div>
                  </div>
            </div>
      )
}

export default AboutUs;