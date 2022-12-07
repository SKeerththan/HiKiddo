const { response } = require('express')
const Admin = require('../models/Admin')


//get all admin
const getAllAdmin = (req, res, next) => {
    Admin.find().then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json
        {
            message: 'An error Occured'
        }
    })
}


//find admin by id
const getAdminById = (req, res, next) => {
    let employeId = req.body.adminID
    Admin.findById(employeId).then(response => {
        res.json({
            response
        }).catch(error => {
            res.json({
                message: 'An error Occured!'
            })
        })
    })
}

// add employee
const addAdmin = (req, res, next) => {
    let admin = new Admin({
        email: req.body.email,
        password: req.body.password,
        organization: req.body.organization
    })
    Admin.save().then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.jason({
            message: 'An error Occured'
        })
    })
}

const updatAdmin = (req, res, next) => {
    let adminID = req.body.adminID


    let admin = {
        email: req.body.email,
        password: req.body.password,
        organization: req.body.organization
    }
    Admin.findByIdAndUpdate(employeId, { $set: admin }).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })




}
//delete
const destroyAdmin = (req, res, next) => {
    let addminId = req.body.addminId
    Admin.findByIdAndRemove(adminID).then(response => {
        res.json({
            response
        })
    }).catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

module.exports = {
    getAllAdmin, getAdminById, addAdmin, updatAdmin, destroyAdmin
}