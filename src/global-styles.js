import { injectGlobal } from 'styled-components'

injectGlobal`
  html,
  body {
    /* height: 100%;
    width: 100%; */
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: rgba(0,0,0,.87);

    @media screen {
      background-color: #fafafa;
    }
  }

  #root {
    /* min-height: 100%;
    min-width: 100%; */
    /* display: flex; */
  }

  .report {
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;
  }

  .report .report-title {
    text-align: center;
    color: #3e95ca;
    font-size: 30px;
  }

  .report .report-info {
    background-color: #3785ba;
    padding: 3px;
    color: #fff;
  }

  .report .report-subHeading {
    color: #3e95ca;
  }

  .report .image-container {
    height: auto;
  }

  .report .image-container img {
    max-width: 90%;
    text-align: center;
  }

  .report .report-image-holder {
    float: left;
    margin: 0 10px 10px 10px;
  }

  .report .report-image-holder p {
    color: #555555;
    font-size: 12px;
  }

  .report a:link {
    color: #15406c;
  }

  /* visited link */
  a:visited {
    color: #15406c;
  }

  /* mouse over link */
  a:hover {
    color: #15406c;
  }

  /* selected link */
  a:active {
    color: #15406c;
  }

  .select-concept {
    /* border: 1px solid #ccc; */
    width: 500px;
    border-radius: 3px;
    overflow: hidden;
    margin: 20px auto;
    font-family: 'Montserrat', sans-serif;
  }

  .select-concept select {
    margin: 15px 0;
    padding: 5px 8px;
    width: 130%;
    border: none;
    box-shadow: none;
    background: transparent;
    background-color: #f0f7ff;
    background-image: none;
    -webkit-appearance: none;
  }

  .select-concept select:focus {
    outline: none;
  }

  .select-concept {
    text-align: center;
  }

  .select-concept input[type='button'],
  input[type='submit'],
  input[type='reset'] {
    background-color: #3785ba;
    border: none;
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 12px;
  }

  .main_container {
    display: flex;
    flex-direction: column;
  }

  .config_container {
    display: flex;
    flex-direction: row;
  }

  .diagram_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .diagram_text_container {
    background: #eeeeee;
    width: 200px;
    height: 500px;
    font-size: 10px;
    overflow: scroll;
  }

  /********** GRAPH ********/

  .gap {
    fill: #C4E08C60;
    stroke: #C4E08C;
    stroke-width: 1.5px;
  }

  .concept {
    fill: #73B9D960;
    stroke: #73B9D9;
    stroke-width: 1.5px;
  }

  .concept-selected {
    fill: #E074A755;
    stroke: #ff000055;
    stroke-width: 2px;
  }

  .gap-selected {
    fill: #E074A760;
    stroke: #ff000055;
    stroke-width: 2px;
  }

  .gap-relation {
    fill: none;
    stroke: #00000055;
    stroke-width: 1px;
  }

  .gap-relation-selected {
    fill: none;
    stroke: #ff000055;
    stroke-width: 2px;
  }

  .gap-concept-relation {
    fill: none;
    stroke: #2e82a955;
    stroke-width: 1px;
  }

  .gap-concept-relation-selected {
    fill: #ff000055;
    stroke: #ff000055;
    stroke-width: 2.5px;
  }

  .axis {
    font-family: 'Montserrat', sans-serif;
  }

  .axisRight line {
    stroke: #2e82a9;
  }

  .axisRight path {
    stroke: #2e82a9;
  }

  .axisRight text {
    fill: #2e82a9;
  }

  /********** GRAPH InfoDisplay********/

  .clearfix {
    overflow: hidden;
  }

  .clearfix::after {
    content: '';
    clear: both;
    display: table;
  }

  #info_display_container {
    min-height: 500px;
  }

  .info-main-container {
    padding: 15px;
    margin: 10px;
    font-family: 'Montserrat', sans-serif;
  }

  .info-section-header {
    padding: 4px;
    background-color: #15406c;
    color: #fff;
    text-align: center;
    font-weight: bold;
  }

  .info-container {
    padding: 10px;
    border: 1px solid #000;
  }

  .info-expand-button {
    width: 100px;
    text-align: center;
    border: 1px solid #000;
    padding: 5px;
  }

  .node-title {
    color: #3e95ca;
    text-align: center;
    margin-bottom: 4px;
  }

  .node-subTitle {
    text-align: center;
    font-size: 80%;
  }

  .node-description {
    text-align: center;
    font-style: italic;
    font-size: 80%;
  }

  .node-shortInfo {
    font-size: 80%;
    width: 49%;
    float: right;
    text-align: right;
    margin-bottom: 4px;
  }

  .node-shortInfo .value-missing {
    color: red;
  }

  .node-shortInfo-heading {
    color: #3785ba;
    text-decoration: underline;
  }

  .relations-container {
    width: 49%;
    float: left;
  }

  .info-extra-info-holder img {
    max-width: 100%;
  }

  .relation-info {
    padding-top: 4px;
    padding-bottom: 4px;
    border-bottom: 1px solid #3e95ca;
    font-size: 90%;
    cursor: pointer;
    position: relative;
  }

  .relation-info-gap-relation {
      max-width: 200px;
  }

  @media only screen and (min-width: 1200px) {
    .relation-info-gap-relation {
      max-width: none;
    }
  }

  .relations-header {
    margin-top: 5px;
    color: #3785ba;
  }

  .relation-info .chosen {
    padding: 3px;
    background-color: #ffe0e0;
  }

  .no-relation-info {
    font-size: 80%;
    font-style: italic;
  }

  .complexity-info {
    text-align: left;
  }

  .quantification-info {
    text-align: left;
  }

  .generate-report-button {
    background-color: #3785ba;
    border: none;
    color: white;
    padding: 8px 10px;
    width: 50px;
    text-align: center;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 12px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`
