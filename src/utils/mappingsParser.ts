export const parseMappings = (rawMappings: string): Record<string, string> => {
  return rawMappings.split(";").reduce((acc, mapping) => {
    const [id, value] = mapping.split(":");
    if (id && value) acc[id] = value;
    return acc;
  }, {} as Record<string, string>);
};
