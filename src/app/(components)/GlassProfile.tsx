import styles from "./styles/GlassProfile.module.css";
import neumorphic from "./styles/undented.module.css";
function GlassProfile() {
  const expand = (e) => {
    document.getElementById("glassProfile").classList.toggle(styles.open);
    document.getElementById("glassProfile").classList.toggle(styles.close);
  };
  return (
    <div
      className={
        styles.container1 + " " + styles.close + " " + neumorphic.undented
      }
      id="glassProfile"
    >
      <div className={styles.wrapper1}>
        <div>
          <img alt="Avatar" src="favicon.ico" className={styles.avatar} />
        </div>

        <button className={styles.collapseArrow} onClick={expand}>
          <img src="expand.svg" />
        </button>
        <div className={styles.text1}>
          <div className={styles.icons1}>
            <li>
              <button>
                <img src="balance.svg"></img>
              </button>
              <p>
                {" "}
                <w3m-button />
              </p>
            </li>
            <li>
              <button>
                <img src="pouch.jpg"></img>
              </button>
              <p>Inventory</p>
            </li>
            <li>
              <button>
                <img src="swap.svg"></img>
              </button>
              <p>Trade Requests</p>
            </li>
            <li>
              <button>
                <img src="world.svg"></img>
              </button>
              <p>World</p>
            </li>
            <li>
              <button>
                <img src="cart.svg"></img>
              </button>
              <p>Shopping Cart</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GlassProfile;
