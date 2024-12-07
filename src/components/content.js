import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './content.css'

const Content = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={`content-content ${props.rootClassName} `}>
      <h1 className="content-text10 thq-heading-1">
        {props.heading1 ?? (
          <Fragment>
            <span className="content-text19">
              <span>Blood Group Divider</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </h1>
      <p className="content-text11 thq-body-large">
        {props.content1 ?? (
          <Fragment>
            <span className="content-text16">
              <span>Please attach the .xls, .xlsx, and .xlsm file,</span>
              <br></br>
            </span>
          </Fragment>
        )}
      </p>
      <div className="content-container10">
        <div className="content-container11">
          <div className="content-container12">
            <div className="content-container13">
              <div className="content-container14">
                <div className="content-container15">
                  <div className="content-container16">
                    <div className="content-container17">
                      <div className="content-container18">
                        <div className="content-container19">
                          <div className="content-container20">
                            <div className="content-container21">
                              <input
                                type="file"
                                name="excel"
                                accept=".xls, .xlsx, .xlsm"
                                placeholder="Choose your excel file"
                                className="content-textinput1 input"
                              />
                            </div>
                          </div>
                        </div>
                        <select
                          name="bloodgroup"
                          required="true"
                          className="content-select"
                        >
                          <option value="positive_a">A+</option>
                          <option value="negetive_a">A-</option>
                          <option value="positive_b">B+</option>
                          <option value="negetive_b">B-</option>
                          <option value="positive_o">O+</option>
                          <option value="negetive_o">O-</option>
                          <option value="positive_ab">AB+</option>
                          <option value="negetive_ab">AB-</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="number"
                name="slices"
                placeholder="slices"
                className="content-textinput2 input"
              />
            </div>
          </div>
        </div>
      </div>
      <button name="start" type="submit" className="content-button button">
        <span>
          {props.button ?? (
            <Fragment>
              <span className="content-text13">
                <span>Start</span>
                <br></br>
              </span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

Content.defaultProps = {
  button: undefined,
  content1: undefined,
  heading1: undefined,
  rootClassName: '',
}

Content.propTypes = {
  button: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Content
