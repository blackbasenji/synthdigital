// src/components/PricingModal.js
import React from 'react'
import './PricingModal.css'

const PricingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        <h2>Detailed Retainer Breakdown</h2>
        <p><em>All tiers are flexible and can evolve with your team’s needs.</em></p>

        <div className="tier">
          <h3>
            <span className="tier-label">Tier 1:</span> Strategic Advisory
          </h3>
          <hr className="tier-divider" />
          <strong>~$2,500/month</strong> · ~6–8 hrs/month
          <ul>
            <li>
              <span className="checkmark">✔</span>
              High-level product & brand strategy input
            </li>
            <li>
              <span className="checkmark">✔</span>
              UX and marketing reviews
            </li>
            <li>
              <span className="checkmark">✔</span>
              1–2 working sessions per month
            </li>
          </ul>
        </div>

        <div className="tier">
          <h3>
            <span className="tier-label">Tier 2:</span> Core Design Partner
          </h3>
          <hr className="tier-divider" />
          <strong>~$5,000/month</strong> · ~12–15 hrs/month
          <ul>
            <li>
              <span className="checkmark">✔</span>
              Everything in Tier 1
            </li>
            <li>
              <span className="checkmark">✔</span>
              Brand direction, UX flows, IA guidance
            </li>
            <li>
              <span className="checkmark">✔</span>
              Collaboration with dev teams
            </li>
          </ul>
        </div>

        <div className="tier">
          <h3>
            <span className="tier-label">Tier 3:</span> Fractional CDO
          </h3>
          <hr className="tier-divider" />
          <strong>~$8,000–$10,000/month</strong> · ~20–30 hrs/month
          <ul>
            <li>
              <span className="checkmark">✔</span>
              Everything in Tier 1 and 2
            </li>
            <li>
              <span className="checkmark">✔</span>
              Full UX/UI design + design systems
            </li>
            <li>
              <span className="checkmark">✔</span>
              Leadership through MVP and/or full launch
            </li>
          </ul>
        </div>

        <p className="final-line">
          <strong>Not ready for a retainer?</strong>
          <br />
          Try a 1–2 week <em>Design Strategy Sprint</em> for $2,000 to align vision, uncover quick wins, and build momentum.
        </p>

        <div className="modal-cta">
          <a href="mailto:logan@synthdigital.com" className="btn coral-btn">Let’s Talk</a>
          <a href="/book" className="btn teal-btn">Book Discovery Call</a>
        </div>
      </div>
    </div>
  )
}

export default PricingModal