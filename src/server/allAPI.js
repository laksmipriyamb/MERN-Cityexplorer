import commonAPI from "./commonAPI";
import serverURL from "./serverURL"

//register api 
export const registerAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}
//login api 
export const loginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//googlelogin api 
export const googleLoginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/login`,userDetails)
}

//get home spots
export const getHomeSpotsAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/topdestinations`,{})
}

//get home stories approved by admin
export const getHomeApprovedStoriesAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/stories/home`,{},reqHeader)
}

// ------------------------------------------------
//              Admin
// ------------------------------------------------


//add spot api 
export const addSpotAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/admin/spot/add`,reqBody,reqHeader)
}

//edit spot api 
export const UpdateSpotAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/admin/spot/edit/${id}`,reqBody,reqHeader)
}

///spot/:id/delete
export const deleteSpotAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/spot/${id}/delete`,{},reqHeader)
}

//getAllStories
export const getAllStoriesAdminAPI = async (reqHeader) => {
  return await commonAPI("GET",`${serverURL}/admin/stories/all`,{},reqHeader);
};

//update story status approved
export const updateStoryStatusAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/stories/${id}/update`,{},reqHeader)
}

// ------------------------------------------------
//              User
// ------------------------------------------------
export const getAllSpotsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/allspots`,{},reqHeader)
}

//get home reviews
export const getHomeReviewsAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/home/reviews`,{})
}

//get spot details by id
export const getSpotDetailsByIdAPI = async (id,reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/spot/${id}/view`,{},reqHeader)
}

//post story -by user
export const postStoryAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/story/post`,reqBody,reqHeader)
}

//get all stories approved by admin
export const getAllApprovedStoriesAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/stories/all`,{},reqHeader)
}
//get all stories pending
export const getAllPendingStoriesAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/stories/all`,{},reqHeader)
}
// add review
export const addReviewAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/add/review`,reqBody,reqHeader)
}

//get all reviews
export const getAllReviewsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/reviews/all`,{},reqHeader)
}

//get all my reviews in profile page
export const getMyReviewsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/my/reviews`,{},reqHeader)
}

//delete review
export const deleteReviewAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/reviews/${id}`,{},reqHeader)
}

//get user published stories
export const getAllUserStoriesAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-stories/all`,{},reqHeader)
}

///user/:id/edit : put request by Edit when update button clicked
export const editUserAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/profile/edit/${id}`,reqBody,reqHeader)
}

//delete story
export const removeStoryAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/stories/${id}`,{},reqHeader)
}
//get all users
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin-users/all`,{},reqHeader)
}

//save or unsave spot
export const saveSpotAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST",`${serverURL}/spot/save`,reqBody,reqHeader)
}

// get saved spots
export const getSavedSpotsAPI = async (reqHeader) => {
  return await commonAPI("GET",`${serverURL}/spot/saved`,"",reqHeader)
}

//send message
export const addMessageAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST",`${serverURL}/message/add`,reqBody,reqHeader)
}