import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonBase, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from "./contact.module.css";
import ImportantStar from "../importantStar/importantStar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  getSelectedContact,
  removeContact,
} from "../../store/contacts/contactsSlice";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Contact = () => {
  const validationSchema = Yup.object({
    gender: Yup.string().optional("please Enter Your gender"),
    firstName: Yup.string().required("please Enter Your firstName"),
    lastName: Yup.string().required("please select Your gender"),
    phone: Yup.string().required("please Enter Your phone"),
    email: Yup.string()
      .required("Please Enter your Email")
      .email("Invalid email format"),
  });

  const [genderStatus, setGenderStatus] = useState("");
  const { contacts, selectedContact } = useSelector((state) => state.contact);
  const [formNumber, setFormNumber] = useState(0);


  const handelReduceFormNum = () => {
     
    if (formNumber > 1) {
      setFormNumber(formNumber - 1);
      dispatch(getSelectedContact(formNumber - 2));
      console.log(selectedContact);
    } 
    
  };


  const handelIncreseFormNum = () => {
    if (formNumber < contacts.length) {
      setFormNumber(formNumber + 1);
      dispatch(getSelectedContact(formNumber));
      console.log(selectedContact);
    } 
  };

  const handelDeleteContact = () => {
    if (formNumber >= 1) {
      dispatch(removeContact(formNumber - 1));
      if(formNumber !== 1 || contacts.length === 1) setFormNumber(formNumber - 1);
    }
  };

  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:{
      gender: selectedContact.gender,
      firstName: selectedContact.firstName, 
      lastName: selectedContact.lastName,
      phone: selectedContact.phone,
      email: selectedContact.email,
      position: selectedContact.position,
      spokenLanguage: selectedContact.spokenLanguage,
    },
    onSubmit: (values, { resetForm }) => {
      values.gender = genderStatus;
      if (values) {
        dispatch(addContact(values));
        setFormNumber(contacts.length+1)
        dispatch(getSelectedContact(formNumber));
      }
     
    },
    validationSchema,
  });

  return (
    <Box
      style={{
        border: "2px solid #F5F5F5",
        boxSizing: "border-box",
        MozBoxSizing: "border-box",
      }}
    >
      <div className={styles.headerDiv}>
        <h4>Contacts</h4>
        <i
          style={{ fontSize: "25px", marginTop: "1%" }}
          className="fa-solid fa-angle-down"
        ></i>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ flexGrow: 1, padding: "2%" }}>
          <Grid
            container
            sx={{ alignItems: "flex-end" }}
            spacing={{ xs: 1, md: 2 }}
          >
            <>
              <Grid item xs={12} sm={12} md={6}>
                {/* gender */}
                <div className={styles.inputContainer}>
                  <label htmlFor="gender">
                    gender
                    <ImportantStar />
                  </label>
                  <Box className={styles.radioWraper}>
                    <div>
                      <div className={styles.radioContainer}>
                        <input
                          value="male"
                          type="radio"
                          name="gender"
                          className={styles.radio}
                          onClick={() => setGenderStatus("male")}
                          {...formik.getFieldProps("gender")}
                        />
                      </div>
                      <span> Male</span>
                    </div>
                    <div>
                      <div className={styles.radioContainer}>
                        <input
                          value="female"
                          type="radio"
                          name="gender"
                          onClick={() => setGenderStatus("female")}
                          className={styles.radio}
                          {...formik.getFieldProps("gender")}
                        />
                      </div>
                      <span> female</span>
                    </div>
                  </Box>
                </div>
                {genderStatus === "" ? (
                  <div style={{ color: "red" }} className="error">
                    {formik.errors.gender}
                  </div>
                ) : null}

                {/* firstName */}
                <div className={styles.inputContainer}>
                  <label htmlFor="firstName">
                    firstName
                    <ImportantStar />
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className={styles.email}
                    {...formik.getFieldProps("firstName")}
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div style={{ color: "red" }} className="error">
                    {formik.errors.firstName}
                  </div>
                ) : null}

                {/* position */}
                <div className={styles.secondInputContainer}>
                  <label htmlFor="position">position</label>
                  <input
                    type="text"
                    name="position"
                    className={styles.email}
                    {...formik.getFieldProps("position")}
                  />
                </div>

                {/* phone */}
                <div className={styles.secondInputContainer}>
                  <label htmlFor="phone">
                    phone
                    <ImportantStar />
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className={styles.email}
                    {...formik.getFieldProps("phone")}
                  />
                </div>
                {formik.touched.phone && formik.errors.phone ? (
                  <div style={{ color: "red" }} className="error">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </Grid>

              <Grid item xs={12} sm={12} md={6}>
                {/* name */}
                <div className={styles.inputContainer}>
                  <label htmlFor="lastName">
                    lastName
                    <ImportantStar />
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className={styles.email}
                    {...formik.getFieldProps("lastName")}
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div style={{ color: "red" }} className="error">
                    {formik.errors.lastName}
                  </div>
                ) : null}

                {/* spokenLanguage */}
                <div className={styles.secondInputContainer}>
                  <label htmlFor="spokenLanguage">spokenLanguage</label>
                  <input
                    type="text"
                    name="spokenLanguage"
                    className={styles.email}
                    {...formik.getFieldProps("spokenLanguage")}
                  />
                </div>

                {/* email */}
                <div className={styles.secondInputContainer}>
                  <label htmlFor="email">
                    email
                    <ImportantStar />
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className={styles.email}
                    {...formik.getFieldProps("email")}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }} className="error">
                    {formik.errors.email}
                  </div>
                ) : null}
              </Grid>
            </>
          </Grid>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: "2%" }}
        >
          <ArrowBackIosIcon
            onClick={handelReduceFormNum}
            sx={{ marginRight: "5%", cursor: "pointer" }}
          />
          {`${formNumber} / ${contacts.length}`}
          <ArrowForwardIosIcon
            onClick={handelIncreseFormNum}
            sx={{ marginLeft: "5%", cursor: "pointer" }}
          />
        </Box>
        <Box className={styles.buttonsWrap}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={handelDeleteContact}
                  className={styles.cancelButton}
                  variant="outlined"
                >
                  ABBRECHEN
                </Button>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonBase className={styles.supmitButton} type="submit">
                  SPEICHERN
                </ButtonBase>
              </div>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};
export default Contact;
