import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";
import OrderControl from "../reusables/OrderControl";

const isEmpty = (value) => value.length === 0;

export default function Checkout({ styledSubtotal, goBackToCart }) {
  const cvcRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const creditCardRef = useRef();
  const expirationRef = useRef();

  const [formInvalidity, setFormInvalidity] = useState({});

  const confirmOrder = () => {
    const enteredCVC = cvcRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredCreditCard = creditCardRef.current.value;
    const enteredExpiration = expirationRef.current.value;

    const CVCIsValid = !isEmpty(enteredCVC);
    const nameIsValid = !isEmpty(enteredName);
    const phoneIsValid = !isEmpty(enteredPhone);
    const addressIsValid = !isEmpty(enteredAddress);
    const creditCardIsValid = !isEmpty(enteredCreditCard);
    const expirationIsValid = !isEmpty(enteredExpiration);

    const formIsValid =
      CVCIsValid &&
      nameIsValid &&
      phoneIsValid &&
      addressIsValid &&
      creditCardIsValid &&
      expirationIsValid;

    setFormInvalidity({
      cvc: !CVCIsValid,
      name: !nameIsValid,
      phone: !phoneIsValid,
      address: !addressIsValid,
      creditCard: !creditCardIsValid,
      expiration: !expirationIsValid,
    });

    if (!formIsValid) {
      return;
    }
  };

  const nameSecondaryClass = formInvalidity.name && styles.invalid;
  const phoneSecondaryClass = formInvalidity.phone && styles.invalid;
  const addressSecondaryClass = formInvalidity.address && styles.invalid;
  const creditCardSecondaryClass = formInvalidity.creditCard && styles.invalid;
  const expirationTertiaryClass = formInvalidity.expiration && styles.invalid;

  return (
    <>
      <h2 className={styles.title}>Checkout</h2>
      <form className={styles.form}>
        <section className={styles["form-section"]}>
          <div className={styles["section-title"]}>
            <h4>Delivery Address</h4>
          </div>
          <div className={`${styles["form-item"]} ${nameSecondaryClass}`}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" ref={nameRef} />
          </div>
          <div className={`${styles["form-item"]} ${phoneSecondaryClass}`}>
            <label htmlFor="phone-number">Phone</label>
            <input id="phone-number" type="text" ref={phoneRef} />
          </div>
          <div className={`${styles["form-item"]} ${addressSecondaryClass}`}>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" ref={addressRef} />
          </div>
        </section>
        <hr />
        <section className={styles["form-section"]}>
          <div className={styles["section-title"]}>
            <h4>Payment</h4>
          </div>
          <div className={`${styles["form-item"]} ${creditCardSecondaryClass}`}>
            <label htmlFor="card-number">Credit Card</label>
            <input id="card-number" type="text" ref={creditCardRef} />
          </div>
          <div
            className={`${styles["form-item"]} ${styles["expiration-div"]}  ${expirationTertiaryClass}`}
          >
            <label htmlFor="expiration">Expiration</label>
            <input id="expiration" type="date" ref={expirationRef} />
          </div>
          <div
            className={`${styles["form-item"]} ${styles["cvc-div"]} ${
              formInvalidity.expiration && styles.invalid
            }`}
          >
            <label htmlFor="cvc">CVC</label>
            <input
              className={`${styles["cvc-input"]} ${
                formInvalidity.cvc && styles["invalid-cvc"]
              }`}
              id="cvc"
              type="number"
              ref={cvcRef}
            />
          </div>
        </section>
      </form>
      <OrderControl
        subtotal={styledSubtotal}
        leftBtn={{ text: "Go Back", func: goBackToCart }}
        rightBtn={{ text: "Confirm", func: confirmOrder }}
      ></OrderControl>
    </>
  );
}
