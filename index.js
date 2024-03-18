function register()
{
    const user={
        username:uname.value,
        emailaddress:email.value,
        password:pwwd.value,
        balance:0,
        spend:0
    }


    if(user.username == "" || user.emailaddress ==" " || user.password =="")
    {
        error1.innerHTML = "*please enter a name"
        error2.innerHTML = "*please enter a email address"
        error3.innerHTML = "*please enter a password"
    }
    else if(user.username in localStorage)
    {
        alert("username already exist")
    }
    else{
         localStorage.setItem(user.username, JSON.stringify(user))
         alert("register successfully")
         window.location="./index.html"
    }
}


function login()
{
    uname=uname2.value
    pass=pwwd2.value
    usercopy=JSON.parse(localStorage.getItem(uname))
    console.log(usercopy);
    if(uname in localStorage)
    {
        if(pass== usercopy.password)
        {   
            localStorage.setItem('UNAME',usercopy.username);
            error5.innerHTML=""
            error4.innerHTML=""
            alert("login successfull")
            window.location="./calculation.html"
        }
        else
        {
            error5.innerHTML="*Wrong password"
        }
    }
    else
    {
         
        error4.innerHTML="*username does not exist"
    }

    if(uname =="" || pass== "")
    {   error4.innerHTML="*please enter the username"
        error5.innerHTML="*please enter the password"
    }

}

existingArray=[]
expenseArray=[]

function Add()
{
  var currentDate = new Date();

  // Get the current date and time components
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  var day = currentDate.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  // Construct the date and time string
  var currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  incomeuser=localStorage.getItem('UNAME')
  incomeuser2=`income-${incomeuser}`

  const Income={
    username:incomeuser,
    inc:income.value,
    amt:amount.value,
    Date:currentDateTime

  }
    

    if(Income.inc =="" || Income.amt =="")
    {
        alert("Enter the amount")
    }
    else if(Income.amt >0)
    {
        existingArray.push(Income)
        localStorage.setItem(incomeuser2,JSON.stringify(existingArray))
        unamecopy=localStorage.getItem('UNAME')
        console.log(unamecopy);
        usercopy2=JSON.parse(localStorage.getItem(unamecopy)) 
        console.log(usercopy2);
           
        usercopy2.balance += Number(Income.amt)
        localStorage.setItem(unamecopy, JSON.stringify(usercopy2))
        balance.innerHTML=`${usercopy2.balance} Rs`
        set=JSON.parse(localStorage.getItem(incomeuser2))
        console.log(set);

        htmldata =`<tr>
      <th scope="row">${Income.inc}</th>
      <td class=text-success >+${Income.amt}</td>
      <td>${usercopy2.balance}</td>
      <td style="font-size: 15px;">${Income.Date}</td>
     </tr>`
     result1.innerHTML+=htmldata

    }
  
}




function submit()
{

  var currentDate = new Date();

  // Get the current date and time components
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  var day = currentDate.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  // Construct the date and time string
  var currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  expenseuser=localStorage.getItem('UNAME')
  expenseuser2=`expense-${expenseuser}`

  const Expense={
    username:expenseuser,
    ex:expense.value,
    amtt:amont.value,
    date:currentDateTime

  }
  expenseArray.push(Expense)
  localStorage.setItem(expenseuser2,JSON.stringify(existingArray))
  unamecopy=localStorage.getItem('UNAME')
  console.log(unamecopy);
  usercopy2=JSON.parse(localStorage.getItem(unamecopy))
  console.log(usercopy2);
  if(Expense.ex == "" || Expense.amtt == "")
  {
    alert("Enter the expense")
  }
  else if(usercopy2.balance >= Expense.amtt)
  {
    usercopy2.spend +=Number(Expense.amtt)
     spent.innerHTML=`${usercopy2.spend} Rs`
     usercopy2.balance-=Number(Expense.amtt)
     localStorage.setItem(unamecopy, JSON.stringify(usercopy2))
      balance.innerHTML=`${usercopy2.balance} Rs`
      htmldata =`<tr>
      <th scope="row">${Expense.ex}</th>
      <td class=text-danger >-${Expense.amtt}</td>
      <td>${usercopy2.balance}</td>
      <td style="font-size: 15px;">${Expense.date}</td>
     </tr>`
     result2.innerHTML+=htmldata

      
  }
  else
  {
    bal.innerHTML = `*insufficient balance`
    
  }




}


function logout()
{
    window.location="./index.html"
}


