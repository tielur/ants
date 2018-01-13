// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var Block       = require("bs-platform/lib/js/block.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var React       = require("react");
var Printf      = require("bs-platform/lib/js/printf.js");
var Pervasives  = require("bs-platform/lib/js/pervasives.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");

function tileClassName(tile) {
  switch (tile.tag | 0) {
    case 0 : 
    case 1 : 
        return "tile tile--land";
    case 2 : 
        return "tile tile--home";
    case 3 : 
        return "tile tile--rock";
    
  }
}

function is_pheromone(tile) {
  if (!tile.tag && tile[0][/* pheromone */1] > 0) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function has_food(tile) {
  if (tile.tag === 1 && tile[0][/* food */1] > 0) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function pheromone_opacity(tile) {
  if (tile.tag) {
    return "";
  } else {
    var pheromone = tile[0][/* pheromone */1];
    if (pheromone > 0) {
      return Pervasives.string_of_float(pheromone * 0.5);
    } else {
      return "";
    }
  }
}

function food_opacity(tile) {
  if (tile.tag === 1) {
    var food = tile[0][/* food */1];
    if (food > 0) {
      console.log(food);
      return Curry._1(Printf.sprintf(/* Format */[
                      /* Float */Block.__(8, [
                          /* Float_f */0,
                          /* No_padding */0,
                          /* No_precision */0,
                          /* End_of_format */0
                        ]),
                      "%f"
                    ]), food / 500);
    } else {
      return "";
    }
  } else {
    return "";
  }
}

function antsOfTile(tile) {
  return tile[0][/* ants */0];
}

function antsClassName(tile, className) {
  var match = antsOfTile(tile);
  return className + (
          match !== 0 ? " tile--ants" : ""
        );
}

var component = ReasonReact.statelessComponent("World");

function make(tile, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: antsClassName(tile, tileClassName(tile))
                }, is_pheromone(tile) ? React.createElement("div", {
                        className: "tile--pheromone",
                        style: {
                          opacity: pheromone_opacity(tile)
                        }
                      }) : null, has_food(tile) ? React.createElement("div", {
                        className: "tile--food",
                        style: {
                          opacity: food_opacity(tile)
                        }
                      }) : null);
    });
  return newrecord;
}

exports.tileClassName     = tileClassName;
exports.is_pheromone      = is_pheromone;
exports.has_food          = has_food;
exports.pheromone_opacity = pheromone_opacity;
exports.food_opacity      = food_opacity;
exports.antsOfTile        = antsOfTile;
exports.antsClassName     = antsClassName;
exports.component         = component;
exports.make              = make;
/* component Not a pure module */
