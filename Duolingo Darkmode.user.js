// ==UserScript==
// @name         Duolingo Darkmode by gurachan
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
body {
background: #202124 !important;
}
._2PVaI{
background: none;
}
._3ZJK8 {
background: #303134;
color: white !important;
border-radius: 16px !important;
}
.Mr3if._2OhdT:hover {
color: white !important;
}
.Mr3if._2OhdT {
color: #cfcfcf !important;
}
._1kJpR._3g2C1
{
background: #303134 !important;
}
._3M0r3
{
border: 0px !important;
}
._3f9ou
{
background: #202124 !important;
}

._3g2C1
{
border-bottom:0px !important;
}
.WOZnx{
border:0 !important;
}
._2O43A {
background: rebeccapurple !important;
}
.Yth9H {
background: rebeccapurple !important;
}
.NegsA, .Vw7Qd {
color: gainsboro !important;
}
._32T7z ._3BY7E{
color: gainsboro !important;
}
.WOZnx:before{
background-color: #202124 !important;
box-shadow: none !important;
border-color: rebeccapurple !important;
}
.GVcJz._1jKFt {
background: #202124 !important;
border: none;
box-shadow: none !important;
}
._1jKFt:before{
border: none !important;
}
._3izPU._2TPZF{
background: #202124;
border: none !important;
}
._2TPZF:after {
border: none !important;
}
._2014B._2X1FZ._1V2GJ{
background-color: #202124 !important;
}
._2O14B._2XlFZ._1v2Gj {
background: #202124 !important;
}
._1KUxv {
background: #202124 !important;
border: 2px solid #202124 !important;
color: white;
}

._1ccgT{
color: white  !important;
}

._2WP_P {
color: white  !important;
}

._3sYli:first-of-type {
border-top: none  !important;
}

._3sYli {
border-bottom: none !important;
}
._1KF6e{
border-top: none  !important;
}
._1KF6e:hover {
background-color: #2a2a2a !important;
}

._399cc {
border-top:none;
background: rebeccapurple;
}
h1._2LZl6 {
    color: #b66eff;
}
span._13HXc {
    color: white;
      cursor: pointer;
}
._2NolF.LhRk3:not(._1rl91):before, ._2NolF:disabled:not(._1rl91):before {
    background-color: #1cb0f6;
    cursor: pointer;
}
._15J0U {
    border-bottom: 2px solid rebeccapurple;
}
._1HxVp {
    border-top: 2px solid rebeccapurple;
}
.-oI84{
background: mediumpurple !important;
}
span._26kJ0._2FR4x {
    color: #b66eff;
}
._9C_ii {
    --web-ui_button-background-color: #398302 !important;
    --web-ui_button-border-color: #254401 !important;
    --web-ui_button-color: #fff !important;
}
._2jQLr {
    color: whitesmoke !important;
}
._2QnAf {
     color: whitesmoke !important;
}
.OhXul {
    color: whitesmoke !important;
}
._15-md {
    color: whitesmoke !important;
}
._1HA7Y > h2 {
    color: #dd7f7f;
}
    `);
})();