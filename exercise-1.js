// This would be a cleaner version of the code below
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, {age, phone = '1234567890', address }) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

//This would not help if there was a LOT complex moving parts involved
let user = new User('Bob', {age: 10, phone: '111111', address: new Address('1', 'Main')})
console.log(user)



/*======================
//Non-ideal code format
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, {age, phone = '1234567890', address }) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
    }
}

class UserBuilder {
    constuctor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this
    }

    setPhone(phone) {
        this.user.phone = phone
        return this
    }

    setAddress(address) { (parameter)
        this.user.address = address
        return this
    }

    build() {
        return this.user
    }
}

let user = new UserBuilder('Bob').setAge(10).setPhone('111111').build()
console.log(user)
*/