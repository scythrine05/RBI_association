//Importing

const nodemailer = require("nodemailer");

//Configuring Transporter

let transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  secure: true,
  secureConnection: false, // TLS requires secureConnection to be false
  tls: {
    ciphers: "SSLv3",
  },
  requireTLS: true,
  port: 465,
  debug: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const suggestion = async (id, data) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "RBIOA(Suggestion)",
    html: `<div style="color:#232023;padding: 10px;border:solid #232023 2px;background-color: #fff;">
        <h1>
            RBI Officers' Association
        </h1>
        <h2>
            Suggestion Form
        </h2>
        <h5>
            SamadhanID: ${id}
            <br />
            Name: ${data.Name}
            <br />
            Email: ${data.Email}
            <br />
            Subject: ${data.Subject}
            <br />
            <br/>
            Message:<br/><br/>
             ${data.Message}
            <br />
            <br />
            <hr />
            <p style="color: #808080;">
                rbioa.org.in
                <br />
                <span style="font-size: 10px;">
                    © 2021 RBIOA India , All Rights Reserved
                </span>
            </p>
        </h5>
    </div>`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

const contact = async (data) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "RBIOA(Contact)",
    html: `<div style="color:#232023;padding: 10px;border:solid #232023 2px;background-color: #fff;">
        <h1>
            RBI Officers' Association
        </h1>
        <h2>
            Contact Form
        </h2>
        <h5>
            Name: ${data.Name}
            <br />
            Email: ${data.Email}
            <br />
            <br/>
            Message:<br/><br/>
             ${data.Message}
            <br />
            <br />
            <hr />
            <p style="color: #808080;">
                rbioa.org.in
                <br />
                <span style="font-size: 10px;">
                    © 2021 RBIOA India , All Rights Reserved
                </span>
            </p>
        </h5>
    </div>`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

const newUserEmail = async (email) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "RBIOA (Registered)",
    html: `<div style="color:#232023;padding: 10px;border:solid #232023 2px;width: 50%;background-color: #fff;">
          <h1>
            RBI Officers' Association
        </h1>
        <h2>
            Hello,
        </h2>
        <h5>
        Your Account has been Registered Successfully. The Association will soon respond to your request.
            <br />
            <br />
            <hr />
            <p style="color: #808080;">
                do not reply to the email
                <br />
                rbioa.org.in
                <br />
                <span style="font-size: 10px;">
                    © 2021 RBIOA India , All Rights Reserved
                </span>
            </p>
        </h5>
    </div>`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

const newUserEmailApproved = async (email, password) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "RBIOA (Approved)",
    html: `<div style="color:#232023;padding: 10px;border:solid #232023 2px;width: 50%;background-color: #fff;">
        <h1>
            RBI Officers' Association
        </h1>
        <h2>
            Hello,
        </h2>
        <h5>
            Congratulation, Your Account has been successfully approved by the Association. You now has access to resources of RBIOA
            website, make sure to keep the resources private.
            <br />
            <br />
            Login ID : ${email}
            <br />
            Password : ${password}
            <hr />
            <p style="color: #808080;">
                do not share the password with anyone
                <br />
                do not reply to the email
                <br />
                rbioa.org.in
                <br />
                <span style="font-size: 10px;">
                    © 2021 RBIOA India , All Rights Reserved
                </span>
            </p>
        </h5>
    </div>`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    throw new Error(e);
  }
};
const newUserEmailDisapproved = async (email) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "RBIOA (Disapproved)",
    html: `<div style="color:#232023;padding: 10px;border:solid #232023 2px;width: 50%;background-color: #fff;">
        <h1>
            RBI Officers' Association
        </h1>
        <h2>
            Hello,
        </h2>
        <h5>
            Sorry, your Account has been disapproved by the Association. Please contact the officials if you have any queries.
            <br />
            <br />
            <hr />
            <p style="color: #808080;">
                do not reply to the email
                <br />
                rbioa.org.in
                <br />
                <span style="font-size: 10px;">
                    © 2021 RBIOA India , All Rights Reserved
                </span>
            </p>
        </h5>
    </div>`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    throw new Error(e);
  }
};

const existingUserEmail = async (email, password) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "RBIOA (Verified)",
    html: `<div style="color:#232023;padding: 10px;border:solid #232023 2px;width: 50%;background-color: #fff;">
        <h1>
            RBI Officers' Association
        </h1>
        <h2>
            Hello,
        </h2>
        <h5>
            Your Account has been verified by the Association. You now has access to resources of RBIOA
            website, make sure to keep the resources private.
            <br />
            <br />
            Login ID : ${email}
            <br />
            Password : ${password}
            <hr />
            <p style="color: #808080;">
                do not share the password with anyone
                <br />
                do not reply to the email
                <br />
                rbioa.org.in
                <br />
                <span style="font-size: 10px;">
                © 2021 RBIOA India , All Rights Reserved
                </span>
            </p>
        </h5>
    </div>`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    throw new Error(e);
  }
};
module.exports = {
  suggestion,
  newUserEmail,
  newUserEmailApproved,
  newUserEmailDisapproved,
  existingUserEmail,
  contact,
};
