"use strict";
// エラーにならないものを検知する

// const obj = { prop: 0 };

const obj = {};

Object.defineProperty(obj, "prop", {
  value: 0,
  writable: true,
});
// definePropertyでwritable設定していない場合、falseになりvalueが書き換えができない

obj.prop = 1;

console.log(obj.prop);

const des = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(des);

// プロパティのディスクリプターの設定値で挙動が変わる
