// const localHost = "http://127.0.0.1:5000";
const localHost = "https://access-managment-api.azurewebsites.net";
export const loginEmail = `${localHost}/login/send-otp`;
export const verifyOtp = `${localHost}/login/verify-otp`;
export const editAccess = `${localHost}/users/update/access`;
export const getUsers = `${localHost}/endusers`;
export const getUsersWithAccess = `${localHost}/access_user`;
export const updateUser = `${localHost}/users/update`;
export const createUser = `${localHost}/create_user`;
export const DeleteUser = `${localHost}/users/delete`;
