import React, { useState } from "react";
import { Grid, TextField, Button, Typography } from "@mui/material";
import "./ContactUs.css";
import "@fontsource/bodoni-moda";
import { Box } from '@mui/system';
import { withStyles } from "@material-ui/core/styles";

const CssTextField = withStyles({
    root: {
        '& .MuiInputBase-root': {
            backgroundColor: '#D9D9D9', 
            borderRadius: '20px', 
        },
        "& label": {
            color: "#370E4A", 
        },
        "& .MuiOutlinedInput-root": {
            '&.Mui-focused fieldset': {
                borderColor: "#370E4A", 
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', 
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', 
        },
        "& input": {
            color: "#000000", 
        },
    },
    input: {
        '&::placeholder': {
            textOverflow: 'ellipsis !important',
            color: '#B2B2A2' 
        }
    }
})(TextField);

export default function ContactUsComponent() {
  const [toastVisible, setToastVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(form.name && form.email && form.phone && form.message) {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);

      // Clear form
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="contactUs-center">
      {/* Toast message */}
      <div className={`toast ${toastVisible ? "show" : ""}`}>
        Submitted
      </div>

      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography
            gutterBottom
            variant="h4"
            style={{
              fontFamily: "Roboto",
              fontSize: "90px",
              color: "#E9624C",
              textAlign: "center"
            }}
          >
            CONTACT US
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            style={{ marginTop: "10px", color: "#692E47", textAlign: "center", fontSize: "46px" }}
          >
            Redback Operation
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            style={{ marginTop: "10px", color: "#692E47", textAlign: "center", fontSize: "30px" }}
          >
            E-mail - <a href="mailto:admin@mail.com">admin@mail.com</a>
          </Typography>
          <Box
            sx={{
              borderRadius: '40px',
              border: '2px solid #D6594C',
              p: 3,
              mt: 2,
              mb: 2,
              bgcolor: '#D6594C',
              width: '100%',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <CssTextField
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="number"
                    placeholder="Enter phone number"
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <CssTextField
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: 2
                }}
              >
                <Button
                  style={{
                    borderRadius: '20px',
                    backgroundColor: "#5c2a91",
                    color: "white",
                    textTransform: 'uppercase',
                    padding: '10px 20px',
                    width: '236px',
                    marginBottom: '0'
                  }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
