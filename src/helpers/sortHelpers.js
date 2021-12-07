const orderMyWorkByTitle = (array) => {
  array.sort((a, b) => {
    const cardOne = a.artTitle.toLowerCase();
    const cardTwo = b.artTitle.toLowerCase();
    if (cardOne < cardTwo) {
      return -1;
    }
    if (cardTwo > cardOne) {
      return 1;
    }
    return 0;
  });
};
const orderInsposByTitle = (array) => {
  array.sort((a, b) => {
    const cardOne = a.inspoTitle.toLowerCase();
    const cardTwo = b.inspoTitle.toLowerCase();
    if (cardOne < cardTwo) {
      return -1;
    }
    if (cardTwo > cardOne) {
      return 1;
    }
    return 0;
  });
};

const orderMyWorkByNew = (array) => {
  array.sort((a, b) => {
    const cardOne = new Date(a.dateAdded);
    const cardTwo = new Date(b.dateAdded);
    return cardTwo - cardOne;
  });
};
const orderInspoByNew = (array) => {
  array.sort((a, b) => {
    const cardOne = a.yearCompleted;
    const cardTwo = b.yearCompleted;
    return cardTwo - cardOne;
  });
};
const orderMyWorkByOld = (array) => {
  array.sort((a, b) => {
    const cardOne = new Date(a.dateAdded);
    const cardTwo = new Date(b.dateAdded);
    return cardOne - cardTwo;
  });
};
const orderInspoByOld = (array) => {
  array.sort((a, b) => {
    const cardOne = a.yearCompleted;
    const cardTwo = b.yearCompleted;
    return cardOne - cardTwo;
  });
};

export {
  orderMyWorkByTitle,
  orderMyWorkByNew,
  orderMyWorkByOld,
  orderInsposByTitle,
  orderInspoByNew,
  orderInspoByOld,
};
