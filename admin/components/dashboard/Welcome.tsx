import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function Welcome() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography variant="h3">Welcome to WebCrumbs!</Typography>
      <Link href="https://github.com/webcrumbs-community/webcrumbs" passHref>
        <Typography variant="h5">Learn more about this version</Typography>
      </Link>
    </React.Fragment>
  );
}
