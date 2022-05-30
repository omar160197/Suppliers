import { Box, Divider } from "@mui/material";
import styles from "./sidebar.module.css";
const SideBar = () => {
  return (
    <Box className={styles.parent}>
      <p className={styles.title}>Zulieferer</p>
      <Divider className={styles.divider} />
      <Box className={styles.plusContainer}>
        <i
          style={{ fontSize: "60px", marginLeft: "5%", color: "#ff9800" }}
          className="fa-regular fa-plus"
        ></i>
        <p className={styles.subTitle}>Zulieferer hinzufugen</p>
      </Box>
      <Divider className={styles.divider} />
    </Box>
  );
};
export default SideBar;
