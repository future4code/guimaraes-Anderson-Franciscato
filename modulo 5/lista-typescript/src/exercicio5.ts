let arrayDeEmails: Array< {name: string, email: string, role: string} > =[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function catchAdminMail(array: Array< {name: string, email: string, role: string} >): Array< {name: string, email: string, role: string} > {
  return array.filter(email => email.role === "admin");
}
let justMail = catchAdminMail(arrayDeEmails.map(email => {
  return {
    name: email.name,
    email: email.email,
    role: email.role
  } 
}));

let noName = justMail.map(email => {
  return {
    email: email.email
  }
});

console.table(noName);