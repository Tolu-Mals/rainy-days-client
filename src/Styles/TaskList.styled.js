import styled from "styled-components";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export const TaskList = styled(ButtonGroup)`
  && {
    @media screen and (min-width: 600px) {
      width: 66%;
    }
    .MuiButton-root {
    }
  }
`;

export const Task = styled(Button)`
  && {
    background: #f4f8ff;
    border: 1px solid #d2e3ff;
    text-transform: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .task-tag {
      display: flex;
      align-items: center;

      svg {
        margin-right: 1rem;
      }
    }

    .description {
      color: #859cc2;
    }

    .action {
        font-size: 12px;
        font-weight: 600;
    }

    @media screen and (max-width: 600px) {
      .task-tag {
      }
      .action {
        display: none;
      }
    }
  }

  &&:hover{
    background: #d7e5fa;
    border: 1px solid #d2e3ff;
  }
`;
