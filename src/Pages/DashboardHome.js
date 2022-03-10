import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import LoadingButton from "@mui/lab/LoadingButton";
import CircularProgress from "@mui/material/CircularProgress";
// import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
// import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import savings from "../Assets/savings_pattern.svg";
import contributions from "../Assets/contribution_pattern.svg";
import target from "../Assets/target.svg";
import gift from "../Assets/gift.svg";
import rotational from "../Assets/rotational.svg";

import { Item } from "../Styles/Item.styled";
import { TaskList, Task } from "../Styles/TaskList.styled";
import { FormContainer, StyledTextField } from "../Styles/FormContainer.styled";
import { SignUpContainer } from "../Styles/SignUpPage.Styled";

import { AuthContext } from "../Contexts/AuthContext";
import { ErrorContext } from "../Contexts/ErrorContext";
import { UserContext } from "../Contexts/UserContext";

import { tokenConfig } from "../Helper/tokenConfig";
import axios from "axios";

const StyledModal = styled(Modal)`
  && {
    .modal-box {
      width: 95%;
      max-width: 557px;
      /* min-height: 90%; */
    }

    .top {
      display: flex;
      justify-content: flex-end;
    }

    #modal-title {
      font-weight: 600;
      font-size: 2rem;
    }
  }
`;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fff",
  boxShadow: 18,
  p: 2,
  borderRadius: 3,
};

const DashboardHome = () => {
  const { auth_state } = useContext(AuthContext);
  const { err_state, err_dispatch } = useContext(ErrorContext);
  const { user_state, user_dispatch } = useContext(UserContext);

  const [isUserInfoModalOpen, setIsUserInfoModalOpen] = React.useState(false);
  const [isBankDetailsModalOpen, setIsBankDetailsModalOpen] =
    React.useState(false);
  const [isTransactionPinModalOpen, setIsTransactionPinModalOpen] =
    React.useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bvn, setBvn] = useState("");

  const [password, setPassword] = useState("");
  const [transactionPin, setTransactionPin] = useState("");
  const [transactionPinConfirmation, setTransactionPinConfirmation] =
    useState("");
  const [bankCode, setBankCode] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [banks, setBanks] = useState([]);

  const handleUserInfoSave = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!firstName || !lastName || !phoneNumber) {
      setIsLoading(false);
      return setError("Please enter all fields");
    }

    const data = {
      email: auth_state.user.email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
    };

    saveUserInfo(data);
  };

  const saveUserInfo = ({ email, first_name, last_name, phone_number }) => {
    const body = JSON.stringify({
      email,
      first_name,
      last_name,
      phone_number,
    });

    axios
      .post(
        "https://rainy-days-savers.herokuapp.com/api/onboard/user-info",
        body,
        tokenConfig(auth_state)
      )
      .then((res) => {
        setIsLoading(false);
        user_dispatch({ type: "USER_INFO_SAVED", payload: res.data });
        err_dispatch({ type: "CLEAR_ERRORS" });
        handleClose("user-info-modal");
      })
      .catch((err) => {
        err_dispatch({
          type: "GET_ERRORS",
          payload: {
            msg: err?.response?.data?.msg,
            status: err?.response?.status,
            id: "USER_INFO_SAVE_FAIL",
          },
        });
      });
  };

  const handleBankDetailsSave = (e) => {
    e.preventDefault();

    if (!accountNumber || !accountName || !bvn || !bankCode) {
      setError("Please fill all fields");
    }

    if (bvn.length !== 11) {
      setError("YOur BVN should have 11 digits");
    }

    const bankDetails = {
      customer_code: user_state.customer_code,
      account_number: accountNumber,
      account_name: accountName,
      bank_code: bankCode,
      bvn: bvn,
    };

    saveBankDetails(bankDetails);
  };

  const saveBankDetails = ({
    customer_code,
    account_number,
    account_name,
    bank_code,
    bvn,
  }) => {
  
    const body = JSON.stringify({
      customer_code,
      account_number,
      account_name,
      bank_code,
      bvn,
    });

    
  };

  const handleOpen = (id) => {
    switch (id) {
      case "user-info-modal":
        setIsUserInfoModalOpen(true);
        break;
      case "bank-details-modal":
        setIsBankDetailsModalOpen(true);
        break;
      case "transaction-pin-modal":
        setIsTransactionPinModalOpen(true);
        break;
      default:
        return;
    }
  };

  const handleClose = (id) => {
    switch (id) {
      case "user-info-modal":
        setIsUserInfoModalOpen(false);
        break;
      case "bank-details-modal":
        setIsBankDetailsModalOpen(false);
        break;
      case "transaction-pin-modal":
        setIsTransactionPinModalOpen(false);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const options = {
      port: 443,
      headers: {
        Authorization:
          "Bearer pk_test_315fe98d33daaa7656216e841f9822893cb316b2",
      },
    };
    axios
      .get("https://api.paystack.co/bank", options)
      .then((response) => {
        setBanks(response.data.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Stack direction={{ xs: "column", sm: "row" }} id="stats" spacing={2}>
        <Item
          rounded
          elevation={0}
          sx={{
            backgroundColor: "#97EA70",
            color: "#fff",
            backgroundImage: `url(${savings})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
          }}
        >
          <div className="top">
            <Typography variant="body2" component="p">
              TOTAL SAVINGS
            </Typography>
            <svg
              width="24"
              height="32"
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9995 2.5C14.1075 2.5 16.6226 3.09784 18.7605 3.77835C19.8796 4.13461 20.8379 4.49463 21.5 4.75817V20.816C21.5 21.7672 21.1077 22.7621 20.2734 23.8195C19.4325 24.8853 18.2427 25.8818 16.9292 26.7608C14.9725 28.0702 12.9673 28.9711 11.9991 29.3724C11.0333 28.9723 9.02756 28.0715 7.07042 26.7617C5.75707 25.8827 4.56738 24.8861 3.72659 23.8203C2.89242 22.7628 2.5 21.7676 2.5 20.816V4.758C3.1614 4.4947 4.11965 4.13467 5.23903 3.77835C7.37692 3.09782 9.89205 2.5 11.9995 2.5Z"
                stroke="white"
                stroke-width="5"
              />
            </svg>
          </div>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            N0.00
          </Typography>
        </Item>
        <Item
          rounded
          elevation={0}
          sx={{
            backgroundColor: "#3E84ED",
            color: "#fff",
            backgroundImage: `url(${contributions})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right bottom",
            backgroundSize: "cover",
          }}
        >
          <div className="top">
            <Typography variant="body2" component="p">
              TOTAL CONTRIBUTIONS
            </Typography>
            <svg
              width="35"
              height="32"
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5909 32L33.4091 32C33.831 32 34.2357 31.8314 34.534 31.5314C34.8324 31.2313 35 30.8243 35 30.4L35 17.6C35 17.1757 34.8324 16.7687 34.534 16.4686C34.2357 16.1686 33.831 16 33.4091 16L28.6364 16L28.6364 1.6C28.6364 1.17566 28.4688 0.76869 28.1704 0.468631C27.872 0.168573 27.4674 3.15618e-06 27.0455 3.11929e-06L7.95454 1.45031e-06C7.53261 1.41342e-06 7.12796 0.168571 6.8296 0.468629C6.53125 0.768688 6.36364 1.17565 6.36364 1.6L6.36364 16L1.59091 16C1.16897 16 0.764318 16.1686 0.465963 16.4686C0.167612 16.7687 -2.51871e-06 17.1757 -2.55581e-06 17.6L-3.67482e-06 30.4C-3.71192e-06 30.8243 0.16761 31.2313 0.465961 31.5314C0.764317 31.8314 1.16897 32 1.5909 32ZM25.4545 3.2L25.4545 6.4C24.6107 6.4 23.8014 6.06286 23.2047 5.46274C22.608 4.86263 22.2727 4.0487 22.2727 3.2L25.4545 3.2ZM9.54545 3.2L12.7273 3.2C12.7273 4.04869 12.392 4.86263 11.7953 5.46274C11.1986 6.06286 10.3893 6.4 9.54545 6.4L9.54545 3.2ZM9.54545 9.6C11.2332 9.6 12.8518 8.92572 14.0452 7.72548C15.2386 6.52525 15.9091 4.89739 15.9091 3.2L19.0909 3.2C19.0909 4.89739 19.7614 6.52525 20.9548 7.72548C22.1482 8.92572 23.7668 9.6 25.4545 9.6L25.4545 22.4L9.54545 22.4L9.54545 9.6ZM3.18182 19.2L6.36364 19.2L6.36363 24C6.36363 24.4243 6.53125 24.8313 6.8296 25.1314C7.12795 25.4314 7.53261 25.6 7.95454 25.6L27.0455 25.6C27.4674 25.6 27.872 25.4314 28.1704 25.1314C28.4688 24.8313 28.6364 24.4243 28.6364 24L28.6364 19.2L31.8182 19.2L31.8182 28.8L3.18182 28.8L3.18182 19.2ZM17.5 11.2C16.556 11.2 15.6333 11.4815 14.8484 12.0089C14.0635 12.5364 13.4518 13.286 13.0906 14.1631C12.7293 15.0402 12.6348 16.0053 12.819 16.9364C13.0031 17.8675 13.4577 18.7228 14.1252 19.3941C14.7926 20.0654 15.6431 20.5226 16.5689 20.7078C17.4947 20.893 18.4543 20.7979 19.3264 20.4346C20.1985 20.0713 20.9439 19.4561 21.4684 18.6667C21.9928 17.8774 22.2727 16.9494 22.2727 16C22.2727 14.727 21.7699 13.5061 20.8748 12.6059C19.9798 11.7057 18.7658 11.2 17.5 11.2ZM17.5 17.6C17.1853 17.6 16.8778 17.5062 16.6161 17.3304C16.3545 17.1545 16.1506 16.9047 16.0302 16.6123C15.9098 16.3199 15.8783 15.9982 15.9397 15.6879C16.001 15.3775 16.1526 15.0924 16.3751 14.8686C16.5976 14.6449 16.881 14.4925 17.1896 14.4307C17.4982 14.369 17.8181 14.4007 18.1088 14.5218C18.3995 14.6429 18.648 14.848 18.8228 15.1111C18.9976 15.3742 19.0909 15.6836 19.0909 16C19.0909 16.4243 18.9233 16.8313 18.6249 17.1314C18.3266 17.4314 17.9219 17.6 17.5 17.6Z"
                fill="white"
              />
            </svg>
          </div>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            N0.00
          </Typography>
        </Item>
        <Item
          rounded
          elevation={0}
          sx={{
            backgroundColor: "#F4F8FF",
            color: "#263959;",
            border: "1px solid #D2E3FF",
          }}
        >
          <div className="top">
            <Typography variant="body2" component="p">
              TOTAL INVESTMENTS
            </Typography>
            <svg
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.8922 9.28707C28.2193 8.58044 27.2771 8.24395 26.3349 8.4122C25.0563 8.64774 23.3065 8.98423 21.4895 9.48896C20.48 6.66246 18.663 3.56677 17.2161 1.3123C16.6777 0.504732 15.8028 0 14.827 0C13.8512 0 12.9763 0.471083 12.438 1.3123C10.9911 3.56677 9.17404 6.66246 8.16457 9.48896C6.34754 9.01788 4.5978 8.64774 3.31915 8.4122C2.37698 8.24395 1.40116 8.58044 0.761837 9.28707C0.088861 9.99369 -0.146681 10.9695 0.088861 11.9117C1.16562 16.0505 2.94901 21.4679 5.43902 23.7897C7.15511 25.3712 8.97214 26.1788 10.7892 26.1788C11.664 26.1788 12.5389 25.9769 13.3801 25.6067V30.5195C13.3801 31.327 14.0531 32 14.8607 32C15.6683 32 16.3412 31.327 16.3412 30.5195V25.6067C18.8985 26.7508 21.725 26.1451 24.2487 23.7897C26.7387 21.4679 28.5221 16.0505 29.5989 11.9117C29.8007 10.9695 29.5652 9.99369 28.8922 9.28707ZM22.2298 21.6362C19.9753 23.7224 17.8891 23.756 15.8701 21.7371L14.827 20.694L13.7839 21.7371C11.765 23.756 9.71242 23.7224 7.4243 21.6362C5.94375 20.2566 4.29496 16.4206 2.98266 11.3733C4.49685 11.6425 6.65037 12.0799 8.70295 12.7192L10.1835 13.1567L10.5873 11.6761C11.3276 8.78234 13.5484 5.08097 14.8607 3.06204C16.173 5.11462 18.3602 8.81598 19.1341 11.6761L19.5379 13.1567L21.0184 12.7192C23.071 12.0799 25.2245 11.6425 26.7387 11.3733C25.3591 16.4206 23.6767 20.2566 22.2298 21.6362Z"
                fill="#97EA70"
              />
            </svg>
          </div>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            N0.00
          </Typography>
        </Item>
      </Stack>

      {/* Check if User has loaded before we check conditions, if not loaded yet we display loader */}

      {user_state.user_loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <>
          <Typography
            variant="h6"
            component="h2"
            sx={{
              marginBottom: "1rem",
            }}
          >
            {false ? "Your Savings & Contributions" : "Complete your profile"}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            {false ? (
              <>
                <Item
                  rounded
                  elevation={0}
                  sx={{
                    backgroundColor: "#FDFEFF",
                    color: "#002055",
                    backgroundImage: `url(${target})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    backgroundPositionY: "80%",
                    border: "1px solid #D2E3FF",
                    minHeight: 196,
                  }}
                >
                  <div className="savings-count">
                    <Typography
                      variant="h2"
                      component="p"
                      sx={{
                        fontWeight: "bold",
                        marginRight: "0.7rem",
                      }}
                      x
                      color="#859CC2;"
                    >
                      0
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      TARGET SAVINGS
                    </Typography>
                  </div>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontWeight: 400,
                      color: "#808080",
                      marginBottom: "1rem",
                      width: "60%",
                    }}
                  >
                    Set a target and do what it takes to reach it
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    fullWidth="false"
                    size="medium"
                  >
                    CREATE NOW
                  </Button>
                </Item>

                <Item
                  rounded
                  elevation={0}
                  sx={{
                    backgroundColor: "#FDFEFF",
                    color: "#002055",
                    backgroundImage: `url(${rotational})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right bottom",
                    backgroundPositionY: "80%",
                    border: "1px solid #D2E3FF",
                    minHeight: 196,
                  }}
                >
                  <div className="savings-count">
                    <Typography
                      variant="h2"
                      component="p"
                      sx={{
                        fontWeight: "bold",
                        marginRight: "0.7rem",
                      }}
                      color="#859CC2;"
                    >
                      0
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      ROTATIONAL SAVINGS
                    </Typography>
                  </div>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      fontWeight: 400,
                      color: "#808080",
                      marginBottom: "1rem",
                      width: "60%",
                    }}
                  >
                    Join a group and save towards a timed goal
                  </Typography>
                  <Button
                    variant="contained"
                    disableElevation
                    fullWidth="false"
                    size="medium"
                  >
                    CREATE NOW
                  </Button>
                </Item>
              </>
            ) : (
              <TaskList orientation="vertical" id="task-list">
                {user_state.first_name ? null : (
                  <Task
                    onClick={() => handleOpen("user-info-modal")}
                    size="large"
                  >
                    <div className="task-tag">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="9" cy="9" r="8.5" stroke="#FF2171" />
                      </svg>
                      <div className="description">
                        We want to know you better
                      </div>
                    </div>

                    <div className="action">COMPLETE NOW</div>
                  </Task>
                )}

                {auth_state.user.isBankInfoSaved ? null : (
                  <Task
                    onClick={() => handleOpen("bank-details-modal")}
                    size="large"
                  >
                    <div className="task-tag">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="9" cy="9" r="8.5" stroke="#FF2171" />
                      </svg>
                      <div className="description">
                        Kindly add your bank details
                      </div>
                    </div>

                    <div className="action">COMPLETE NOW</div>
                  </Task>
                )}

                {auth_state.user.isTransactionPinSet ? null : (
                  <Task
                    onClick={() => handleOpen("transaction-pin-modal")}
                    size="large"
                  >
                    <div className="task-tag">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="9" cy="9" r="8.5" stroke="#FF2171" />
                      </svg>
                      <div className="description">
                        Set your transaction pin
                      </div>
                    </div>

                    <div className="action">COMPLETE NOW</div>
                  </Task>
                )}
              </TaskList>
            )}
            <Item
              rounded
              elevation={0}
              sx={{
                backgroundColor: "#FFF5DC",
                color: "#263959",
                backgroundImage: `url(${gift})`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "100%",
                backgroundPositionY: "80%",
                border: "1px solid #D2E3FF",
                minHeight: 196,
                border: "none",
              }}
            >
              <Typography
                component="p"
                sx={{
                  fontWeight: 600,
                  marginBottom: "1rem",
                  width: "60%",
                  fontSize: 24,
                }}
              >
                There is more for you when you refer
              </Typography>
              <Button
                variant="contained"
                disableElevation
                // fullWidth="false"
                size="medium"
                sx={{
                  color: "#263959",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "#efefef",
                  },
                }}
              >
                REFER NOW
              </Button>
            </Item>
          </Stack>
        </>
      )}

      <StyledModal
        open={isUserInfoModalOpen}
        onClose={() => handleClose("user-info-modal")}
        id="user-info-modal"
      >
        <Box sx={modalStyle} className="modal-box">
          <div className="top">
            <IconButton
              aria-label="close"
              onClick={() => handleClose("user-info-modal")}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <Typography id="modal-title" sx={{ mb: 2 }}>
            Let's get to know more about you
          </Typography>

          <SignUpContainer container id="target-savings-container">
            <FormContainer item xs={12} md={12} id="target-savings-grid">
              <form id="signup-form user-information" l>
                {error && (
                  <Alert
                    severity="error"
                    sx={{
                      marginBottom: "1rem",
                    }}
                  >
                    {error}
                  </Alert>
                )}

                {err_state.msg && (
                  <Alert
                    severity="error"
                    sx={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    {err_state.msg}
                  </Alert>
                )}

                <StyledTextField
                  required
                  fullWidth
                  id="first-name"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  variant="outlined"
                  className="input"
                />

                <StyledTextField
                  required
                  fullWidth
                  id="last-name"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  variant="outlined"
                  className="input"
                />

                <StyledTextField
                  required
                  fullWidth
                  id="phone-number"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="tel"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  variant="outlined"
                  className="input"
                />
                {/* 
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack
                    spacing={3}
                    sx={{
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    <DesktopDatePicker
                      label="Date of birth"
                      inputFormat="MM/dd/yyyy"
                      value={dob}
                      onChange={setDob}
                      renderInput={(params) => <TextField {...params} />}
                      sx={{
                        display: { xs: "none", md: "block" },
                      }}
                    />
                  </Stack>
                </LocalizationProvider> */}

                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack
                    spacing={3}
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <MobileDatePicker
                      label="Date of birth"
                      inputFormat="MM/dd/yyyy"
                      value={dob}
                      onChange={setDob}
                      renderInput={(params) => <TextField {...params} />}
                      sx={{
                        width: "100%",
                      }}
                    />
                  </Stack>
                </LocalizationProvider> */}

                {isLoading ? (
                  <LoadingButton
                    variant="contained"
                    fullWidth
                    disableElevation
                    loading
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    NEXT
                  </LoadingButton>
                ) : (
                  <Button
                    variant="contained"
                    fullWidth
                    disableElevation
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                    onClick={(e) => handleUserInfoSave(e)}
                  >
                    SAVE
                  </Button>
                )}
              </form>
            </FormContainer>
          </SignUpContainer>
        </Box>
      </StyledModal>

      <StyledModal
        open={isBankDetailsModalOpen}
        onClose={() => handleClose("bank-details-modal")}
        id="bank-details-modal"
      >
        <Box sx={modalStyle} className="modal-box">
          <div className="top">
            <IconButton
              aria-label="close"
              onClick={() => handleClose("bank-details-modal")}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <Typography id="modal-title" sx={{ mb: 2 }}>
            Let's get your bank details
          </Typography>

          <SignUpContainer container id="target-savings-container">
            <FormContainer item xs={12} md={12} id="target-savings-grid">
              <form id="signup-form user-information">
                {error && (
                  <Alert
                    severity="error"
                    sx={{
                      marginBottom: "1rem",
                    }}
                  >
                    {error}
                  </Alert>
                )}

                {err_state.msg && (
                  <Alert
                    severity="error"
                    sx={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    {err_state.msg}
                  </Alert>
                )}

                <StyledTextField
                  required
                  fullWidth
                  id="account-number"
                  placeholder="Account Number"
                  onChange={(e) => setAccountNumber(e.target.value)}
                  value={accountNumber}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  variant="outlined"
                  className="input"
                  type="number"
                />

                <StyledTextField
                  required
                  fullWidth
                  id="account-name"
                  placeholder="Account Name"
                  onChange={(e) => setAccountName(e.target.value)}
                  value={accountName}
                  variant="outlined"
                  className="input"
                />

                <StyledTextField
                  id="bank-name"
                  select
                  label="Bank"
                  value={bankCode}
                  onChange={(e) => setBankCode(e.target.value)}
                  variant="outlined"
                  fullWidth
                  className="input"
                  sx={{
                    textAlign: "left",
                  }}
                >
                  {banks.map((bank) => {
                    return (
                      <MenuItem key={bank.id} value={bank.code}>
                        {bank.name}
                      </MenuItem>
                    );
                  })}
                </StyledTextField>

                <StyledTextField
                  required
                  fullWidth
                  id="bvn"
                  placeholder="BVN"
                  onChange={(e) => setBvn(e.target.value)}
                  value={bvn}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  variant="outlined"
                  className="input"
                  type="number"
                />

                {isLoading ? (
                  <LoadingButton
                    variant="contained"
                    fullWidth
                    disableElevation
                    loading
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    NEXT
                  </LoadingButton>
                ) : (
                  <Button
                    variant="contained"
                    fullWidth
                    disableElevation
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                    onClick={(e) => handleBankDetailsSave(e)}
                  >
                    NEXT
                  </Button>
                )}
              </form>
            </FormContainer>
          </SignUpContainer>
        </Box>
      </StyledModal>

      <StyledModal
        open={isTransactionPinModalOpen}
        onClose={() => handleClose("transaction-pin-modal")}
        id="transaction-pin-modal"
      >
        <Box sx={modalStyle} className="modal-box">
          <div className="top">
            <IconButton
              aria-label="close"
              onClick={() => handleClose("transaction-pin-modal")}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <Typography id="modal-title" sx={{ mb: 2 }}>
            Let's set your transaction pin
          </Typography>

          <SignUpContainer container id="target-savings-container">
            <FormContainer item xs={12} md={12} id="target-savings-grid">
              <form id="signup-form user-information" l>
                {error && (
                  <Alert
                    severity="error"
                    sx={{
                      marginBottom: "1rem",
                    }}
                  >
                    {error}
                  </Alert>
                )}

                {err_state.msg && (
                  <Alert
                    severity="error"
                    sx={{
                      marginBottom: "0.5rem",
                    }}
                  >
                    {err_state.msg}
                  </Alert>
                )}

                <StyledTextField
                  required
                  fullWidth
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  variant="outlined"
                  className="input"
                />

                <StyledTextField
                  required
                  fullWidth
                  id="transaction-pin"
                  placeholder="Transaction Pin"
                  onChange={(e) => setTransactionPin(e.target.value)}
                  value={transactionPin}
                  variant="outlined"
                  className="input"
                />

                <StyledTextField
                  required
                  fullWidth
                  id="transaction-pin-confirmation"
                  placeholder="Confirm Transaction Pin"
                  onChange={(e) =>
                    setTransactionPinConfirmation(e.target.value)
                  }
                  value={transactionPinConfirmation}
                  variant="outlined"
                  className="input"
                />

                {isLoading ? (
                  <LoadingButton
                    variant="contained"
                    fullWidth
                    disableElevation
                    loading
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    NEXT
                  </LoadingButton>
                ) : (
                  <Button
                    variant="contained"
                    fullWidth
                    disableElevation
                    color="primary"
                    size="large"
                    sx={{
                      marginBottom: "1rem",
                      marginTop: "1rem",
                    }}
                  >
                    NEXT
                  </Button>
                )}
              </form>
            </FormContainer>
          </SignUpContainer>
        </Box>
      </StyledModal>
    </div>
  );
};

export default DashboardHome;
