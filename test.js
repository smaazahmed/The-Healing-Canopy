
(async () => {
    const resEmail = await fetch("http://localhost:3000/users?email=smaazahmed1209@gmail.com");
    console.log("By email:", await resEmail.json());
    
    const resPass = await fetch("http://localhost:3000/users?password=12345");
    console.log("By password:", await resPass.json());
})();
