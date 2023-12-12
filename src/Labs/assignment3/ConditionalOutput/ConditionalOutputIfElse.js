const ConditionalOutputIfElse = () => {
  const loggedIn = true;
  if (loggedIn) {
    return <h2>HELLO!! WELCOME or You can </h2>;
  } else {
    return <h2> LOGIN </h2>;
  }
};
export default ConditionalOutputIfElse;
