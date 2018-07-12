import React from "react";

class PermissionSelectorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      permission_checked: {
        read: this.props.permission.includes("read"),
        write: this.props.permission.includes("write"),
        exec: this.props.permission.includes("exec")
      }
    };
  }

  handleChange(type, value) {
    const { permission_checked } = this.state;
    permission_checked[type] = value;
    this.setState({ permission_checked });
  }

  render() {
    return (
      <div>
        <form>
          {["read", "write", "exec"].map(permission => (
            <div key={`pure-${permission}`}>
              <input
                type="checkbox"
                id={`pure-${permission}`}
                name={permission}
                value={this.state.permission_checked[permission]}
                checked={this.state.permission_checked[permission]}
                onChange={e => this.handleChange(permission, e.target.checked)}
              />
              <label htmlFor={`pure-${permission}`}>{permission}</label>
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default PermissionSelectorForm;
