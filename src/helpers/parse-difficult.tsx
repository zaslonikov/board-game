export const difficultNames = (difficult: string): string => {
  switch (difficult) {
    case "Easy":
      return "Легкая";
    case "Normal":
      return "Нормальная";
    case "Hard":
      return "Сложная";
    default:
      return difficult;
  }
};
