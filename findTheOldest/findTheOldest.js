let findTheOldest = function(people) {
    const oldest = people.sort(function(a, b){
        let aYearOfDeath;
        let bYearOfDeath;
        if (a.yearOfDeath == undefined) {
            let d = new Date;
            aYearOfDeath = d.getFullYear();
        } else {
            aYearOfDeath = a.yearOfDeath
        }
        if (b.yearOfDeath == undefined) {
            let d = new Date;
            bYearOfDeath = d.getFullYear();
        } else {
            bYearOfDeath = b.yearOfDeath
        }
        const lastp = aYearOfDeath - a.yearOfBirth;
        const otherp = bYearOfDeath - b.yearOfBirth;
        return lastp > otherp ? -1 : 1;
    })
    return oldest[0];
}

module.exports = findTheOldest
