/* eslint-disable no-new */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import Article from './article.model';

// eslint-disable-next-line arrow-body-style
const getMapFromArrayOfObjects = (arr) => {
  const arrO = arr.map((element) => Object.entries(element)[0]);
  console.log(arrO);
  return new Map(arrO);
};

const createArticle = (model) => async (req, res) => {
  try {
    const { articleTitle, author, journal, year, doi, practice } = req.body;
    const article = new Article({
      articleTitle,
      author,
      journal,
      year,
      doi,
      practice,
    });
    article.benefits = getMapFromArrayOfObjects(req.body.benefits);

    const doc = await model.create(article);
    res.status(201).json({ article: doc });
  } catch (e) {
    console.error(e.message);
    res.status(400).json({ message: e.message }).end();
  }
};

const getMany = (model) => async (req, res) => {
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

const crudControllers = (model) => ({
  createArticleEntry: createArticle(model),
  getArticle: getMany(model),
});

export default crudControllers(Article);
