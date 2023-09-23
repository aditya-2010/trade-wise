import styles from "./Header.module.css";

function Header() {
  function greet() {
    let msg = "";
    const today = new Date().toTimeString();
    if (+today.slice(0, 2) <= 12) msg = "morning";
    else if (+today.slice(0, 2) > 12 && today.slice(0, 2) < 16)
      msg = "afternoon";
    else msg = "evening";
    return `Good ${msg}!`;
  }

  function displayDate() {
    const today = new Date().toDateString();
    const day = today.slice(0, 3);
    const date = today.slice(4);
    return `It's ${day}, ${date}`;
  }

  displayDate();

  return (
    <header className={styles.header}>
      {/* <img src="./banner.jpg" alt="" /> */}
      <div className={styles.title}>
        <h1>{greet()}</h1>
        <h3>{displayDate()}</h3>
      </div>
    </header>
  );
}

export default Header;
