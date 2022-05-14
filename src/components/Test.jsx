const Test = ({ selected, num }) => {
  const travel = selected * num;
  const travelmoney = travel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return <div>{travelmoney}</div>;
};

export default Test;
