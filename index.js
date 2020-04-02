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
    // debugger;
    const AcctNum = (getAcctData, findUser, sortBy) => {
      const mapAcctNum = getAcctData.map(el => el.acctNum);
      /*all users account numbers by name except Alice,If Alice is the input
      then his balance for respective accounts will be shown in the Array*/
      const getUsers = findUser =>
        getAcctData
          .filter(el => el.user === findUser)
          .map(specificUserAcctNum => specificUserAcctNum.acctNum)
          .sort();
      const filterOutputByName =
        findUser !== "Alice"
          ? getUsers(findUser)
          : getAcctData.map(el => balance[el.acctNum]).sort();
      /*sort-by depends on input "acctNum" or "balance" passed as an arg when invoking function*/
      sortBy === "acctNum"
        ? (sortBy = () => {
            return getAcctData
              .map(spreadAcctNum => spreadAcctNum.acctNum)
              .sort();
          })
        : (sortBy = () => {
            return Object.values(balance).sort();
          });

      /*output tray in console*/
      console.log("accountnumbers-stack", mapAcctNum);
      console.log(
        "getUserAccountNumber , if it's Alice, you can see his balance in ascending order else Bob account number will be shown",
        filterOutputByName
      );
      console.log("sortby-acctNum/Balance", sortBy());
    };

    /*function invocation with args pass*/
    AcctNum(acctData, "Bob", "acctNum");
    /****pass args accordingly the first is the array that we're going to
    play, second is the name(alice/bob) to display their account numbers
    and balance blocks, third is the sortby arg provided with
    two options either "accountnum" or "balance"****/

    /**********************************note****************************/
    /**************************************************************/
    /**************************************************************/
    /* I didn't understand the option paramater "sortDirection" 
    which accepts asc or dec order, because there must be an array to play these
    options. Since I'm outputing every arg value in array format, I didnt choose any
    specfic ary array output to perform this paramater functionlity,so
    assuming it's not required as per the function definition and context logic,
    I'm allowing every array format output in ascending order by default*/