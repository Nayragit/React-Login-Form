const LoginForm = () => {
  return (
    <div className="right container">
      <h1>Login</h1>
      <form>
        <label>Login ID</label>
        <br />
        <input className="textInput" placeholder="Enter Login ID" />
        <br />
        <label>Password</label>
        <br />
        <input
          className="textInput"
          type="password"
          placeholder="Enter Password"
        />
        <br />
        <div className="flex">
          <div>
            <input
              type="checkbox"
              id="checkboxId"
              name="checkboxName"
              value="option1"
              className="checkbox"
            />
            <label className="checkBoxLabel" for="checkboxId">
              Remember Me
            </label>
            <br />
          </div>
          <a href="dsd">Change Password</a>
        </div>
        <input
          type="checkbox"
          id="checkboxId"
          name="checkboxName"
          value="option1"
          className="checkbox"
        />
        <label className="checkBoxLabel" for="checkboxId">
          Agree to <a href="./dsdsd">Terms & Condition</a>
        </label>
        <br />
      </form>
      <button>Login</button>
      <p>
        Don't have an account? <a href=".dfsf">Register Here</a>
      </p>
    </div>
  );
};

export default LoginForm;
