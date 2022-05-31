import { Box } from "@mui/material";
import UrlPath from "../urlPath/urlPath";
import styles from "./supplierForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonBase, Button } from "@mui/material";
import ImportantStar from "../importantStar/importantStar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addSupplierData } from "../../store/suopplier/supplierSlice";

const SuplierForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("please Enter Your FullName"),
  });

  const { contacts } = useSelector((state) => state.contact);
  const [contactsStatus, setContactsStatus] = useState(false);
  const [success,setSuccsss]=useState(false)
  const dispatch=useDispatch()

  const formik = useFormik({
    initialValues: {
      name: "",
      website: "",
      internalComments: "",
      deliveryTime: "",
    },

    onSubmit: (values) => {
      if (contacts.length===0) {
        setContactsStatus(true);
      } else {
        setContactsStatus(false);
        setSuccsss(true)
        values.contacts = contacts;

        dispatch(addSupplierData(values))
        console.log(values);
      }
    },
    validationSchema,
  });

  return (
    <Box>
      <UrlPath path={"Zulieferer hinzufugen"} />
      <h3 className={styles.title}>ZULIEFERER HINZUFUGEN</h3>
      <div
        style={{
          display: `${contactsStatus ? "flex" : "none"}`,
          backgroundColor: "red",
          color: "white",
          fontWeight: "bold",
          paddingTop: "2%",
          paddingBottom: "2%",
          justifyContent:"center"
        }}
      >
        Add contact info first
      </div>
      <div
        style={{
          display: `${success ? "flex" : "none"}`,
          backgroundColor: "green",
          color: "white",
          fontWeight: "bold",
          paddingTop: "2%",
          paddingBottom: "2%",
          justifyContent:"center"
        }}
      >
        Add successfully 
      </div>
      <form className={styles.formClass} onSubmit={formik.handleSubmit}>
        {/* name */}
        <div className={styles.inputContainer}>
          <label htmlFor="name">
            Name
            <ImportantStar />
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

        {/* website */}
        <div className={styles.secondInputContainer}>
          <label htmlFor="website">website</label>
          <input
            type="text"
            name="website"
            className={styles.email}
            {...formik.getFieldProps("website")}
          />
        </div>

        {/* internalComments */}
        <div className={styles.secondInputContainer}>
          <label htmlFor="internalComments">Comments</label>
          <textarea
            id="internalComments"
            name="internalComments"
            style={{ width: "100%" }}
            rows="5"
            className={styles.comments}
            {...formik.getFieldProps("internalComments")}
          ></textarea>
        </div>

        {/* deliveryTime */}
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

        {/* submition button */}
        <div className="parent">
          <ButtonBase className={styles.supmitButton} type="submit">
            HiNZUFUGEN
          </ButtonBase>
        </div>
      </form>
    </Box>
  );
};
export default SuplierForm;
