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

const orderByNew = (array) => {
  array.sort((a, b) => {
    const cardOne = new Date(a.timeSubmitted);
    const cardTwo = new Date(b.timeSubmitted);
    return cardTwo - cardOne;
  });
};
const orderByOld = (array) => {
  array.sort((a, b) => {
    const cardOne = new Date(a.timeSubmitted);
    const cardTwo = new Date(b.timeSubmitted);
    return cardOne - cardTwo;
  });
};

export {
  orderMyWorkByTitle, orderByNew, orderByOld, orderInsposByTitle,
};
