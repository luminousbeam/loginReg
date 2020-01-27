const collections = require('../models/models');

const User=collections.User;

module.exports = 
{
    login: function(req, res)
    {
        User.findOne({email:req.body.email, password:req.body.password})
            .then(user => 
            {
                if(user !=null)
                {
                    res.json({status: 'success', user:user})
                    req.session.user_id=user._id;
                    req.session.email= user.email;
                }
                else
                {
                    res.json({status: 'Email/Password combo invalid'})   
                }
            })
            .catch(err => res.json({ status: 'error', message: err }));  
    },

    register: function(req, res)
    {
        User.findOne({email: req.body.email})
            .then(user => 
            {
                if(user != null) //theres another user with email in db
                {
                    res.json({status: 'Email already exists'})
                }
                else
                {
                    User.create(req.body)
                    .then(user => res.json({status: 'success', user:user}))
                    .catch(err => res.json({ status: 'Error', message: err }));
                //logging the user in
                req.session.user_id=user._id;
                req.session.email= user.email;
                }
            })
            .catch(err => res.json({ status: "Error", message: err }));
            
             
    },
};