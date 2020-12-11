export class User {
    constructor(name) {
        this.name = name
    }
    static fromJSON(user) {
        return new User(
            user.name
        )
    }
}