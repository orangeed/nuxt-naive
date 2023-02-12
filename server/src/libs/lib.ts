import * as CryptoJS from 'crypto-js';
import { cryptoConstants } from './crypto';

export const cryptoString = (str) => {
  return CryptoJS.HmacSHA1(str, cryptoConstants.privateKey).toString();
};

export const jwtConstants = {
  secret: '1208917130@qq.com',
  adminSecret: 'admin.1208917130@qq.com',
};
