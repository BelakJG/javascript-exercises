function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    const oldest = people.reduce((old, person) => {
        oldestAge = getAge(old.yearOfBirth, old.yearOfDeath);
        personAge = getAge(person.yearOfBirth, person.yearOfDeath);
        if (oldestAge > personAge) {
            return old;
        } else {
            return person;
        }
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
