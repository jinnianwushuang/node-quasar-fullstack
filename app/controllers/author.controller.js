/*
 * @Date           : 2020-09-09 23:56:34
 * @FilePath       : /node-quasar-fullstack/app/controllers/author.controller.js
 * @Description    : 
 */
const db = require("../models");
const Author = db.authors;
const Author_description = require("../description/author.description")
const getPagination = (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? (page - 1) * limit : 0;

  return { limit, offset };
};

// Create and Save a new Author
exports.create = (req, res) => {
  // Validate request
  // console.log("------jinnnian----");
  // console.log(req.body);
  if (!req.body.name) {
   
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Author
  const author = new Author({
    name: req.body.name,
    age: req.body.age || 18,
    sex: req.body.sex,
    married:req.body.married,
    nationality:req.body.nationality || '中国',
    address:req.body.address,
    tel:req.body.tel,
    hobby:req.body.hobby ,
    description:req.body.description,
    remark:req.body.remark



  });

  // Save Author in the database
  author
    .save(author)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Author.",
      });
    });
};

// Retrieve all Authors from the database.
exports.findAll = (req, res) => {
  const { page, size, name } = req.query;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  Author.paginate(condition, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        authors: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page ,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving authors.",
      });
    });
};

// Find a single Author with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Author.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Author with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Author with id=" + id });
    });
};

// Update a Author by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Author.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Author with id=${id}. Maybe Author was not found!`,
        });
      } else res.send({ message: "Author was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Author with id=" + id,
      });
    });
};

// Delete a Author with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Author.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Author with id=${id}. Maybe Author was not found!`,
        });
      } else {
        res.send({
          message: "Author was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Author with id=" + id,
      });
    });
};

// Delete all Authors from the database.
exports.deleteAll = (req, res) => {
  Author.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Authors were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all authors.",
      });
    });
};

// Find all Authors  By sex
exports.findAllBySex = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Author.paginate({ sex: sex|| 1 }, { offset, limit })
    .then((data) => {
      res.send({
        totalItems: data.totalDocs,
        authors: data.docs,
        totalPages: data.totalPages,
        currentPage: data.page ,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving authors.",
      });
    });
};

// 返回字段信息说明

exports.fieldDescription = (req,res) =>{
  res.send({
    description:Author_description.field_description
  })
}
