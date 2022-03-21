import { Component } from "react";

class AddComment extends Component {

    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin

        }
    }

    render() {
        return (
            <div>ADD COMMENT HERE</div>
        )
    }
}

export default AddComment