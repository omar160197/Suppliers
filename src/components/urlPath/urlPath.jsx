import styles from './urlPath.module.css'
const UrlPath=({path})=>{    
return (
    <p className={styles.path}>
     Zulieferer / {path}
    </p>
)
}
export default UrlPath