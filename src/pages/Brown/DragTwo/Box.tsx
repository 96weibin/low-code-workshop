// import styles from '../styles/Box.module.css';

function Box({ title, children }: any) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Box;
