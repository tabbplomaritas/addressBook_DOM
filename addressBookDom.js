"use strict"


class AddressBook {
  constructor(contacts) {
    this.contacts = [
      //set a few existing contacts so we can test page
      new Contact("Tabb", "tabbatharenea@gmail.com", "734-217-9944", "Self"),
      new Contact("Elle", "tabbatharenea@gmail.com", "734-217-9944", "Self"),
      new Contact("Lindsey", "tabbatharenea@gmail.com", "734-217-9944", "Self")
    ];
  }

  //now lets set up some methods for our AddressBook
  add(info) {
    const newContact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }

  print() {
    for (let i = 0; i < myAddressBook.contacts.length; i++) {
      console.log(`${[i]}. ${myAddressBook.contacts[i].name} P: ${myAddressBook.contacts[i].phone} E: ${myAddressBook.contacts[i].email} R: ${myAddressBook.contacts[i].relation}`);
    }
  }

  deleteByName(i) {
    this.contacts.splice(i, 1);
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

//create an instance of our Class AddressBook called myAddressBook;
const myAddressBook = new AddressBook();

// let addContact_btn = document.querySelector("button");
// let contactForm = document.getElementById("addContactForm");


// addContact_btn.addEventListener("click", test);
// addContact_btn.addEventListener("click", newTest); 

function test(){
 console.log("The test function is working");
  document.querySelector("#contactsDisplay").style.display = "flex";
};

function newTest(){
  console.log("The test NEW function is working");
document.querySelector("#contactsDisplay").innerHTML =`
  <ul class="contactCard">
    <li class="contactCard_items">Name: ${myAddressBook.contacts[0].name}</li>
    <li class="contactCard_items">Phone: ${myAddressBook.contacts[0].phone}</li>
  </ul>`;
}

function showContact(){

  let arrayVariable = myAddressBook.contacts;
  let arrayLength = arrayVariable.length;
  let temp;
  
  for (let i = 0; i < arrayLength; i++) {
    temp = document.createElement('div');
    temp.className = 'contactCard';
    temp.innerHTML = `
    ${arrayVariable[i].name}
    ${arrayVariable[i].phone}
    ${arrayVariable[i].email}
    ${arrayVariable[i].relation}`;

    document.getElementById('container').appendChild(temp);
  }
}

showContact();

// function createContactCard(){
//   let contactsDisplay= document.getElementById("contactsDisplay");
//   let createCard = document.createElement("ul");
//   contactsDisplay.prepend(createCard);
//   createCard.setAttribute("class","contactCard");
//   createCard.innerHtml = `${myAddressBook.contacts[0].name}`
//   // `
//   // <li class="contactCard_items">Name: ${myAddressBook.contacts[0].name}</li>
//   // <li class="contactCard_items">Phone: ${myAddressBook.contacts[0].phone}</li>
//   // <li class="contactCard_items">Email: ${myAddressBook.contacts[0].email}</li>
//   // <li class="contactCard_items">Relation: ${myAddressBook.contacts[0].relation}</li>`;
 
// }

// function displayContacts(){
//   let contacts = myAddressBook.contacts;
//   console.log(contacts);

//   // for(let i =0; i > contacts.length;i++){
//   document.querySelector("#contactsDisplay").innerHTML = contacts;
//   // }


// }

// createContactCard();


// displayContacts();

// const person = {
//   name: adam, 
//   address:"123 st", 
//   phone: 1234566,
//   relation: myself
// }


// const newContact = document.createElement("div");
// newContact.innerHTML = `
// <p>Name: ${person.name} </p>
// <p>Address: </p>
// <p>Phone: </p>
// <p>Releation: </p>`;