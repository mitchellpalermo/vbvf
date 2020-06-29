import React from "react";
import { Link } from "react-router-dom";
import "../css/terms-privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="disclosures">
      <h1>Privacy Policy</h1>
      <p>
        Verse By Verse Fellowship (VBVF) has created this Privacy Policy to
        explain why we collect particular information and how we will protect
        your personal privacy within our Web site. The following discloses our
        information gathering and dissemination practices for the website
        located at the URL https://www.vbvf.org and any related subdomains. In
        order to fully understand your rights we encourage you to read this
        Privacy Policy. VBVF reserves the right at any time and without notice
        to change this Privacy Policy simply by posting such changes on our
        Site. Any such change will be effective immediately upon posting.
        Because we want to demonstrate our commitment to your privacy, this
        Privacy Policy notifies you of{" "}
      </p>
      <ul>
        <li>
          What personally identifiable information of yours is collected through
          the Site;
        </li>
        <li>Who collects such information;</li>
        <li>How such information is used;</li>
        <li>With whom your information may be shared;</li>
        <li>
          What choices you ahve regarding collection, use and distribution of
          your information;
        </li>
        <li>
          Waht kind of security procedures are in place to protect the loss,
          misuse or alteration of infomration under our control;
        </li>
        <li>How you can correct any innacuracies in you information;</li>
      </ul>
      <p>
        Questions regarding this statement should be directed to VBVF by
        contacting us through our Contact page webform. Please reference this
        Privacy Policy in your submission.
      </p>
      <h2>WHAT INFORMATION WE COLLECT AND HOW WE USE THAT INFORMATION:</h2>
      <p>
        The information that we collect relates directly to the action being
        completed. Depending on the action, we may collect your name, email
        address, email format preference (HTML vs. Text), address, interests,
        and similar information. For financial transactions such as donations or
        store purchases, we will need to collect your credit card number.
      </p>
      <p>
        We use personal and financial information collected to deliver requested
        information or to complete the requested transaction and to maintain
        accurate financial records. We never sell, share or trade any of our
        customer information with other companies.
      </p>
      <p>
        Any transaction that can be completed online may also be completed via
        phone or mail instead, should you have concerns about security. Please
        see our contact page for information on reaching us by phone or mail.
      </p>
      <h2>CONTACT AND PROFILE INFORMATION:</h2>
      <p>
        VBVF is the sole owner of the information collected on the website. This
        site does not collect personally identifying information about users
        except when you specifically and knowingly provide it. For example, we
        collect information from you in the following ways:
      </p>
      <ul>
        <li>
          Some areas of our Site requet or require contact and other
          information.
        </li>
        <li>
          During the submission of a webform question, we request optional
          personal information such as your name, address, and email address.
        </li>
      </ul>
      <p>
        Additionally, when making an online donation, we request certain
        personal financial information necessary to complete the transaction,
        however VBVF does not record or retain your credit card data used during
        the transaction. We collect the minimal necessary personal information
        to maintain a record of your donation for tax receipt purposes.
      </p>
      <p>
        VBVF VBVF acknowledges that EU individuals have the right to access the
        personal information that we maintain about them. A EU individual who
        seeks access, or who seeks to correct, amend, or delete inaccurate data,
        should <a href="mailto:info@vbvf.org">email us.</a> If requested to
        remove data, we will respond within a reasonable timeframe.
      </p>
      <h2>SECURITY</h2>
      <p>
        When making an online donation using your credit or debit card, your
        card information is transmitted using standard internet protocols, but
        unfortunately no data transmission over the Internet is 100% secure.
        While we strive to protect your information, we cannot ensure or warrant
        the security of such information. To increase the security of your
        transactions, please protect your usernames and passwords, be sure to
        log-out of the site when completing your transaction, and use a secure
        Internet connection when completing a financial transaction.
      </p>
      <h2>CHOICE/OPT OUT</h2>
      <p>
        VBVF only initiates communications with users who have subscribed to our
        mailing list. VBVF provides users with the opportunity to unsubscribe at
        any time by <a href="mailto:info@vbvf.org">emailing us.</a>
      </p>
      <h2>CONTACTING THE WEBSITE</h2>
      <p>
        If If you have any questions about this Privacy Policy, the practices of
        this website, please contact us using the{" "}
        <Link to="/contact">web form</Link> provided on our Contact page or
        write us at:
      </p>
    </div>
  );
};

export default PrivacyPolicy;
