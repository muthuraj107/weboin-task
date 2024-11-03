const user=require('../models/users.model')

exports.create=(req,res)=>{
    const {
        name,
        role,
        email,
        phoneNumber,
        course,
        status,
    }=req.body;

    const User=new user({
        name,role,email,phoneNumber,course,status
    })
    User.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Something went wrong",
      });
    });

}

exports.data = (req, res) => {
    user
      .find()
      .then((user) => res.send(user))
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Something wrong",
        });
      });
  };
exports.delete = (req, res) => {
    user
      .findOneAndDelete({ _id: req.params.id })
      .then((user) => {
        if (!user) {
          return res
            .status(404)
            .send({ message: "User not found " + req.params.id });
        }
        res.send({ Message: "User Deleted Successfully!!!", data: user.data });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NOt Found") {
          return res
            .status(404)
            .send({ message: "User not found " + req.params.id });
        }
        return res.status(500).send({
          message: "Error getting user with id" + req.params.id,
        });
      });
  };