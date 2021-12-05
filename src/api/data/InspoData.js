import axios from 'axios';
import firebaseConfig from '../apiKeys';

const baseURL = firebaseConfig.databaseURL;

const getAllInspos = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/inspos.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createInspo = (inspoObj) => new Promise((resolve, reject) => {
  axios
    .post(`${baseURL}/inspos.json`, inspoObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${baseURL}/inspos/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getAllInspos(inspoObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

const getSingleInspo = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseURL}/inspos/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateInspo = (inspoObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${baseURL}/inspos/${inspoObj.firebaseKey}.json`, inspoObj)
    .then(() => getAllInspos(inspoObj.uid).then(resolve))
    .catch(reject);
});

const deleteInspo = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios
    .delete(`${baseURL}/inspos/${firebaseKey}.json`)
    .then(() => getAllInspos(uid).then(resolve))
    .catch(reject);
});
const getInspoByMyWorkId = (uid, myWorkId) => new Promise((resolve, reject) => {
  getAllInspos(uid)
    .then((inspoArray) => {
      const myWorkInspos = inspoArray.filter(
        (inspo) => inspo.myWorkId === myWorkId,
      );
      resolve(myWorkInspos);
    })
    .catch(reject);
});
export {
  getAllInspos,
  createInspo,
  getSingleInspo,
  updateInspo,
  deleteInspo,
  getInspoByMyWorkId,
};
