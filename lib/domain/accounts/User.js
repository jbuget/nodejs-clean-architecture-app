'use strict';

module.exports = class {

  constructor(id = null, firstName, lastName, email, password, status = 'DEACTIVATED') {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.status = status; // ACTIVATED, DEACTIVATED
  }

  activate() {
    this.status = 'ACTIVATED';
  }

};