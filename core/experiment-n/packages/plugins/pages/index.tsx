import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Plugin1 from "@/webcrumbs/Plugin1";
import Plugin2 from "@/webcrumbs/Plugin2";

const HomePage: FC = () => {
  const [plugin, setPlugin] = useState("wc_plugin1");

  return (
    <Box>
      <Box p={4}>
        <Plugin1 />
      </Box>
      <Box p={4}>
        <Plugin2 />
      </Box>
    </Box>
  );
};

export default HomePage;
