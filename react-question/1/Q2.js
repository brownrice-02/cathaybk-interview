function sortByType(user) {
  const professionOrder = {
    'systemAnalytics': 0,
    'engineer': 1,
    'productOwner': 2,
    'freelancer': 3,
    'student': 4,
  };

  user.sort((user1, user2) => {
    const professionOrder1 = professionOrder[user1.profession];
    const professionOrder2 = professionOrder[user2.profession];

    return professionOrder1 - professionOrder2 || sortUserName([user1]) - sortUserName([user2]);
  });

  return user;
}

// Example
const sortedUsersByType = sortByType(users);
console.log(sortedUsersByType);
