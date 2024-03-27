const { successResponse, errorResponse } = require("../helpers");
const login = require("../models/login");
const percentageModel = require("../models/percentage.model");
const percentageServices = require("../services/percentage.services");
/**
 * @description Get user by address details
 * @param {string} userAddress
 * @returns {Promise<User>} Object
 */
const findUserAddress = async (useraddress) => {
    const user = await login.findOne({ useraddress: useraddress });
    return user;
};
/**
* @description Get SinglePackage by userAddress
* @param {ObjectId<string>} userAddress
* @returns {Promise<User>}
*/
const findGetOnePercentage = async (req, res) => {
    const { useraddress } = req.body;
    try {
        const percentage = await percentageServices.getSingle(useraddress);
        return successResponse(req, res, percentage)
    } catch (error) {
        return errorResponse(req, res, error.message);  
    }
}
/**
* @description Get SinglePackage by userAddress and update the percentage model
* @param {ObjectId<string>} userAddress
* @returns {Promise<User>}
*/
const percentageTransaction = async (userBody) => {
    const { useraddress, follow_twitter, join_discord, join_telegram, refer_friend } = userBody;
    const percentage = await percentageModel.findOne({ useraddress: useraddress });
    if (percentage) {
        Object.assign(percentage, userBody);
        await percentage.save();
        return percentage;
    } else {
        return await percentageModel.create(userBody);
    }
};
/**
 * @description update user data used in useraddress
 * @param {ObjectId<string>} useraddress
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updatePercentage = async (req, res) => {
    const { useraddress, percentage } = req.body;
    try {
        await percentageTransaction(req.body);
        const user = await findUserAddress(useraddress);
        user.percentage = percentage;
        Object.assign(user);
        await user.save();
        return successResponse(req, res, user, message = 'user percentage update successfully')
    } catch (error) {
        return errorResponse(req, res, error.message)
    }
};

module.exports = {
    updatePercentage,
    findUserAddress,
    percentageTransaction,
    findGetOnePercentage
}