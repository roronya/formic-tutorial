import React from "react";
import { withFormik  } from "formik";

const InnerForm = props => {
  const { values, handleSubmit, setFieldValue} = props;
  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(values.permissions).map(permission => (
        <div key={permission}>
          <input
            type="checkbox"
            id={permission}
            name={permission}
            value={values.permissions[permission]}
            checked={values.permissions[permission]}
            onChange={(e) => setFieldValue(`permissions.${permission}`, e.target.checked)}
          />
          <label htmlFor={permission}>{permission}</label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

const EnhancedForm = withFormik({
  mapPropsToValues: props => ({
    permissions: {
      read: props.permissions.includes("read"),
      write: props.permissions.includes("write"),
      exec: props.permissions.includes("exec")
    }
  }),
  handleSubmit: values => {
    console.log(
      Object.entries(values.permissions)
        .filter(p => p[1])
        .map(p => p[0])
    );
  }
})(InnerForm);

export default EnhancedForm;
