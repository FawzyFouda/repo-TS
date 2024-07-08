import { Url, Admin } from "./global/global.js";
const getHost = new Url();
const get_Admin_Info = new Admin();
console.log(getHost._getUrl());
console.log(getHost._getUrlHostName());
console.log(get_Admin_Info._get_Admin_Info({ name: "Fawzy", age: 30 }));
