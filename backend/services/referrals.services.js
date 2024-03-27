// const {User} = require("../models");
// const referModel = require("../models/refer.model");
// const percentageModel = require("../models/percentage.model");

// /**
//  * @description Get all refer details 
//  * @param {empty} 
//  * @returns {Promise<User>} ArrayOfObject
//  */
// const getAllReferServices = async (userBody) => {
//     const { fromUserAddress } = userBody
//     const refer = await referModel.find({
//         fromUserAddress: fromUserAddress
//     });
//     return { data: refer };
// };
// /**
//  * @description filter in User model by fromUserAddress
//  * @param {ObjectId} fromUserAddress
//  * @returns {Promise<User>}
//  */
// const filterReferDetails = async (userQueries) => {
//     const { userKey } = userQueries;
//     const filterData = await User.findById({ _id: userKey });
//     return { data: filterData };
// };
// /**
//  * @description Update refer by fromUserAddress
//  * @param {ObjectId} fromUserAddress
//  * @param {Object} updateBody
//  * @returns {Promise<User>}
//  */
// const newReferralServices = async (userQuery, updateBody) => {
//     // var referData = {};
//     const { fromUseraddress, toUserAddress } = updateBody;
//     const refers = await filterReferDetails(userQuery);
//     return toUserAddress && (
//         User.findOne({ useraddress: toUserAddress }).then(async (res) => {
//             return (
//                 res ? {
//                     message: "user is already register"
//                 } : (
//                     await referModel.create({
//                         userStatus: 0,
//                         fromUseraddress: refers.data.useraddress,
//                         toUserAddress: toUserAddress
//                     }).then((referData) => {
//                         return referData && User.create({
//                             useraddress: toUserAddress,
//                             percentage: 50,
//                             status: true
//                         }).then((res) => {
//                             return { data: referData, message: 'new refers created successful!' }
//                         }).catch((err) => { throw new Error(err) })
//                         // return { data: res, message: 'new refers created successful!' }
//                     })
//                         .catch((err) => { throw new Error(err) })
//                 )
//             )
//         }).catch((err) => { throw new Error(err) })
//     )
// };
// /**
// * @description Get SinglePackage by toUserAddress
// * @param {ObjectId<string} toUserAddress
// * @returns {Promise<User>}
// */
// const getSingleReferServices = async (toUserAddress) => {
//     const refer = await referModel.findOne({ toUserAddress });
//     return refer
// }
// /**
//  * @description Create a referral details
//  * @param {Object} userBody
//  * @returns {Promise<User>} Object
//  */
// const updateReferServices = async (userBody) => {
//     const { toUserAddress } = userBody;
//     const singleRefer = await getSingleReferServices(toUserAddress);
//     return singleRefer && (
//         User.findOne({ useraddress: singleRefer.fromUseraddress })
//             .then(async (userData) => {
//                 await User.findOne({ useraddress: toUserAddress })
//                     .then(async (referData) => {
//                         return (referData.percentage == 90) && (
//                             userData.percentage = 100,
//                             Object.assign(userData),
//                             await userData.save(),
//                             await percentageModel.findOne({ useraddress: userData.useraddress })
//                                 .then(async (percentageData) => {
//                                     percentageData.refer_friend = 100;
//                                     Object.assign(percentageData);
//                                     await percentageData.save()
//                                 })
//                                 .catch((err) => { throw new Error(err) })
//                         )
//                     })
//                     .catch((err) => { throw new Error(err) })
//                 return { data: userData, message: 'The user percentage was updated!' }
//             })
//             .catch((err) => { throw new Error(err) })
//     )
// };

// const getReferDetailsServices = async (userBody) => {
//     const { userAddress } = userBody;
//     return referModel.find({ fromUseraddress: userAddress }).then((res) => {
//         let address = [];
//         for (let i = 0; i < res.length; i++) {
//             address.push(res[i].toUserAddress);
//         }
//         return User.find({ useraddress: { $in: address } }).then((userData) => {
//             return userData 
//         }).catch((err) => { throw new Error(err) })
//     })
//         .catch((err) => { throw new Error(err) });
// }
// module.exports = {
//     newReferralServices,
//     getSingleReferServices,
//     updateReferServices,
//     getAllReferServices,
//     filterReferDetails,
//     getReferDetailsServices
// }