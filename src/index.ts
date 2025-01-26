import express from "express";
import bodyParser from "body-parser";
import { fetchState, fetchMappings } from "./services/apiService";
import { updateMappings, updateState, getState } from "./services/stateService";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/client/state", (req, res) => {
  res.json(getState());
});

const startSimulation = async () => {
  try {
    const rawMappings = await fetchMappings();
    updateMappings(rawMappings);

    setInterval(async () => {
      const rawState = await fetchState();
      updateState(rawState);
    }, 1000);
  } catch (error) {
    console.error("Error during simulation:", error);
  }
};

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  startSimulation();
});
