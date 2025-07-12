import nodemailer from 'nodemailer'

const sendMail = async (email,otp)=>{

    
    const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: "rameshadhikari579@gmail.com",
    pass: 'njnbuubbnvdwppqj',
  },
});


     const info = await transporter.sendMail({
   from: '"My laptop store" <maddison53@ethereal.email>',
  to: email,
  subject: "Your OTP Code ✔",
  text: `Your OTP code is: ${otp}`, // plain‑text body  
  html: `<p>Hello,</p><p>Your OTP code is: <strong>${otp}</strong></p><p>This code will expire in 10 minutes.</p>`, // HTML body

  });
  console.log(info)

}

export {sendMail}