import React,{Component} from "react";
import ReactDOM from "react-dom";
import * as THREE from '../public/static/js/three.r92.min';
import GLOBE from '../public/static/js/vanta.globe.min';
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class BirdsAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.yourElement = React.createRef();
  }

  componentDidMount() {
    const yourElement = this.yourElement.current;
    yourElement.style.position="absolute";
    if (typeof window !== undefined) {
      this.effect = window.VANTA.GLOBE({
        el: yourElement,
      });
    }
  }

  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }
  render() {
    return <div className="BirdsAnimation" ref={this.yourElement} />;
  }
}

export default BirdsAnimation;
