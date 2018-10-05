const user = require('../models/user');

const usersCtrl = {};


usersCtrl.getAllUsers = async(req, res) => {
    const users = await user.find();
    res.json(users);
};

usersCtrl.getUser = async(req, res) => {
    const users = await user.findById(req.params.id);
    res.json(users);
};

usersCtrl.editUser = async(req, res) => {
    const { id } = req.params;
    const users = {
        name: req.body.name,
        password: req.body.password
    };
    await user.findByIdAndUpdate(id, { $set: users }, { new: true });
    res.json({
        'status': 'User Edited'
    });
};

usersCtrl.deleteUsers = async(req, res) => {
    await user.findByIdAndDelete(req.params.id);
    res.json({
        'status': 'User Deleted'
    });
};

usersCtrl.createUsers = async(req, res) => {
    const users = new user({
        name: req.body.name,
        password: req.body.password
    });
    await users.save();
    res.json({
        'status': 'User Saved'
    });
};

module.exports = usersCtrl;