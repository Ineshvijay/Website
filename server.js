const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ineshvijay.work@gmail.com",
            pass: "i1n2e3s4h5"
        }
    });

    const mailOptions = {
        from: email,
        to: "ineshvijay.work@gmail.com",
        subject: `Message from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Email failed to send." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});