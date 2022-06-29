import React from "react";
import { useFormikContext, Field } from "formik";

const FormField2 = ({ name, title, placeholder }) => {
  const { errors, touched } = useFormikContext();
  return (
    <div className="py-2 px-4 mb-2 text-end">
      <label
        className="px-4 py-2 text-lg font-semibold text-white"
        htmlFor={name}
      >
        {title}
      </label>
      <Field
        name={name}
        placeholder={placeholder}
        type={name}
        className="py-2 px-3 w-72 rounded-md border border-slate-400  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600"
      />
      {errors[name] && touched[name] ? (
        <p className="text-center text-red-500 ">
          <span className="italic">{errors[name]}</span>
        </p>
      ) : null}
    </div>
  );
};

export default FormField2;
