const { useLocation } = require("react-router-dom");

const useTabValue = () => {
  const location = useLocation();

  if (location.pathname.match("todos")) {
    return `/todos`;
  }

  if (location.pathname.match("")) {
    return `/`;
  }
};

export default useTabValue;
