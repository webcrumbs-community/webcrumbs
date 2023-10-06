import { Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      Copyright © Your Website {new Date().getFullYear()}.
    </Typography>
  );
}
