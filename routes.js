exports.setup = function(app) {
  var data = [
    {id: 1, title: "Coca-Cola - Natal - Server Connect", text: "This is one comment"},
    {id: 2, title: "Coca-Cola - Embaixadores - Connect", text: "This is *another* comment"},
    {id: 3, title: "Coca-Cola - Natal - MySQL", text: "#yay This is *another* comment"}
  ];

  app.get('/api', function(req, res) {

    res.status(200).json(data);
  });

  app.post('/api', function(req, res) {
    res.status(200).json(data.concat(req.body));
  });

};
