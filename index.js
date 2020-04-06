
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
//let third = normalArray[2];
  const mapAcctNum = getAcctData.map(el => el.acctNum);
  /*all users account numbers by name except Alice,If Alice is the input
      then his balance for respective accounts will be shown in the Array*/
  const getUsers = first =>
    getAcctData
      .filter(el => el.user === first)
      .map(specificUserAcctNum => specificUserAcctNum.acctNum)
      .sort();
  //console.log("xyz",getUsers("Alice").sort((a, b) => a - b))
  const filterOutputByName = first==="Alice" ? 
  getUsers(first).map(el=>balance[el])
  : getUsers(first);



  /*** using mergesort for asc/desc option***/
  let arr = filterOutputByName;
  const sorting = (arr, second) => {
    if (arr.length < 2) {
      return arr;
    }
    let half = arr.length / 2;

    let lefthalf = arr.splice(0, half);

    return check(sorting(lefthalf), sorting(arr));
  };

  const check = (lefthalf, arr) => {
    let temp = [];

    while (lefthalf.length && arr.length) {
      if (second === "asc") {
        if (lefthalf[0] > arr[0]) {
          temp.push(arr.shift());
        } else {
          temp.push(lefthalf.shift());
        }
      }
      if (second === "desc") {
        if (lefthalf[0] < arr[0]) {
          temp.push(arr.shift());
        } else {
          temp.push(lefthalf.shift());
        }
      }
    }

    return [...temp, ...lefthalf, ...arr];
  };

  console.log("accountnumbers-stack", mapAcctNum);
  console.log(
    "getUserAccountNumber , if it's Alice, you can see his balance in ascending order else Bob account number will be shown",
    filterOutputByName
  );
  console.log("second-acctNum/Balance in descending/acsending order", sorting(arr, second));
};

ArrayExtraction(acctData);
//ArrayExtraction(acctData, "Bob","asc");
//ArrayExtraction(acctData, "Bob", "desc");
//ArrayExtraction(acctData, "Alice", "asc");
ArrayExtraction(acctData, "Alice","asc");