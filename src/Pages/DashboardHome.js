import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import target from "../Assets/target.svg";
import gift from "../Assets/gift.svg";

import { Item } from "../Styles/Item.styled";

const DashboardHome = () => {
  return (
    <div>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          marginBottom: "1rem",
        }}
      >
        Your Savings & Contributions
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
            variant="body2"
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
            size="small"
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
            variant="body2"
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
            size="small"
          >
            CREATE NOW
          </Button>
        </Item>
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
            border: "none"
          }}
        >
          <Typography
            variant="h5"
            component="p"
            sx={{
              fontWeight: 600,
              marginBottom: "1rem",
              width: "60%",
            }}
          >
            There is more for you when you refer
          </Typography>
          <Button
            variant="contained"
            disableElevation
            fullWidth="false"
            size="small"
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
    </div>
  );
};

export default DashboardHome;
