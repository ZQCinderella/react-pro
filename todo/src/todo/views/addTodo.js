import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {add_item} from '../actions.js';

class AddItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    /*this.refInput = this.refInput.bind(this);*/
		this.state = {
			value: ''
		}
  }

  onSubmit(ev) {
    ev.preventDefault();

    /*const input = this.input;
    if (!input.value.trim()) {
      return;
    }

    this.props.onAdd(input.value);
    input.value = '';
		*/
		this.props.onAdd(this.state.value);
		this.setState({
			value: ''
		});
  }

  /*refInput(node) {
    this.input = node;
  }*/
	handleChange = (e) => {
		e.preventDefault();
		const input = e.target;
		if (!input.value.trim()) return;
		this.setState({
			value: input.value
		});
	}
  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" value={this.state.value} onChange={this.handleChange} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

AddItem.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(add_item(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddItem);

