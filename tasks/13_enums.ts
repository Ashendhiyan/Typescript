
// enum

enum Roles {
    SUPER_ADMIN,
    ADMIN,
    MANAGER,
    SELLER,
    BUYER
}

let myRole : Roles = Roles.ADMIN;

function sendMessage(role : Roles){
    switch (role){
        case Roles.SUPER_ADMIN:
            console.log("Hello Super admin..!");
            break;
        case Roles.ADMIN:
            console.log("Hello Admin..!");
            break;
        case Roles.BUYER:
            console.log("Hello buyer..!")
            break;
        case Roles.MANAGER:
            console.log("Hello manager..!");
            break;
        case Roles.SELLER:
            console.log("Hello seller..!");
            break;
    }
}

sendMessage(Roles.ADMIN);