import React, { useContext, useState } from "react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { usePaystackPayment } from "react-paystack";
import AppState from "../context/AppState";

const useStyles = makeStyles((theme) => ({
  // Styles go here
  root: {
    width: "90%",
    maxWidth: 1100,
    margin: "30px auto",
  },
  billing_container: {
    margin: "50px 0",
  },
  form_group: {
    margin: "10px 0",

    "& .MuiTextField-root": {
      width: "100%",
    },
  },
}));


const Checkout = () => {
    
    const publicKey = 'pk_live_1654bc73d1f146adfde092195985a67a6d425ba5';
     const { total } = useContext(AppState);
     const amount = total * 100;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

  const config = {
    reference: (new Date()).getTime().toString(),
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey
  };

   // you can call this function anything
   const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const PaystackHookExample = () => {
      const initializePayment = usePaystackPayment(config);
      return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
        </div>
      );
  };
  const classes = useStyles();

  return (
    <ResponsiveDrawer>
      <div className={classes.root}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined" color="primary">
            Back
          </Button>
        </Link>
        <div className={classes.billing_container}>
          <div className="billing_form">
            <h2>Billing Details</h2>
            <form>
              <div className={classes.form_group}>
                <TextField
                  value={name}
                  id="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className={classes.form_group}>
                <TextField
                value={email}
                  id="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className={classes.form_group}>
                <TextField
                value={phone}
                  id="phone"
                  type="number"
                  label="Phone"
                  variant="outlined"
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
            </form>
            <PaystackHookExample />
          </div>
          <div className="billing_items"></div>
        </div>
      </div>
    </ResponsiveDrawer>
  );
};

export default Checkout;
