import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  myInput = React.createRef();

  // This sintax allow us to bind the method otherwise we should use
  // a constructur and bind it
  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          ref={this.myInput}
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store --></button>
      </form>
    )
  }
}

export default StorePicker;
