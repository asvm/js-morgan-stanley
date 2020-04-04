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

/****pass args accordingly the first is the array that we're going to
    play, second is the name(alice/bob) to display their account numbers
    and balance blocks, third is the second arg provided with
    two options either "accountnum" or "balance"****/

/**********************************NOTE****************************/
/**************************************************************/
/**************************************************************/

/* I didn't understand the option paramater "sortDirection"
which accepts asc or dec order, because there must be an array to play this
optional parameter. Since I'm outputing every arg value in array format its possible to simply 
use reverse() built-in array method. But for sortBy (accepts "acctNum" or "balance") 
which yeilds output from a function and it's not suitable to
perform array operation on elements of type function,so
assuming it's not required as per the logic,
I'm allowing every array format output in ascending order by default*/

/**tried below code snippet for <<<sortBy (accepts "acctNum" or "balance")>>> 
 but didn't allowed to take a chance due to following constraint**/

/*last argument if passed as "desc" by default(ascending order set to all output arrays in console tray) for sorting*/

// let third = normalArray[2];
//-->utility func--->
// const sortWholeOutput = (...toBeSortArgs) =>
//   toBeSortArgs.map((el, index) => el.reverse());

// if (third === "desc") {
//   sortWholeOutput(mapAcctNum, filterOutputByName);
// }

/***  type of toBeSortArgs==="function" which is "second" 
    identifier for variable from ...restArgs --->  let second = normalArray[1] ***/

/***  type of toBeSortArgs==="function" which is "second" 
    identifier for variable from ...restArgs --->  let second = normalArray[1] dont allow us to use built in array method on function call as an element inside array***/
