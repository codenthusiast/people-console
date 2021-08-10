#!/usr/bin/env node

require("dotenv").config();
const axios = require("axios");

async function listPeople(filter) {
  let result = await axios.get(
    filter? 
    `${process.env.BASE_URL}/TripPinRESTierService/People?$filter=${filter}`: 
    `${process.env.BASE_URL}/TripPinRESTierService/People`,
    { headers: { Accept: "application/json" } }
  );

    let people = result.data.value.map((person, index) => {
      return {
        userName: person.UserName,
        firstName: person.FirstName,
        lastName: person.LastName,
        emails: person.Emails.join(" "),
      };
    });

  return people;
}

async function detail(userName){
    try {
        
        const result = await axios.get(
            `${process.env.BASE_URL}/TripPinRESTierService/People('${userName}')`,
            { headers: { Accept: "application/json" } }
          );
            let person = result.data;
            return {
              userName: person.UserName,
              firstName: person.FirstName,
              lastName: person.LastName,
              emails: person.Emails.join(" "),
            };
    } catch (error) {
        console.error("An error occurred while fetching details");
        return null;
    }
}

async function filter() {
    const result = await axios.get(
      `${process.env.BASE_URL}/TripPinRESTierService/People?$filter=`,
      { headers: { Accept: "application/json" } }
    );
  
      let people = result.data.value.map((person, index) => {
        return {
          userName: person.UserName,
          firstName: person.FirstName,
          lastName: person.LastName,
          emails: person.Emails.join(" "),
        };
      });
  
    return people;
  }

module.exports = {
  listPeople,
  detail
};
