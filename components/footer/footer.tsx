import Styles from "./footer.module.css";

export function Footer(){
  return (
    <footer>
      <div className={Styles.footer}>
        <p>@2022 - Imersão FrontExpert ReactJS</p>
      </div>
    </footer>
  );
}