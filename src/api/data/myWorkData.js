import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getAllMyWorks = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/myWork.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createMyWork = (myWorkObj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/myWork.json`, myWorkObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/myWork/${firebaseKey}.json`, { firebaseKey })
        .then(() => resolve(firebaseKey));
    })
    .catch(reject);
});

const getSingleMyWork = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/myWork/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateMyWork = (myWorkObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/myWork/${myWorkObj.firebaseKey}.json`, myWorkObj)
    .then(() => getAllMyWorks(myWorkObj.uid).then(resolve))
    .catch(reject);
});

const deleteMyWork = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/myWork/${firebaseKey}.json`)
    .then(() => getAllMyWorks(uid).then(resolve))
    .catch(reject);
});
const getMyWorkByFirebaseKey = (uid, firebaseKey) => new Promise((resolve, reject) => {
  getAllMyWorks(uid)
    .then((myWorkArray) => {
      const filteredMyWork = myWorkArray.filter(
        (myWork) => myWork.firebaseKey === firebaseKey,
      );
      resolve(filteredMyWork);
    })
    .catch(reject);
});
export {
  getAllMyWorks,
  createMyWork,
  getSingleMyWork,
  updateMyWork,
  deleteMyWork,
  getMyWorkByFirebaseKey,
};
