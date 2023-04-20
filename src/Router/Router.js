const Router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const { upoladData } = require("../Controller/Upload");
const {
  deleteUser,
  updateUser,
  getUserById,
  createUser,
  getUsers,
} = require("../Controller/User");
const {
  deleteAccount,
  updateAccount,
  getAccountById,
  getAccounts,
  createAccount,
} = require("../Controller/Account");
const {
  deletePolicy,
  updatePolicy,
  getPolicyById,
  getPolicies,
  createPolicy,
} = require("../Controller/Policy");

Router.post("/upload", upload.single("file"), upoladData);

Router.post("/CreateUser", createUser);
Router.get("/GetUser", getUsers);
Router.get("/GetByIdUser/:id", getUserById);
Router.put("/UpadateUser", updateUser);
Router.delete("/DeleteUser", deleteUser);

Router.post("/createAccount", createAccount);
Router.get("/getAccounts", getAccounts);
Router.get("/getAccountById/:id", getAccountById);
Router.put("/updateAccount", updateAccount);
Router.delete("/deleteAccount", deleteAccount);

Router.post("/createPolicy", createPolicy);
Router.get("/getPolicies", getPolicies);
Router.get("/getPolicyById/:id", getPolicyById);
Router.put("/updatePolicy", updatePolicy);
Router.delete("/deletePolicy", deletePolicy);

module.exports = Router;
