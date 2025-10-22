import ScrollToTop from "@/components/common/ScrollToTop";
import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {

  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
