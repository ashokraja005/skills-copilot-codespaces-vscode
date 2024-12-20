// create web server for comments
// Method: POST
// @param: comment
// @param: post_id
// @return: comment

app.post('/comments', (req, res) => {
  const { comment, post_id } = req.body;
  const newComment = { comment, post_id };
  comments.push(newComment);
  res.status(201).json(newComment);
});
