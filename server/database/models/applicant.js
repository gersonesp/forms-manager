"use strict";

module.exports = (sequelize, DataTypes) => {
  const Applicant = sequelize.define(
    "Applicant",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      description: DataTypes.TEXT,
      status: DataTypes.STRING
    },
    {}
  );
  Applicant.associate = function(models) {
    // associations can be defined here
  };
  return Applicant;
};
