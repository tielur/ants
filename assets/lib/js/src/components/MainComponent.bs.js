// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var ReactDOMRe                      = require("reason-react/lib/js/src/ReactDOMRe.js");
var ReasonReact                     = require("reason-react/lib/js/src/ReasonReact.js");
var Director                        = require("director/build/director");
var SimComponent$ReactTemplate      = require("./SimComponent.bs.js");
var TodoAppComponent$ReactTemplate  = require("./TodoAppComponent.bs.js");
var NotFoundComponent$ReactTemplate = require("./NotFoundComponent.bs.js");
var SimStartComponent$ReactTemplate = require("./SimStartComponent.bs.js");

((require('../../../styles/main.scss')));

((require('promise-polyfill/src/polyfill')));

function renderForRoute(element) {
  return ReactDOMRe.renderToElementWithId(element, "root");
}

var router = new Director.Router({
      "/": (function () {
          var element = ReasonReact.element(/* None */0, /* None */0, SimStartComponent$ReactTemplate.make(/* array */[]));
          return ReactDOMRe.renderToElementWithId(element, "root");
        }),
      "/sim/:id": (function (simId) {
          var element = ReasonReact.element(/* None */0, /* None */0, SimComponent$ReactTemplate.make(simId, /* array */[]));
          return ReactDOMRe.renderToElementWithId(element, "root");
        }),
      "/todo": (function () {
          var element = ReasonReact.element(/* None */0, /* None */0, TodoAppComponent$ReactTemplate.make(/* array */[]));
          return ReactDOMRe.renderToElementWithId(element, "root");
        })
    });

router.configure({
      notfound: (function () {
          var element = ReasonReact.element(/* None */0, /* None */0, NotFoundComponent$ReactTemplate.make(/* array */[]));
          return ReactDOMRe.renderToElementWithId(element, "root");
        })
    });

router.init("/");

router.configure({
      notfound: (function () {
          var element = ReasonReact.element(/* None */0, /* None */0, NotFoundComponent$ReactTemplate.make(/* array */[]));
          return ReactDOMRe.renderToElementWithId(element, "root");
        })
    });

router.init("/");

exports.renderForRoute = renderForRoute;
exports.router         = router;
/*  Not a pure module */
