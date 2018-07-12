import React from 'react';
import {withFormik} from 'formik';

const MyInnerForm = props => {
    const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{display: 'block'}}>
                Email
            </label>
            <input
                id="email"
                placeholder="Enter your email"
                type="text"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'text-input error' : 'text-input'}
            />
            {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};

const EnhancedForm = withFormik({
    mapPropsToValues: () => ({email: ''}),
    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },
    displayName: 'BasicForm',
})(MyInnerForm);

export default EnhancedForm;
