import { SportEvent, Mappings } from "../types";
import { parseMappings } from "../utils/mappingsParser";

const state: Record<string, SportEvent> = {};
let mappings: Mappings = {};

export const updateMappings = (rawMappings: string) => {
  mappings = parseMappings(rawMappings);
};

export const updateState = (rawState: string) => {
  const events = rawState.split("\n");
  events.forEach((event) => {
    const [id, , , startTime, homeId, awayId, competitionId, scores] =
      event.split(",");

    const competitors = {
      HOME: { type: "HOME", name: mappings[homeId] || homeId },
      AWAY: { type: "AWAY", name: mappings[awayId] || awayId },
    };

    const competition = mappings[competitionId] || competitionId;

    const scoreDetails = scores
      ? scores.split("|").reduce((acc, score) => {
          const [type, scoreData] = score.split("@");
          const [home, away] = scoreData.split(":");
          acc[type] = { type, home, away };
          return acc;
        }, {} as Record<string, { type: string; home: string; away: string }>)
      : {};

    state[id] = {
      id,
      status: "LIVE",
      startTime: new Date(parseInt(startTime, 10)).toISOString(),
      sport: "FOOTBALL", // Placeholder, adjust as needed
      competitors,
      competition,
      scores: scoreDetails,
    };
  });
};

export const getState = () => {
  return Object.fromEntries(
    Object.entries(state).filter(([_, event]) => event.status !== "REMOVED")
  );
};
