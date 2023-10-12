const express = require("express");
const router = express.Router();
const verifyJWT = require("../../Middleware/verify.JWT")
employeesController = require("../../Controllers/employeesController");


// http request methods
router .route("/")
  .get(verifyJWT, employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
