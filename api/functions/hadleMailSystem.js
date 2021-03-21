//Importing

const nodemailer = require("nodemailer");

//Configuring Transporter

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const newUserEmailApproved = async (email, password) => {
  let mail = {
    from: "",
    to: email,
    subject: "Your Account has been Approved by RBIOA",
    html: `${password}`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    return new Error(e);
  }
};
const newUserEmailDisapproved = async (email) => {
  let mail = {
    from: "",
    to: email,
    subject: "Your Account has been Disapproved by RBIOA",
    html: ``,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    return new Error(e);
  }
};

const existingUserEmail = async (email, password) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Account has been Verified by RBIOA",
    html: `${password}`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    return new Error(e);
  }
};
const removeExistingUserEmail = async (email) => {
  let mail = {
    from: "",
    to: email,
    subject: "Your Account has been Removed by RBIOA",
    html: ``,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    return new Error(e);
  }
};

module.exports = {
  newUserEmailApproved,
  newUserEmailDisapproved,
  existingUserEmail,
  removeExistingUserEmail,
};
