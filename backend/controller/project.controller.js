const router = require("express").Router();
const projectService = require("../service/project.service");
const { statusCodes } = require("../constants");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const create = async (req, res, next) => {
  const { date, title, description } = req.body;
  const imageName = req.file ? req.file.filename : "";

  try {
    await projectService.create({
      date,
      title,
      description,
      image: imageName,
    });
    res.json({ status: "ok" });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const projects = await projectService.getAll();
    res.json({ status: "ok", data: projects });
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  const { id } = req.params;
  try {
    await projectService.deleteProject(id);
    res.json({ status: "ok" });
  } catch (error) {
    next(error);
  }
};

router.post("/", upload.single("image"), create);
router.get("/", getAll);
router.delete("/:id", deleteProject);

module.exports = router;
