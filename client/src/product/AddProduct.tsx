import React from "react";
import { useFormik } from "formik";

interface FormValues {
  title: string;
  price: number;
}

interface AddProductProps {
  onSubmit: (formValues: FormValues) => void;
}

export const AddProduct = ({ onSubmit }: AddProductProps) => {
  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      price: 0
    },
    onSubmit: values => {
      onSubmit(values);
    }
  });
  const { title, price } = formik.values;

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ padding: 10, marginTop: 20, border: "solid" }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={title}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="lastName">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={price}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
