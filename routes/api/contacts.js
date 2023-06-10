const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../controllers");

const { validation, isValidId, authentic } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

router.get("/", authentic, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post(
  "/",
  authentic,
  validation(schemas.addSchema),
  ctrlWrapper(ctrl.add)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.remove));

router.put(
  "/:contactId",
  isValidId,
  validation(schemas.addSchema),
  ctrlWrapper(ctrl.update)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
