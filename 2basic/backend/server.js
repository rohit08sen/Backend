import express from 'express'

const app = express()
// app.use(express.static('dist'))// but on change in frontend it won't workproperly
// app.get('/', (req, res) => {
//   res.send("Server is ready")
// });

//get a list of 5 jokes
//standar way of writing /api/jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is a joke 2",
    },
    {
      id: 3,
      title: "A joke 3",
      content: "This is a joke 3",
    },
    {
      id: 4,
      title: "A joke 4",
      content: "This is a joke 4",
    },
    {
      id: 5,
      title: "A joke 5",
      content: "This is a joke 5",
    }
  ];

  res.send(jokes)
})

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
})

