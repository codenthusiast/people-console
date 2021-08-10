#!/usr/bin/env node

const apiService = require("../lib/api-service");
const CLI = require("clui");
const { options, args } = require("../lib/options");
const Spinner = CLI.Spinner;

if (args.list) { //check if the list argument was supplied

  (async () => {
    const status = new Spinner("fetching list of people, please wait...");
    status.start();
    try {
      let people = await apiService.listPeople();
      console.table(people);
    } catch (error) {
      console.log("An error occurred");
      console.error(error);
    } finally {
      status.stop();
    }
    
  })();
} else if (args.details) { //check if the details argument was supplied

  (async () => {
    const status = new Spinner(
      `fetching details for ${args.details}, please wait...`
    );
    status.start();
    try {
      let person = await apiService.detail(args.details);
      if (person) {
        console.table(person);
      }
    } catch (error) {
      console.log("An error occurred");
      console.error(error);
    } finally {
      status.stop();
    }
  })();

} else if (args.filter) { //check if the filter argument was supplied

  (async () => {
    const status = new Spinner("fetching list of people, please wait...");
    status.start();
    try {
      let people = await apiService.listPeople(args.filter);
      console.table(people);
    } catch (error) {
      console.log("An error occurred");
    } finally {
      status.stop();
    }

  })();
} else {
  //print help if no argument was supplied
  options.showHelp();
}
