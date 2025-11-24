const person = {
  name: "Rezwan",
  age: 25,
  hobbies: ["coding", "gaming", "cooking"],

  address: {
    street: "123 Main St",
    location: {
      city: "Seattle",
      state: "WA",
      zip: 98101
    }
  },

  contact: {
    email: "rez@example.com",
    phone: "555-1234",
    socials: {
      twitter: "@rezwanCodes",
      linkedin: "rezwan-dev"
    }
  }
};


function flattenUsingDestructuring(obj) {
  const {
    name,
    age,
    hobbies,
    address: {
      street,
      location: { city, state, zip }
    },
    contact: {
      email,
      phone,
      socials: { twitter, linkedin }
    }

  } = person


  return ({
    name,
    age,
    hobbies,
    street,
    city,
    state,
    zip,
    email,
    phone,
    twitter,
    linkedin
  });
}


function flattenUsingSpread(obj) {
  const {
    address: {
      location: {
        ...restLocation },
      ...restAddress
    },
    contact: {
      socials: {
        ...restSocials
      },
      ...restContact },
    ...rest } = obj;

  return {
    ...rest,
    ...restAddress,
    ...restLocation,
    ...restContact,
    ...restSocials
  };
}

console.log(flattenUsingDestructuring(person));
console.log(flattenUsingSpread(person));