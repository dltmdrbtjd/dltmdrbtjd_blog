import express, { Request, Response } from 'express';
import Post from '../models/post';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  const { title, content, category, tags } = req.body;

  Post.create({ title, content, category, tags })
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).json({
        errorMessage: '게시글 작성에 실패하였습니다',
      });
    });
});

router.get('/', (req: Request, res: Response) => {
  Post.find((err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ errorMessage: '게시글 불러오기에 실패했습니다.' });
    }
    res.json(data);
  });
});

export default router;
