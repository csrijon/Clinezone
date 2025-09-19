import React from 'react'
import "./contact.css"

const Contacct = () => {
  return (
    <>
    <div className="welcome">Welcome</div>
      <div className="client-onboarding-container">
      <div className="client-onboarding-form">
        <h1 className="form-title">Client Onboarding</h1>

        <form className="form-grid">
          <div>
            <label className="form-label">Company Name</label>
            <input className="form-input" type="text" />
          </div>

          <div>
            <label className="form-label">Contact Person</label>
            <input className="form-input" type="text" />
          </div>

          <div>
            <label className="form-label">Email-address</label>
            <input className="form-input" type="email" />
          </div>

          <div>
            <label className="form-label">Phone-no</label>
            <input className="form-input" type="tel" />
          </div>
{/* hello i am a guy  */}
          <div>
            <label className="form-label">Email-address</label>
            <input className="form-input" type="email" />
          </div>

          <div>
            <label className="form-label">Phone-no</label>
            <input className="form-input" type="tel" />
          </div>

          <div className="full-width">
            <label className="form-label">Service Interested</label>
            <input className="form-input" type="text" />
          </div>

          <div className="full-width">
            <label className="form-label">Project Description</label>
            <textarea className="form-input textarea"></textarea>
          </div>

          <div>
            <label className="form-label">Estimated Budget</label>
            <input className="form-input" type="text" />
          </div>

          <div>
            <label className="form-label">Expected Timeline</label>
            <input className="form-input" type="text" />
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-button">
              Submit Details
            </button>
          </div>
        </form>

        <div className="circle circle-left"></div>
        <div className="circle circle-right"></div>
      </div>
    </div>
    </>
  )
}

export default Contacct