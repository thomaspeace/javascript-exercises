const findTheOldest = function(people) {
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        const oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
    }, people[0]);
    return oldest;
};

const getAge = (birth, death) => {
    if(!death) {
        const currentYear = new Date().getFullYear();
        return currentYear - birth;
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
