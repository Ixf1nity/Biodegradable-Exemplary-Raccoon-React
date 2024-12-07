import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Content from '../components/content'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Biodegradable Exemplary Raccoon</title>
        <meta property="og:title" content="Biodegradable Exemplary Raccoon" />
      </Helmet>
      <Content
        button={
          <Fragment>
            <span className="home-text1">
              <span>Start</span>
              <br></br>
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text4">
              <span>Please attach the .xls, .xlsx, and .xlsm file,</span>
              <br></br>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text7">
              <span>Blood Group Divider</span>
              <br></br>
            </span>
          </Fragment>
        }
        rootClassName="contentroot-class-name1"
      ></Content>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <g fill="none">
          <g filter="url(#f238id0)">
            <rect
              x="1.879"
              y="2.313"
              rx="3.6"
              fill="url(#f238id5)"
              width="27.875"
              height="27.875"
            ></rect>
            <rect
              x="1.879"
              y="2.313"
              rx="3.6"
              fill="url(#f238id8)"
              width="27.875"
              height="27.875"
            ></rect>
          </g>
          <g filter="url(#f238id1)">
            <path
              d="M28.067 4.813v22.875"
              stroke="url(#f238id6)"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </g>
          <g filter="url(#f238id2)">
            <path
              d="M5.343 4.125h21.782"
              stroke="url(#f238id7)"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </g>
          <g filter="url(#f238id3)">
            <path
              d="M13.476 23.25a1.5 1.5 0 0 1-1.06-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.686 4.601L23.677 9.681a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.06.431"
              fill="#53BB7D"
            ></path>
          </g>
          <g filter="url(#f238id4)">
            <path
              d="M13.476 23.25a1.5 1.5 0 0 1-1.06-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.616 4.532a.1.1 0 0 0 .14 0l10.131-9.95a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.06c-.292.287-.676.43-1.06.43"
              fill="#FCF2FF"
            ></path>
          </g>
          <defs>
            <filter
              x="1.379"
              y="1.313"
              id="f238id0"
              width="30.375"
              height="29.375"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx="2" dy="-1"></feoffset>
              <fegaussianblur stdDeviation="1.5"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.176471 0 0 0 0 0.521569 0 0 0 0 0.309804 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="shape"
                result="effect1_innerShadow_18590_1991"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dy="-1"></feoffset>
              <fegaussianblur stdDeviation="1.5"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.25098 0 0 0 0 0.490196 0 0 0 0 0.462745 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="effect1_innerShadow_18590_1991"
                result="effect2_innerShadow_18590_1991"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx="-.5" dy=".5"></feoffset>
              <fegaussianblur stdDeviation=".5"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.356863 0 0 0 0 0.905882 0 0 0 0 0.560784 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="effect2_innerShadow_18590_1991"
                result="effect3_innerShadow_18590_1991"
              ></feblend>
            </filter>
            <filter
              x="25.317"
              y="2.063"
              id="f238id1"
              width="5.5"
              height="28.375"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fegaussianblur
                result="effect1_foregroundBlur_18590_1991"
                stdDeviation="1"
              ></fegaussianblur>
            </filter>
            <filter
              x="2.593"
              y="1.375"
              id="f238id2"
              width="27.281"
              height="5.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fegaussianblur
                result="effect1_foregroundBlur_18590_1991"
                stdDeviation="1"
              ></fegaussianblur>
            </filter>
            <filter
              x="5.234"
              y="8.25"
              id="f238id3"
              width="22"
              height="16"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fegaussianblur
                result="effect1_foregroundBlur_18590_1991"
                stdDeviation=".5"
              ></fegaussianblur>
            </filter>
            <filter
              x="5.834"
              y="8.85"
              id="f238id4"
              width="20.8"
              height="14.8"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx="-.4" dy=".4"></feoffset>
              <fegaussianblur stdDeviation=".375"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.913725 0 0 0 0 0.886275 0 0 0 0 0.968627 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="shape"
                result="effect1_innerShadow_18590_1991"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx=".4" dy="-.4"></feoffset>
              <fegaussianblur stdDeviation=".2"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="effect1_innerShadow_18590_1991"
                result="effect2_innerShadow_18590_1991"
              ></feblend>
            </filter>
            <lineargradient
              id="f238id5"
              x1="15.817"
              x2="15.817"
              y1="5.887"
              y2="39.14"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5AD98F"></stop>
              <stop offset="1" stop-color="#51C685"></stop>
            </lineargradient>
            <lineargradient
              id="f238id6"
              x1="28.567"
              x2="28.567"
              y1="4.813"
              y2="27.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#74FCA8"></stop>
              <stop offset="1" stop-color="#61DB90"></stop>
            </lineargradient>
            <lineargradient
              id="f238id7"
              x1="28.281"
              x2="2.749"
              y1="4.375"
              y2="4.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#66F39D"></stop>
              <stop offset="1" stop-color="#60E496"></stop>
            </lineargradient>
            <radialgradient
              r="1"
              cx="0"
              cy="0"
              id="f238id8"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-1.56249 1.46876 -1.71548 -1.82495 27.536 4.406)"
            >
              <stop stop-color="#80FFB3"></stop>
              <stop offset="1" stop-color="#80FFB3" stop-opacity="0"></stop>
            </radialgradient>
          </defs>
        </g>
      </svg>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <g fill="none">
          <g filter="url(#f238id0)">
            <rect
              x="1.879"
              y="2.313"
              rx="3.6"
              fill="url(#f238id5)"
              width="27.875"
              height="27.875"
            ></rect>
            <rect
              x="1.879"
              y="2.313"
              rx="3.6"
              fill="url(#f238id8)"
              width="27.875"
              height="27.875"
            ></rect>
          </g>
          <g filter="url(#f238id1)">
            <path
              d="M28.067 4.813v22.875"
              stroke="url(#f238id6)"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </g>
          <g filter="url(#f238id2)">
            <path
              d="M5.343 4.125h21.782"
              stroke="url(#f238id7)"
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>
          </g>
          <g filter="url(#f238id3)">
            <path
              d="M13.476 23.25a1.5 1.5 0 0 1-1.06-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.686 4.601L23.677 9.681a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.06.431"
              fill="#53BB7D"
            ></path>
          </g>
          <g filter="url(#f238id4)">
            <path
              d="M13.476 23.25a1.5 1.5 0 0 1-1.06-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.616 4.532a.1.1 0 0 0 .14 0l10.131-9.95a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.06c-.292.287-.676.43-1.06.43"
              fill="#FCF2FF"
            ></path>
          </g>
          <defs>
            <filter
              x="1.379"
              y="1.313"
              id="f238id0"
              width="30.375"
              height="29.375"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx="2" dy="-1"></feoffset>
              <fegaussianblur stdDeviation="1.5"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.176471 0 0 0 0 0.521569 0 0 0 0 0.309804 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="shape"
                result="effect1_innerShadow_18590_1991"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dy="-1"></feoffset>
              <fegaussianblur stdDeviation="1.5"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.25098 0 0 0 0 0.490196 0 0 0 0 0.462745 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="effect1_innerShadow_18590_1991"
                result="effect2_innerShadow_18590_1991"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx="-.5" dy=".5"></feoffset>
              <fegaussianblur stdDeviation=".5"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.356863 0 0 0 0 0.905882 0 0 0 0 0.560784 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="effect2_innerShadow_18590_1991"
                result="effect3_innerShadow_18590_1991"
              ></feblend>
            </filter>
            <filter
              x="25.317"
              y="2.063"
              id="f238id1"
              width="5.5"
              height="28.375"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fegaussianblur
                result="effect1_foregroundBlur_18590_1991"
                stdDeviation="1"
              ></fegaussianblur>
            </filter>
            <filter
              x="2.593"
              y="1.375"
              id="f238id2"
              width="27.281"
              height="5.5"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fegaussianblur
                result="effect1_foregroundBlur_18590_1991"
                stdDeviation="1"
              ></fegaussianblur>
            </filter>
            <filter
              x="5.234"
              y="8.25"
              id="f238id3"
              width="22"
              height="16"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fegaussianblur
                result="effect1_foregroundBlur_18590_1991"
                stdDeviation=".5"
              ></fegaussianblur>
            </filter>
            <filter
              x="5.834"
              y="8.85"
              id="f238id4"
              width="20.8"
              height="14.8"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood result="BackgroundImageFix" flood-opacity="0"></feflood>
              <feblend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx="-.4" dy=".4"></feoffset>
              <fegaussianblur stdDeviation=".375"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 0.913725 0 0 0 0 0.886275 0 0 0 0 0.968627 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="shape"
                result="effect1_innerShadow_18590_1991"
              ></feblend>
              <fecolormatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx=".4" dy="-.4"></feoffset>
              <fegaussianblur stdDeviation=".2"></fegaussianblur>
              <fecomposite
                k2="-1"
                k3="1"
                in2="hardAlpha"
                operator="arithmetic"
              ></fecomposite>
              <fecolormatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"></fecolormatrix>
              <feblend
                in2="effect1_innerShadow_18590_1991"
                result="effect2_innerShadow_18590_1991"
              ></feblend>
            </filter>
            <lineargradient
              id="f238id5"
              x1="15.817"
              x2="15.817"
              y1="5.887"
              y2="39.14"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5AD98F"></stop>
              <stop offset="1" stop-color="#51C685"></stop>
            </lineargradient>
            <lineargradient
              id="f238id6"
              x1="28.567"
              x2="28.567"
              y1="4.813"
              y2="27.688"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#74FCA8"></stop>
              <stop offset="1" stop-color="#61DB90"></stop>
            </lineargradient>
            <lineargradient
              id="f238id7"
              x1="28.281"
              x2="2.749"
              y1="4.375"
              y2="4.375"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#66F39D"></stop>
              <stop offset="1" stop-color="#60E496"></stop>
            </lineargradient>
            <radialgradient
              r="1"
              cx="0"
              cy="0"
              id="f238id8"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(-1.56249 1.46876 -1.71548 -1.82495 27.536 4.406)"
            >
              <stop stop-color="#80FFB3"></stop>
              <stop offset="1" stop-color="#80FFB3" stop-opacity="0"></stop>
            </radialgradient>
          </defs>
        </g>
      </svg>
    </div>
  )
}

export default Home
