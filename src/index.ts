interface Bodysuit {
  message: string;
}

export const bodysuit = (): Bodysuit => {
  return {
    message: "Hello, Bodysuit!",
  };
};
