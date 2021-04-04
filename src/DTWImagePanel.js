import React, { Component } from "react";

class DTWImagePanel extends Component {
  render() {
    const { image } = this.props;

    console.log(image);

    const imageSrc = `${image.baseUrl}${image.src}`;

    return <img src={imageSrc} alt={image.alt} className="img-fluid" />;
  }
}

export default DTWImagePanel;
