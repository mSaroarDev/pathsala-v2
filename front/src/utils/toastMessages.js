import { toast } from "react-hot-toast";

export const showSuccess = (text) => toast.success(text);
export const showError = (text) => toast.error(text);
