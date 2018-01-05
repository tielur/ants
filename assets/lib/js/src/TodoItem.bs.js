// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';


function newItem(id, text) {
  return /* record */[
          /* id */id,
          /* title */text,
          /* completed : false */0
        ];
}

function toggleItem(id, item) {
  if (item[/* id */0] === id) {
    return /* record */[
            /* id */item[/* id */0],
            /* title */item[/* title */1],
            /* completed */1 - item[/* completed */2]
          ];
  } else {
    return item;
  }
}

exports.newItem    = newItem;
exports.toggleItem = toggleItem;
/* No side effect */
