import React, {component} from "react";

class ToggleStyles extends component {
    state = {
        isHighlighted: true,
    }

    onToggleStyles = () => {
        this.setState(prevState =>({
            isHighlighted: !prevState.isHighlighted
        }))
    }

    render() {
        const {isHighlighted} = this.state
        const buttonClassName = isHighlighted ? "highlighted" : "normal"
        return (
            <button type="button" className={buttonClassName} onClick={this.onToggleStyles}>
                Toggle Styles
            </button>
        )
    }
}

export default ToggleStyles;