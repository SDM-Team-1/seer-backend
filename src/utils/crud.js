/* eslint-disable no-console */
export const getMany = (model) => async (req, res) => {
  try {
    // eslint-disable-next-line no-underscore-dangle
    const docs = await model.find().lean().exec();
    console.log('docs', docs);
    res.status(200).json({ data: docs });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

export const createOne = (model) => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body });
    res.status(201).json({ data: doc });
  } catch (e) {
    console.error(e);
    res.status(400).end();
  }
};

const crudControllers = (model) => ({
  getMany: getMany(model),
  createOne: createOne(model),
});

export default crudControllers;
