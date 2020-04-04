/***given inputs***/
const acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
const balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

/****defining func with parameters****/

/*all account numbers*/

const ArrayExtraction = (getAcctData, ...restArgs) => {
  let normalArray = restArgs;
  let first = normalArray[0]; // OK, gives the first argument
  let second = normalArray[1];

  const mapAcctNum = getAcctData.map(el => el.acctNum);
  /*all users account numbers by name except Alice,If Alice is the input
      then his balance for respective accounts will be shown in the Array*/
  const getUsers = first =>
    getAcctData
      .filter(el => el.user === first)
      .map(specificUserAcctNum => specificUserAcctNum.acctNum)
      .sort();
  const filterOutputByName =
    first !== "Alice"
      ? getUsers(first)
      : getAcctData.map(el => balance[el.acctNum]).sort();
  /*sort-by depends on input "acctNum" or "balance" passed as an arg when invoking function*/
  second === "acctNum"
    ? (second = () =>
        getAcctData.map(spreadAcctNum => spreadAcctNum.acctNum).sort())
    : (second = () => Object.values(balance).sort());

  /*output tray in console*/
  console.log("accountnumbers-stack", mapAcctNum);
  console.log(
    "getUserAccountNumber , if it's Alice, you can see his balance in ascending order else Bob account number will be shown",
    filterOutputByName
  );
  console.log("second-acctNum/Balance", second());
};

/*function invocation with args pass, ...restArgs get the values
    in array format, where the first arg falls under the actual array
    we want to perform the functionality on and remaining will be rest arguments
    mapped to rest parameters in the function paranthesis in the definition spot*/
    
ArrayExtraction(acctData, "Alice", "balance", "desc");










    
