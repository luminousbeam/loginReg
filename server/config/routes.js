controller= require('../controllers/controllers.js');

module.exports=(app)=>
{
    app.post('/login', (req, res) => 
    {
        controller.login(req,res);
    });
    app.post('/register', (req, res) => 
    {
        controller.register(req,res);
    });
}