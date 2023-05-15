import styles from './style/DragGroup.css';

function DragGroup({ children }: any) {
  return <div className={styles.group}>{children}</div>;
}

export default DragGroup;
