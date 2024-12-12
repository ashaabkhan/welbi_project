import { postRequest } from "@/services";

export const concatItems = (items) => items.map((item) => item).join(", ");

export const convertToMonthYearDay = (dateValue, includeTime = true) => {
  if (dateValue == null) return "Present";
  const date = new Date(dateValue);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...(includeTime && {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  });
  return formatter.format(date);
};

export const formHandleChange = (e, setState, state) => {
  const { name, value, type, checked } = e.target;
  const arrValues = ["hobbies", "levelOfCare", "facilitators", "tags"];

  if (type === "checkbox") {
    setState({
      ...state,
      [name]: checked,
    });
  } else {
    setState({
      ...state,
      [name]: arrValues.includes(name) ? [value] : value,
    });
  }
};

export const formHandleSubmit = async (e, setState, state, url, resetState) => {
  e.preventDefault();
  //   setState(state);
  await postRequest(url, state);
};
