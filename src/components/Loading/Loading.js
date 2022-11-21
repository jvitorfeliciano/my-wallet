import { Oval } from "react-loader-spinner";

const Loading = ({size, color}) => {
  return (
    <Oval
      height={size}
      width={size}
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={color}
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loading;