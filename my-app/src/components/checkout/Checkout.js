import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkout.module.css";
import OrderControl from "../reusables/OrderControl";

const isEmpty = (value) => value.length === 0;

export default function Checkout({
  styledSubtotal,
  goBackToCart,
  submitOrder,
  clearCheckoutform,
  setClearCheckoutForm,
}) {
  const cvcRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const creditCardRef = useRef();
  const expirationRef = useRef();

  const formRef = useRef();

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

    const userData = {
      deliveryInfo: {
        name: enteredName,
        phone: enteredPhone,
        address: enteredAddress,
      },
      paymentInfo: {
        cvc: enteredCVC,
        creditCard: enteredCreditCard,
        expiration: enteredExpiration,
      },
    };

    submitOrder(userData);
  };

  const nameSecondaryClass = formInvalidity.name && styles.invalid;
  const phoneSecondaryClass = formInvalidity.phone && styles.invalid;
  const addressSecondaryClass = formInvalidity.address && styles.invalid;
  const creditCardSecondaryClass = formInvalidity.creditCard && styles.invalid;
  const expirationTertiaryClass = formInvalidity.expiration && styles.invalid;
  const cvcTertiaryClass = formInvalidity.cvc && styles.invalid;

  const nameInvalidityHandler = () => {
    setFormInvalidity((prev) => {
      return { ...prev, name: false };
    });
  };

  const phoneInvalidityHandler = () => {
    setFormInvalidity((prev) => {
      return { ...prev, phone: false };
    });
  };

  const addressInvalidityHandler = () => {
    setFormInvalidity((prev) => {
      return { ...prev, address: false };
    });
  };

  const creditCardInvalidityHandler = () => {
    setFormInvalidity((prev) => {
      return { ...prev, creditCard: false };
    });
  };

  const expirationInvalidityHandler = () => {
    setFormInvalidity((prev) => {
      return { ...prev, expiration: false };
    });
  };

  const cvcInvalidityHandler = () => {
    setFormInvalidity((prev) => {
      return { ...prev, cvc: false };
    });
  };

  if (clearCheckoutform) {
    cvcRef.current.value = null;
    nameRef.current.value = null;
    phoneRef.current.value = null;
    addressRef.current.value = null;
    creditCardRef.current.value = null;
    expirationRef.current.value = null;
  }

  useEffect(() => {
    setClearCheckoutForm(false);
  }, [clearCheckoutform]);

  return (
    <>
      <h2 className={styles.title}>Checkout</h2>
      <form className={styles.form} ref={formRef}>
        <section className={styles["form-section"]}>
          <div className={styles["section-title"]}>
            <h4>Delivery Address</h4>
          </div>
          <div className={`${styles["form-item"]} ${nameSecondaryClass}`}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              ref={nameRef}
              onChange={nameInvalidityHandler}
            />
          </div>
          <div className={`${styles["form-item"]} ${phoneSecondaryClass}`}>
            <label htmlFor="phone-number">Phone</label>
            <input
              id="phone-number"
              type="text"
              ref={phoneRef}
              onChange={phoneInvalidityHandler}
            />
          </div>
          <div className={`${styles["form-item"]} ${addressSecondaryClass}`}>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              ref={addressRef}
              onChange={addressInvalidityHandler}
            />
          </div>
        </section>
        <hr />
        <section className={styles["form-section"]}>
          <div className={styles["section-title"]}>
            <h4>Payment</h4>
          </div>
          <div className={`${styles["form-item"]} ${creditCardSecondaryClass}`}>
            <label htmlFor="card-number">Credit Card</label>
            <input
              id="card-number"
              type="text"
              ref={creditCardRef}
              onChange={creditCardInvalidityHandler}
            />
          </div>
          <div
            className={`${styles["form-item"]} 
            ${styles["expiration-div"]}  
            ${expirationTertiaryClass}`}
          >
            <label htmlFor="expiration">Expiration</label>
            <input
              id="expiration"
              type="date"
              ref={expirationRef}
              onChange={expirationInvalidityHandler}
            />
          </div>
          <div
            className={`${styles["form-item"]} 
            ${styles["cvc-div"]} 
            ${cvcTertiaryClass}`}
          >
            <label htmlFor="cvc">CVC</label>
            <input
              className={`${styles["cvc-input"]}`}
              id="cvc"
              type="number"
              ref={cvcRef}
              onChange={cvcInvalidityHandler}
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
