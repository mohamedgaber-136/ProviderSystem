const FiltrationsArray = ({ keysList, dataList }) => {
  const editInputLabel = (key) => {
    return key
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
  };

  const filterArray = [
    ...keysList.map((key) => {
      const uniqueValues = {};
      dataList.forEach((dataItem) => {
        const value = dataItem[key];
        if (!uniqueValues[value]) {
          uniqueValues[value] = { value }; // Store unique values
        }
      });
      return {
        id: key,
        type: ["balance", "number_of_bookings", "holding_bookings"].includes(
          key
        )
          ? "num_range"
          : ["date_and_time"].includes(key)
          ? "date_range"
          : "dropdown",
        inputLabel: editInputLabel(key),
        data: Object.values(uniqueValues), // Convert the unique values back to an array
      };
    }),
  ];
  return filterArray;
};

export default FiltrationsArray;
