class UserProfile {
    constructor(name, address, city, zipcode) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
    }
    getProfileUpdate() {
        user.name = 'Leah'
        return `${this.name} here!`
    };
}