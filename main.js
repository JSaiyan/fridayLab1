import lodash from 'lodash';
import chalk from "chalk";
import { faker } from '@faker-js/faker';
import validator from "validator";
import colors from "colors";





const array = [1, 4, 2, 3, 1, 4, 5, 2, 3, 2, 1];
const uniqueNums = lodash.uniq(array); 
console.log(chalk.green(uniqueNums));


console.log(chalk.blueBright("Hello lets chalk!"));




let fakeAccount = {
    userID: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email()
};

console.log(fakeAccount.userID);
console.log(fakeAccount.username);
console.log(fakeAccount.email);



const validEmail = "grand@gmail.com";
const invalidEmail = "sarman@yahoo";

    console.log(validEmail, 
    validator.isEmail(validEmail));

    console.log(invalidEmail, 
    validator.isEmail(invalidEmail));


console.log("Hello Everyone".blue);
console.log("Bye".red);
console.log("Good".green);
console.log("Bad".yellow);
