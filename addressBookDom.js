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

//now lets DO some stuff with our new address book
while (true) {
  let userInput = prompt("Add, Remove, Print, Delete by name or Quit?");
  let userInputLowercase = userInput.toLowerCase();

  //user selects add
  if (userInputLowercase === "add") {
    const info = {
      name: prompt("Enter Name"),
      email: prompt("Enter email"),
      phone: prompt("Enter phone"),
      relation: prompt("Enter relationship")
    }
    myAddressBook.add(info);
    console.log(`You have added ${info.name} to your address book.`);

    //user selects remove
  } else if (userInputLowercase === "remove") {
    const indexPrompt = prompt("What's the index of item you want to delete?");
    const index = indexPrompt.toLowerCase();
    myAddressBook.deleteAt(index);
    console.log(`item at index ${index} deleted`);
    console.log(myAddressBook);

    //user selects print
  } else if (userInputLowercase === "print") {
    myAddressBook.print();

    //user selects delete by name
  } else if (userInputLowercase === "delete by name") {
    //set up some variables and stuff
    let nameToDeletePrompt = prompt("What name do you want to delete?");
    let nameToDelete = nameToDeletePrompt.toLowerCase();
    let i = 0;
    //set up a loop to iterate through all the contacts, checking for a match 
    while (i < myAddressBook.contacts.length) {
      if (nameToDelete === myAddressBook.contacts[i].name.toLowerCase()) {
        myAddressBook.deleteByName([i]);
        console.log(`${nameToDelete} has been deleted`);
      }
      i++;
    }

    //user selects quit
  } else if (userInputLowercase === "quit") {
    console.log("See ya later!");
    break;
  } else {
    console.log("Invalid input.");
  }
}