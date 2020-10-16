/* eslint-disable import/first */
/* eslint-disable no-console */
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/index';
import Article from '../src/resources/article/article.model';
import testArticles from './testArticle';

chai.use(chaiHttp);
chai.should();

describe('Articles', () => {
  afterEach(() => {
    // After each test we empty the database
    Article.deleteMany({}, (err) => {
      if (err) console.error(err);
      // done();
    });
  });

  describe('/POST Article', () => {
    it('it should POST an article', (done) => {
      chai
        .request(app)
        .post('/api/article')
        .send(testArticles[0])
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('article');
          done();
        });
    });
  });

  describe('/POST Article', () => {
    const yearTestArticle = testArticles[1];
    delete yearTestArticle.year;
    it('it should return an error with 400 response if a year value is missing', (done) => {
      chai
        .request(app)
        .post('/api/article')
        .send(yearTestArticle)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('article validation failed: year: Path `year` is required.');
          done();
        });
    });
  });

  describe('/POST Article', () => {
    const titleTestArticle = testArticles[2];
    delete titleTestArticle.articleTitle;
    it('it should return an error with a 400 response if article title is missing', (done) => {
      chai
        .request(app)
        .post('/api/article')
        .send(titleTestArticle)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql(
              'article validation failed: articleTitle: Path `articleTitle` is required.',
            );
          done();
        });
    });
  });

  describe('/POST Article', () => {
    const authorTestArticle = testArticles[3];
    delete authorTestArticle.author;
    it('it should return an error with a 400 response if the author missing', (done) => {
      chai
        .request(app)
        .post('/api/article')
        .send(authorTestArticle)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql(
              'article validation failed: author: Validator failed for path `author` with value ``',
            );
          done();
        });
    });
  });

  describe('/POST Article', () => {
    const journalTestArticle = testArticles[4];
    delete journalTestArticle.journal;
    it('it should return an error with a 400 response if the Journal name is missing', (done) => {
      chai
        .request(app)
        .post('/api/article')
        .send(journalTestArticle)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql(
              'article validation failed: journal: Path `journal` is required.',
            );
          done();
        });
    });
  });

  describe('/POST Article', () => {
    const practiceTestArticle = testArticles[5];
    delete practiceTestArticle.practice;
    it('it should return an error with a 400 response if the SE practice is missing', (done) => {
      chai
        .request(app)
        .post('/api/article')
        .send(practiceTestArticle)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql(
              'article validation failed: practice: Path `practice` is required.',
            );
          done();
        });
    });
  });

  describe('/POST Article', () => {
    const doiTestArticle = testArticles[6];
    delete doiTestArticle.doi;
    it('it should return an error with a 400 response if the doi is missing', (done) => {
      chai
        .request(app)
        .post('/api/article')
        .send(doiTestArticle)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have
            .property('error')
            .eql('article validation failed: doi: Path `doi` is required.');
          done();
        });
    });
  });
});
