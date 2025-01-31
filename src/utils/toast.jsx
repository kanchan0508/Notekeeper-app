// utils/toast.js
import { toast } from "react-toastify";

export const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER, // Ensure this is correctly spelled and defined
  });
};

export const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER, // Same as above
  });
};
