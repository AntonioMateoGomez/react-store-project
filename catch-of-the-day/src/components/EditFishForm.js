import React from "react";
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
    }),
    addToOrder: PropTypes.func,
    index: PropTypes.string,
    updatedFish: PropTypes.func
  }

  handleChange = (event) => {
    // update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.name === "price" ? parseFloat(event.currentTarget.value) : event.currentTarget.value,
    };
    // 2. call the App.js method to update the state
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    const {name, price, status, desc, image } = this.props.fish;
    return (
      <div className="fish-edit">
        <input type="text" name="name" onChange={this.handleChange} value={name} />
        <input type="text" name="price" onChange={this.handleChange} value={price} />
        <select type="text" name="status" onChange={this.handleChange} value={status} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" onChange={this.handleChange} value={desc} />
        <input type="text" name="image" onChange={this.handleChange} value={image} />
        <button
          onClick={() => this.props.deleteFish(this.props.index)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
