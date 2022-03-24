import React, {Component} from "react";
import './ToggleSwitch.scss';

class ToggleSwitch extends Component {
    render() {
        return (
          <div id= 'first_one' style={{ float:'right', display: 'inline-block'}}>  
          <div className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              name={this.props.name}
              id={this.props.Name}
            />
            <label className="toggle-switch-label" htmlFor={this.props.Name}>
              <span className="toggle-switch-inner" />
              <span className="toggle-switch-switch" />
            </label>
          </div>
          </div>
        );
    }
}
    
export default ToggleSwitch;