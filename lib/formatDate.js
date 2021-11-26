import { format } from "date-fns";

export function formatDate(date){
  var dateObj = new Date(date);
  return format(dateObj, "MMMM dd, yyyy");
}