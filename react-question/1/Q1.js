function sortUserName(user) {
  const sortedUsers = user.slice().sort((a, b) => {
    const nameA = `${a.firstName}${a.lastName}${a.customerID}`;
    const nameB = `${b.firstName}${b.lastName}${b.customerID}`;
    
    return nameA.localeCompare(nameB);
    });
  
    sortedUsers.forEach(user => {
      console.log(`${user.firstName} ${user.lastName} ${user.customerID}`);
    });
}

// Example
const users = [
  { firstName: 'John', lastName: 'Doe', customerID: '123', note: 'xxx', profession: 'student' },
  { firstName: 'Alice', lastName: 'Smith', customerID: '456', note: 'yyy', profession: 'engineer' },
  { firstName: 'Bob', lastName: 'Johnson', customerID: '789', note: 'zzz', profession: 'freelancer' },
  { firstName: 'Eve', lastName: 'Williams', customerID: '101', note: '', profession: 'productOwner' },
];

sortUserName(users);
