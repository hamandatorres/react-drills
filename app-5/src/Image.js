import React, {Component} from 'react'

class Image extends Component {
  render(props) {
    return (
      <div>
        <img src={this.props.url} />
      </div>
    )
  }
}
export default Image