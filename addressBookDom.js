"use strict"


class AddressBook {
  constructor(contacts) {
    this.contacts = [
      //these are only hardcoded in for testing purpose
      //TODO: remove these test contacts
      new Contact("Tabb", "tabbatharenea@gmail.com", "734-217-9944", "Self"),
      new Contact("Elle", "tabbatharenea@gmail.com", "734-217-9944", "Self"),
      new Contact("Lindsey", "tabbatharenea@gmail.com", "734-217-9944", "Self") 
    ];
  }


  // now lets set up some methods for our AddressBook
  add() {
    let name = document.getElementById("form_name").value;
    let email = document.getElementById("form_email").value;
    let phone = document.getElementById("form_phone").value;
    let relation = document.getElementById("form_relation").value;

    //the if statement condition requires that the user enter a name and an email or phone at minimum. 
    if(name !== "" && (email !== "" || phone !== "")){
      const info = {
        name: name,
        email: email,
        phone: phone,
        relation: relation
      }

      //create a new instance of new contact and upsh into contacts array
      const newContact = new Contact(info.name, info.email, info.phone, info.relation);
      myAddressBook.contacts.push(newContact);
  
      // reset input values
      myAddressBook.clearInputs();
      
      //display all the contacts on the page
      myAddressBook.display();

    } else { //let them know they didn't enter enough info
      alert("Please enter a new contact name and at least 1 method of contact info.")
    }
  }

  // clears the user's input values
  clearInputs(){
    document.getElementById("form_name").value = "";
    document.getElementById("form_email").value = "";
    document.getElementById("form_phone").value = "";
    document.getElementById("form_relation").value = "";
  }

  // pushes the info from the contacts array into the HTML
  display(){

    let arrayVariable = myAddressBook.contacts;
    let arrayLength = arrayVariable.length;
    let newContactCard;
    
    for (let i = 0; i < arrayLength; i++) {
      newContactCard = document.createElement('div');
      newContactCard.className = 'contactCard';
      newContactCard.innerHTML = `
      <p>${arrayVariable[i].name}</p>
      <p>${arrayVariable[i].phone}</p>
      <p>${arrayVariable[i].email}</p>
      <p>${arrayVariable[i].relation}</p>
      <i class="fa fa-trash-alt trashCan"></i>`;
  
      document.getElementById('contactsContainer').appendChild(newContactCard);
    }
  }

  deleteAt(index) {
    this.contacts.splice(index, 1);
  }


  deleteByName(i) {
    this.contacts.splice(i, 1);
  }
}

//create the Contact class, which is just the contact blueprint. Actual contact instances will be created by the user's input
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

//click event listener for adding new contact
document.getElementById("addContact_btn").addEventListener("click", myAddressBook.add); 

myAddressBook.display();

