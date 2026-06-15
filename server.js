 const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>FORGED Proof</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #0b0b0f;
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
          }
          .card {
            max-width: 760px;
            background: linear-gradient(145deg, #15151d, #09090d);
            border: 1px solid #d4af37;
            border-radius: 22px;
            padding: 34px;
            box-shadow: 0 0 40px rgba(212, 175, 55, 0.18);
          }
          h1 {
            color: #d4af37;
            margin-bottom: 10px;
          }
          p {
            color: #d7d7df;
            line-height: 1.55;
          }
          .status {
            margin-top: 24px;
            padding: 14px 16px;
            border-radius: 12px;
            background: rgba(34, 197, 94, 0.15);
            border: 1px solid rgba(34, 197, 94, 0.45);
            color: #86efac;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>FORGED Proof</h1>
          <p>Your Railway deployment is live.</p>
          <p>This is the deployable foundation for the Amazon KDP Pipeline / proof system.</p>
          <div class="status">Status: Online</div>
        </div>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "forged-proof"
  });
});

app.listen(PORT, () => {
  console.log(`FORGED Proof running on port ${PORT}`);
});
