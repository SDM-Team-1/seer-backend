/* eslint-disable no-new */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import Article from './article.model';
import articleQuery from './article.query';

// eslint-disable-next-line arrow-body-style
const getMapFromArrayOfObjects = (arr) => {
  const arrO = arr.map((element) => Object.entries(element)[0]);
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
    const { from, to, practiceBenefit } = req.query;
    const { practice, benefit } = JSON.parse(practiceBenefit);
    const docs = await model
      .find(
        articleQuery(parseInt(from, 10), parseInt(to, 10), practice, benefit),
      )
      .lean()
      .exec();
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
