import catagoryModel from "../models/catagoryModel.js";
import slugify from "slugify";
import userModel from "../models/userModel.js";
export const CreateCatagoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCatagory = await catagoryModel.findOne({ name });
    if (existingCatagory) {
      return res.status(200).send({
        success: true,
        message: "Catagory Already Exisits",
      });
    }
    const catagory = await new catagoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new catagory created",
      catagory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in catagory",
    });
  }
};
// update catagory
export const UpdateCatagoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const catagory = await catagoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "catagory update successfully",
      catagory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while updating catagory",
    });
  }
};

// get all caatagory
export const GetAllCatagoryController = async (req, res) => {
  try {
    const catagory = await catagoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All catagory List successfully",
      catagory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting catagory",
    });
  }
};

// get sinle catagory
export const GetSingleCatagory = async (req, res) => {
  try {
    const catagory = await catagoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get single catagory successfully",
      catagory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in getting single catagory",
    });
  }
};
// delete catagory
export const DeleteCatagoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await catagoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "catagory deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in deleting",
      error,
    });
  }
};
