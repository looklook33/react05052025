console.log('hello')

//writes an example of a closure that generates a random number 
// between 0 and 100 with initiated and logs the password is "##" when invoked

// function generatePassword() {

//     let password = Math.floor(Math.random() * 100);
//     return function () {
//         return password;

//     }
// }

// const p = generatePassword()
// console.log(p())



//Modify the closure above to memoize an objective of name <-> passcode pairs, 
// and log a passcode for a given name from cache. For instance, every time 'logPasscode('peter')' is run, 
// the function should log "The passcode is ##" with the specific passcode generated for 'Peter';

// function generatePassword() {
//     const passcode = {}

//     return function (name) {
//         if (!passcode[name]){
//             passcode[name] = Math.floor(Math.random() * 100);
//           //  console.log(passcode)
//         } 

//             console.log(`The passcode is ${passcode[name]} with the specific passcode generated for ${name}`)

//     }
// }

// const logPassword = generatePassword();
// const logPassword1 = generatePassword();
// const logPassword2 = generatePassword();
// logPassword('peter')
// logPassword1('minyu')
// logPassword('peter')


// version 3 add expired

function generatePasswordWithExpired() {
    const passcodeCach = {}; //{name:{password, expired}}
    const expiredTime = 100 * 1000;

    return function (name) {

        if (!passcodeCach[name]) {

            const passcode = Math.floor(Math.random() * 100);
            const expired = Date.now() + expiredTime;
            passcodeCach[name] = {
                passcode,
                expired
            };
            console.log(passcodeCach)
            console.log(passcodeCach[name])

        }
        if (Date.now() > passcodeCach[name].expired) {

            const passcode = Math.floor(Math.random() * 100);
            const expired = Date.now() + expiredTime;
            passcodeCach[name] = {
                passcode,
                expired
            }
        } else {
            console.log(`The passcode for ${name} not expired yet`)
        }



    }
}

const logPassword = generatePasswordWithExpired();
// const logPassword1 = generatePasswordWithExpired();
// const logPassword2 = generatePasswordWithExpired();
logPassword('peter')
// logPassword1('minyu')
logPassword('peter')