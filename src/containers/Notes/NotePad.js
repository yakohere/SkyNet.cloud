import React, { Component } from "react";
import Input from "../../components/Input/Input";
import classes from "*.module.css";

class NotePad extends Component {
  state = {
    notesForm: {
      note: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Write your note here!",
        },
      },
      value: "",
    },
    loading: false
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedNotesForm = {
        ...this.state.notesForm
    };
    const updatedFormElement = {
        ...this.state.notesForm[inputIdentifier]
    };
    updatedFormElement = event.target.value;
    updatedNotesForm[inputIdentifier] = updatedFormElement;
    this.setState({notesForm: updatedNotesForm})
  }

  render() {
    let formElementsArray = [];

    for (let key in this.state.notesForm) {
      formElementsArray.push({
        id: key,
        config: this.state.notesForm[key],
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            type={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            changed={(event => this.inputChangedHandler(event, formElement.id))}
          />
        ))}
        <button>
            Save
        </button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.NotePad}>
        <h4>Enter your notes!</h4>
        {form}
      </div>
    );
  }
}

export default NotePad;
