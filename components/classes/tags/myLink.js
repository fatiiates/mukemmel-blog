import React from "react";

class MyLink extends React.Component {
  render () {
    const { onCustomClick, ...props } = this.props
    return <a {...props} onClick={this.handleClick} />
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    if (this.props.onCustomClick) {
    this.props.onCustomClick(event);
    }

  }
}

export default MyLink;
