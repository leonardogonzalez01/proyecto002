export const Logout = () => {
    localStorage.clear();
    return window.location.href = "/";
};