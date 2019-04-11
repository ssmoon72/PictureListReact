import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //accessing height from this lifecycle method means you get 0px because the image hasn't fully downloaded yet when this method is run
    //addEventListener waits for an image to emit a 'load event' before running the code then runs the setSpans method as a callback
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //use arrow notation to bind callback and prevent 'this' from being undefined
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    //spans is height of picture divided by height of each row we designated
    const spans = Math.ceil(height / 10);

    this.setState({ spans })
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard;
