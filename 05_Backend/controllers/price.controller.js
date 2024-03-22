/**
 * Retrieves the hostel price details from the database.
 * 
 * @returns {Promise<Object|null>} - A promise resolving to the hostel price details if found, null otherwise.
 */
async function getHostelPriceDetails() {
    let priceDetails = await Price.findOne({});
    
    if(priceDetails) {
        priceDetails = priceDetails.toObject();
        return priceDetails;
    }
    else {
        return throwError;
    }   
}

/**
 * Updates the hostel price details in the database.
 * 
 * @param {Object} priceDetails - The updated hostel price details.
 * @returns {Promise<Object>} - A promise resolving to the MongoDB update result.
 */
async function updatePriceDetails(priceDetails) {
    return Price.updateOne(
        {  },
        {
            $set: {
                superDeluxe: priceDetails.superDeluxe,
                deluxe: priceDetails.deluxe,
                standard: priceDetails.standard,
                foodPackage: priceDetails.foodPackage,
                electricityBillPerUnit: priceDetails.electricityBillPerUnit,
                securityDeposit: priceDetails.securityDeposit
            }
        }
    );
}

module.exports = {
    getHostelPriceDetails,
    updatePriceDetails
};
