import React from "react";
import {Link} from "react-router-dom"

const PrivacyPolicy = () => {
    return(
        <React.Fragment>

            <div className="container privacy-policy">
                <Link to="/react-things-happen">Got it</Link>
                <div>
                    <h1>Privacy Policy</h1>
                    <p>We value your trust and respect your privacy.
                        This Privacy Policy provides you with details about the manner in which your data is collected, stored & used by us.
                        You are advised to read this Privacy Policy carefully. By using Things Happen application you expressly give us consent to use and disclose your personal information in accordance with this Privacy Policy. <br/>
                            If you do not agree to the terms of the policy, please do not use Things Happen application.
                    </p>
                </div>
                <div>
                    <h4>General</h4>
                    <p>
                        We will not sell, share or rent your personal information to any 3rd party.  Periodically, we may reveal general statistical information about Things Happen and its users. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your device characteristics, operating system, language preferences, country, information about how and when you use our App and other technical information. This information is primarily needed to maintain the security and operation of our Apps, and for our internal analytics and reporting purposes.  <br/>
                        We reserve the right to communicate your personal information to any third party that makes a legally-compliant request for its disclosure.
                    </p>
                </div>
                <div>
                    <h4>Information collected through our App</h4>
                    <p>
                        We may collect information regarding your mobile device, when you use our apps. If you use our Apps, we may also collect the following information:<br/>
                        <i>Mobile Device Access.</i> We may request access or permission to certain features from your mobile device, including your mobile device's contacts, and other features. If you wish to change our access or permissions, you may do so in your device's settings.<br/>
                        <i>Mobile Device Data.</i> We may automatically collect device information (such as your mobile device ID, model and manufacturer), operating system, version information.
                    </p>
                </div>
                <div>
                    <h4>How do we use your information</h4>
                    <p>
                        We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Apps, products, services, marketing and your experience.
                    </p>
                </div>
                <div>
                    <h4>Who will your information be shared with</h4>
                    <p>
                        We only share and disclose your information with the following third parties. We have categorized each party so that you may be easily understand the purpose of our data collection and processing practices. If we have processed your data based on your consent and you wish to revoke your consent, please contact us.
                    </p>
                    <p>
                        <i>Analytics:</i><br/>
                        - Firebase<br/>
                        <i>Advertising:</i><br/>
                        - Google Mobile Ads<br/>
                    </p>
                </div>
                <div>
                    <h4>Consent</h4>
                    <p>
                        By using Things Happen and/or by providing your information, you consent to the collection and use of the information you disclose on Things Happen in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.
                    </p>
                </div>
                <div>
                    <h4>Changes to this Privacy Policy</h4>
                    <p>
                        Things Happen has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                    </p>
                </div>
                <div>
                    <h4>Contacting Us</h4>
                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:tobuyapp.ios@gmail.com">tobuyapp.ios@gmail.com</a>
                </div>
            </div>

        </React.Fragment>
    )
}

export default PrivacyPolicy