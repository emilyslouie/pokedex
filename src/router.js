import React from "react";
import Gen1 from "./components/Gen1.js";
import Gen2 from "./components/Gen2";
import Gen3 from "./components/Gen3";
import Gen4 from "./components/Gen4"
const routes = {
  "/": () => <Gen1 />,
  "/gen1": () => <Gen1 />,
  "/gen2": () => <Gen2 />,
  "/gen3": () => <Gen3 />,
  "/gen4": () => <Gen4 />
};

export default routes;
