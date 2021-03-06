// Generated by BUCKLESCRIPT VERSION 2.1.1, PLEASE EDIT WITH CARE
'use strict';

var React                       = require("react");
var Pervasives                  = require("bs-platform/lib/js/pervasives.js");
var ReasonReact                 = require("reason-react/lib/js/src/ReasonReact.js");
var Utils$ReactTemplate         = require("../lib/Utils.bs.js");
var TileComponent$ReactTemplate = require("./TileComponent.bs.js");

var component = ReasonReact.statelessComponent("World");

function make(world, knobs, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: "world"
                }, Utils$ReactTemplate.each_element(world, (function (i, row) {
                        return React.createElement("div", {
                                    key: Pervasives.string_of_int(i),
                                    className: "world__row"
                                  }, Utils$ReactTemplate.each_element(row, (function (i, tile) {
                                          return React.createElement("div", {
                                                      key: Pervasives.string_of_int(i),
                                                      className: "world__tile"
                                                    }, ReasonReact.element(/* None */0, /* None */0, TileComponent$ReactTemplate.make(tile, knobs, /* array */[])));
                                        })));
                      })));
    });
  return newrecord;
}

exports.component = component;
exports.make      = make;
/* component Not a pure module */
