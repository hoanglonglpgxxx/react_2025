import { useReducer } from "react";

//useReducer bank account
const initialState = {
  status: "empty",
  balance: 0,
  loan: 0,
  account: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "active",
        balance: 500,
      };
    case "close":
      return {
        ...initialState,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance > action.payload ? state.balance - action.payload : 0,
      };
    case "requestLoan":
      return {
        ...state,
        loan: state.loan + action.payload,
      };
    case "payLoan":
      return {
        ...state,
        loan: state.loan > action.payload ? state.loan - action.payload : 0,
      };
  }
}

function Button({ dispatch, action, disabled }) {
  const DEP_VAL = 100;
  const WITHDRAW_VAL = 50;
  const LOAN_VAL = 1000;
  const PAID_LOAN_VAL = 100;
  return (
    <div style={{ marginBottom: 15 }}>
      {(() => {
        switch (action) {
          case "open":
            return (
              <button onClick={() => dispatch({ type: "start" })} disabled={disabled}>
                Open Account
              </button>
            );
          case "deposit":
            return (
              <button
                onClick={() => dispatch({ type: "deposit", payload: DEP_VAL })}
                disabled={disabled}
              >
                Deposit {DEP_VAL}
              </button>
            );
          case "withdraw":
            return (
              <button
                onClick={() => dispatch({ type: "withdraw", payload: WITHDRAW_VAL })}
                disabled={disabled}
              >
                Withdraw {WITHDRAW_VAL}
              </button>
            );
          case "requestLoan":
            return (
              <button
                onClick={() => dispatch({ type: "requestLoan", payload: LOAN_VAL })}
                disabled={disabled}
              >
                Request a loan of {LOAN_VAL}
              </button>
            );
          case "payLoan":
            return (
              <button
                onClick={() => dispatch({ type: "payLoan", payload: PAID_LOAN_VAL })}
                disabled={disabled}
              >
                Pay loan
              </button>
            );
          case "close":
            return (
              <button onClick={() => dispatch({ type: "close" })} disabled={disabled}>
                {" "}
                Close account
              </button>
            );
        }
      })()}
    </div>
  );
}

function AccountDetail({ balance, loan }) {
  return (
    <>
      <p>Balance:{balance}</p>
      <p>Loan:{loan}</p>
    </>
  );
}

export default function App() {
  const [{ status, balance, loan }, dispatch] = useReducer(reducer, initialState);
  console.log(status);
  return (
    <div>
      <h1>useReducer Bank Account</h1>
      <AccountDetail balance={balance} loan={loan} />
      <Button action="open" dispatch={dispatch} disabled={status !== "empty"} />
      <Button action="deposit" dispatch={dispatch} disabled={status === "empty"} />
      <Button action="withdraw" dispatch={dispatch} disabled={status === "empty"} />
      <Button action="requestLoan" dispatch={dispatch} disabled={status === "empty"} />
      <Button action="payLoan" dispatch={dispatch} disabled={status === "empty"} />
      <Button action="close" dispatch={dispatch} disabled={status === "empty"} />
    </div>
  );
}
