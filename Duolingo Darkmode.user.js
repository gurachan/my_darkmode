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
window.addEventListener('load', function () {
  GM_addStyle(`
body {
	background: #202124 !important;
    color: whitesmoke;
}

h2,h3,h4 {
    color: #f5efef;
}

._2PVaI {
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

._1kJpR._3g2C1 {
	background: #303134 !important;
}

._3M0r3 {
	border: 0px !important;
}

._3f9ou {
	background: #202124 !important;
}

._3g2C1 {
	border-bottom: 0px !important;
}

.WOZnx {
	border: 0 !important;
}

._2O43A {
	background: rebeccapurple !important;
}

.Yth9H {
	background: rebeccapurple !important;
}

.NegsA,
.Vw7Qd {
	color: gainsboro !important;
}

._32T7z ._3BY7E {
	color: gainsboro !important;
}

.WOZnx:before {
	background-color: #202124 !important;
	box-shadow: none !important;
	border-color: rebeccapurple !important;
}

.GVcJz._1jKFt {
	background: #202124 !important;
	border: none;
	box-shadow: none !important;
}

._1jKFt:before {
	border: none !important;
}

._3izPU._2TPZF {
	background: #202124;
	border: none !important;
}

._2TPZF:after {
	border: none !important;
}

._2014B._2X1FZ._1V2GJ {
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

._1ccgT {
	color: white !important;
}

._2WP_P {
	color: white !important;
}

._3sYli:first-of-type {
	border-top: none !important;
}

._3sYli {
	border-bottom: none !important;
}

._1KF6e {
	border-top: none !important;
}

._1KF6e:hover {
	background-color: #2a2a2a !important;
}

._399cc {
	border-top: none !important;
	background: rebeccapurple !important;
}

h1._2LZl6 {
	color: #b66eff !important;
}

span._13HXc {
	color: white !important;
	cursor: pointer !important;
}

._2NolF.LhRk3:not(._1rl91):before,
._2NolF:disabled:not(._1rl91):before {
	background-color: #1cb0f6 !important;
	cursor: pointer !important;
    box-shadow: 0 var(--__internal__lip-width) 0 #179cdb !important;
}

._15J0U {
	border-bottom: 2px solid rebeccapurple !important;
}

._1HxVp {
	border-top: 2px solid rebeccapurple !important;
}

.-oI84 {
	background: mediumpurple !important;
}

span._26kJ0._2FR4x {
	color: #b66eff !important;
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

._1HA7Y>h2 {
	color: #dd7f7f !important;
}

.SSzTP .twkSI {
    color: #d916c1 !important;
}

._26QYy:before {
    background: darkgoldenrod !important;
    box-shadow: 0 var(--__internal__lip-width) 0 #a75329 !important;
}

._3OTNX {
    background-color: rgb(78 78 78) !important;
    border: 2px solid rgb(99 50 148) !important;
}

._2YmyD {
    background: rgb(143 137 189) !important
}

._2nAgU {
    color: white !important;
}

._3jfHY>._3mxWC {
    color: whitesmoke !important;
}

._3jfHY>._2s4Lh {
    color: #d092ff !important;
}

._1lgsd {
    background-color: #303134 !important;
}

._1qdLM:after, ._1qdLM:before {
    background: none !important;
}

._1zsgz {
    background-color: #303134 !important;
}

._1lJ31 {
    color: whitesmoke !important;
}

._1qdLM {
    color: whitesmoke !important;
    padding-top: 24px !important;
}

._2zN81 {
    color: whitesmoke !important;
}

._2nLk_ {
    background-color: #663399 !important;
}

._1eZU8 {
    color: whitesmoke !important;
}

._3tLz5 {
    color: gold !important;
}

._3kz3Z:hover {
    background-color: #323232 !important;
}

._3kz3Z {
    border-bottom: none !important;
}

._1YdRX {
    color: whitesmoke !important;
}

._1KUxv {
    border-radius: 8px !important;
}

._2uf-t h2 {
    color: whitesmoke !important;
}

._2uf-t p {
    color: #ffa0a0 !important;
}

._3uAwj {
    color: #ffa0a0 !important;
}

._3PrAS {
    color: whitesmoke !important;
}

.uqCpu ._2WiQc:hover {
    background-color: #323232 !important;
    color: whitesmoke !important;
}

.uqCpu .uOkpe {
    border: none !important;
}

.uqCpu ._1Gh9e {
    background-color: #202124 !important;
}

.uqCpu .uOkpe:hover {
    background-color: #323232 !important;
}

._2WiQc._1Gh9e {
    color: whitesmoke !important;
}

._11VOS {
    background: #202124 !important;
    border-top: none !important;
}

.xzblA {
    background-color: #202124 !important;
}

._2igzU._3LUrt {
    color: #c790ff !important;
}

._2QKoe {
    background-color: #202124 !important;
}

._6tX_H{
   background-color: #202124 !important;
}

._3jHvQ{
   background-color: #202124 !important;
}

.saQLX {
    color: whitesmoke !important;
}

.SBf4a {
   background: #202124 !important;
}

._3oNvD {
   background: #202124 !important;
}

._1jKLW {
   background: #202124 !important;
}

._2GPX6 {
   background: #202124 !important;
}

.hOVdl {
    color: #f9aeae !important;
}

._1VA3z {
    color: mediumpurple !important;
}

._3ZuGY {
    background: rebeccapurple !important;
}

._1wy04 {
    color: whitesmoke !important;
}

    `);
})

