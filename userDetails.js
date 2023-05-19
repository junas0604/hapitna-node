const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
      Name: String,
      LicenseN: String,
      Position: String,
      FirearmSerialNumber: String,
      Email: String,
      Password: String,
      RePassword: String
    },
    {
      collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsSchema);