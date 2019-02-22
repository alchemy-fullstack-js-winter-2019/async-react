import md5 from 'md5';

const pubKey = '1cd44a31f2897587cf16c699f738587d';
const privateKey = '97ae26edfe22c11af5b51cd79bd0be628504ff37';
const hash = md5(pubKey, privateKey);
console.log(hash);
