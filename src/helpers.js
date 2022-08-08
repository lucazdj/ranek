/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable import/prefer-default-export */
export function serialize(obj) {
  let queryString = '';
  for (const key in obj) {
    queryString += `&${key}=${obj[key]}`;
  }
  return queryString;
}
