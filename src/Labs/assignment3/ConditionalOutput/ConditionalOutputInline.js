const ConditionalOutputInline = () => {
  const loggedIn = false;
  return (
    <>
      {loggedIn && <h2>HELLO!! WELCOME or else </h2>}
      {!loggedIn && <h2>Login </h2>}
    </>
  );
};
export default ConditionalOutputInline;
