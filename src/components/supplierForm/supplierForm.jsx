import { Box } from "@mui/material";
import UrlPath from "../urlPath/urlPath";
import styles from "./supplierForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonBase, Button } from "@mui/material";

const SuplierForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("please Enter Your FullName"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      website: "",
      internalComments: "",
      deliveryTime: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <Box>
      <UrlPath path={"Zulieferer hinzufugen"} />
      <h3 className={styles.title}>ZULIEFERER HINZUFUGEN</h3>

      <form className={styles.formClass} onSubmit={formik.handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">
            Name
            <i
              style={{ fontSize: "11px", marginLeft: "1px", color: "red" }}
            ></i>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={styles.email}
            {...formik.getFieldProps("name")}
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }} className="error">
            {formik.errors.name}
          </div>
        ) : null}

        <div className={styles.secondInputContainer}>
          <label htmlFor="website">website</label>
          <input
            type="text"
            name="website"
            className={styles.email}
            {...formik.getFieldProps("website")}
          />
        </div>

        <div className={styles.secondInputContainer}>
          <label htmlFor="internalComments">Comments</label>
          <textarea
            id="internalComments"
            name="internalComments"
            cols="53"
            rows="5"
            className={styles.comments}
            {...formik.getFieldProps("internalComments")}
          ></textarea>
        </div>

        <div className={styles.secondInputContainer}>
          <label htmlFor="deliveryTime">deliveryTime</label>
          <input
            id="deliveryTime"
            type="text"
            name="deliveryTime"
            className={styles.email}
            {...formik.getFieldProps("deliveryTime")}
          />
        </div>

        <div>
          <ButtonBase className={styles.supmitButton} type="submit">
            HiNZUFUGEN
          </ButtonBase>
        </div>
      </form>
    </Box>
  );
};
export default SuplierForm;
