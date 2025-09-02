const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Node.js Express running via Jenkins & ECR!");
});
app.get("/health", (req, res) => {
  res.send("health1");
});
app.get("/health2", (req, res) => {
  res.send("health2");
});
app.get("/health3", (req, res) => {
  res.send("health3");
});
app.get("/health4", (req, res) => {
  res.send("health4");
});
app.get("/health5", (req, res) => {
  res.send("health5");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// create ec2 -> Add IGW -> add SG
// install jenkins -> enable -> start -> service
// on port 8080 -> create user -> install pulgins docker, docker pipeline, aws cred(add creds) plugins
// docker install -> add in jenkins group
// aws cli -> aws configure -> add creds
// create new pipeline with scm * * * * * -> add git repo -> also add webhook in github -> add pipeline code -> apply
// Now add a docker file inside your project -> build and check -> push to github -> ad git repo where every needed

    // aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 810119354065.dkr.ecr.us-east-1.amazonaws.com/
    // docker pull  810119354065.dkr.ecr.us-east-1.amazonaws.com/test-jenkins-repo:6
    // docker run -it -p 3000:3000 810119354065.dkr.ecr.us-east-1.amazonaws.com/test-jenkins-repo:6

    