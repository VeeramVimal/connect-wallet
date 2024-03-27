const { successResponse, errorResponse } = require("../helpers");
const referralServices = require("../services/referrals.services");
const referModel = require("../models/refer.model");
const createRefer = async(req, res) => {
    try {
        const refers = await referralServices.newReferralServices(req.query, req.body);
        return successResponse(req, res, refers.data, refers.message)
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}
const getAllRefer = async(req, res) => {
    try {
        const refers = await referralServices.getAllReferServices(req.body);
        return successResponse(req, res, refers.data);
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}
const getFilterRefer = async(req, res) => {
    try {
        const refers = await referralServices.filterReferDetails(req.query);
        return successResponse(req, res, refers.data);
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}
const getSingleRefer = async(req, res) => {
    try {
        const { toUserAddress } = req.body
        const refer = await referralServices.getSingleReferServices(toUserAddress);
        return successResponse(req, res, refer)
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}
const getReferDetail = async(req, res) => {
    try {
        const refer = await referralServices.getReferDetailsServices(req.body);
        return successResponse(req, res, refer)
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}
const updateRefers = async(req, res) => {
    try {
        const refer = await referralServices.updateReferServices(req.body);
        return successResponse(req, res, refer.data, refer.message);
    } catch (error) {
        return errorResponse(req, res, error.message);
    }
}
module.exports = {
    createRefer,
    getAllRefer,
    getSingleRefer,
    updateRefers,
    getFilterRefer,
    getReferDetail
}