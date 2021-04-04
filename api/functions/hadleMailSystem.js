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

const newUserEmail = async (email) => {
  let mail = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "RBIOA (Registered)",
    html:
      "<h1 style = 'text-align:center'>RBI Officers' Association</h1><br/><p style='text-align:center'>Your Account has been Registered Successfully</p><br/><p style ='text-align:center'>We will soon response on your request</p><hr/>",
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
    html: `<h1 style = 'text-align:center'>RBI Officers' Association</h1><br/><p style='text-align:center'>Congrats, your Account has been Approved</p><br/><p style ='text-align:center'>Password: ${password}</p><hr/><center>do not share the password</center>`,
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
    html: `<h1 style = 'text-align:center'>RBI Officers' Association</h1><br/><p style='text-align:center'>Sorry, your Account has been Disapproved</p><br/><p style ='text-align:center'>Good Luck</p><hr/>`,
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
    html: `<h1 style = 'text-align:center'>RBI Officers' Association</h1><br/><p style='text-align:center'>Your Account has been Verified Successfully</p><br/><p style ='text-align:center'>Password: ${password}</p><hr/><center>do not share the password</center>`,
  };

  try {
    await transporter.sendMail(mail);
    return;
  } catch (e) {
    throw new Error(e);
  }
};
module.exports = {
  newUserEmail,
  newUserEmailApproved,
  newUserEmailDisapproved,
  existingUserEmail,
};
