let users = [
    {yearOfStudding: 2018, facultyName: 'NULP'},
    {yearOfStudding: 2008, facultyName: 'TOM'},
    {yearOfStudding: 2013, facultyName: 'BAK'},
    {yearOfStudding: 2016, facultyName: 'WEB'},
    {yearOfStudding: 2014, facultyName: 'UI'},
    {yearOfStudding: 2005, facultyName: 'HR'},
    {yearOfStudding: 2006, facultyName: 'IJZ'},
    {yearOfStudding: 2009, facultyName: 'KPI'},
    {yearOfStudding: 2011, facultyName: 'ASU'},
    {yearOfStudding: 2000, facultyName: 'IKTA'},
];

let facultyNames = [];
for (let u of users) {
    facultyNames.push(u.facultyName);
}
console.log(facultyNames);

let sumOfYears = 0;
for (let u of users) {
    sumOfYears += u.yearOfStudding;
}
console.log(sumOfYears);
