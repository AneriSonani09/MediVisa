import React from 'react';
import './Rules.css';

const Rules = () => {
    return (
      <>
        <br />
        <h1 className="text-center">Rules and General Information</h1>
        <div className="medical-test-rules-container">
          <h3>
            Documents/Records To Be Brought On The Day Of Medical Examination
          </h3>
          <ul>
            <li>
              Original Passport / National Id with photo (Aadhar card, pan card
              or voter id) along with 1 photo copy - Driving licence not
              acceptable.
            </li>
            <li>1 Xerox copy of the bio-data page of the passport</li>
            <li>3 recent passport size photos</li>
            <li>The letter from the embassy (If any)</li>
          </ul>
          <hr />
          <h3>Documents to be Uploaded</h3>
          <ul>
            <li>AdharCard (Pdf Format Only)</li>
            <li>Passport (Pdf Format Only)</li>
                    <li>Passport Size Photo (Pdf Format Only)</li>
                </ul>
                <hr/>
          <h3>Additional Information</h3>
          <ul>
            <li>
              Please bring the photo copy of old medical reports / medicines /
              prescription / Vaccination records (if any) / Glasses (If worn).
            </li>
            <li>
              For Females – Please do not attend the medicals during the
              menstrual cycle.
            </li>
            <li>
              Pregnant applicants have the option to undergo chest x ray with
              protective gear (double lead shield covering of the abdomen) or
              can defer medical exam until post delivery.
            </li>
            <li>
              Applicant has to check with their gynaecologist before coming for
              the medicals regarding the above.
            </li>
            <li>Food – no restrictions.</li>
          </ul>
          <hr />
          <h3>Medical Package Contents</h3>
          <ul>
            <li>0 to below 5 – Physical examination only</li>
            <li>5 to below 11 yrs: Physical examination+ urine test</li>
            <li>
              11 to below 15: Physical examination+ urine test+X ray chest
            </li>
            <li>
              15 and above: Physical examination+ urine test+X ray chest+ blood
              tests
            </li>
          </ul>
          <hr />
          <h3>Duration Of The Medical Checkup</h3>
          <ul>
            <li>
              2 to 4 hours on the day of appointment. If any additional
              consult/tests are required the duration may be prolonged.
            </li>
          </ul>
          <hr />
          <h3>Payment Details</h3>
          <ul>
            <li>
              All fees must be borne by the applicant and can be paid in cash /
              Credit card.
            </li>
            <li>
              If any other further tests/consults are advised by the panel
              physician (as per the CIC protocol) after the medical examination,
              applicants have to bear the cost.
            </li>
            <li>
              Cost of additional test – As per the current hospital tariff
            </li>
          </ul>
        </div>
      </>
    );
};

export default Rules;
