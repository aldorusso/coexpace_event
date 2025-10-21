import ImageEditor from "@/components/image-editor/ImageEditor";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Image Editor - Coexpace",
  description: "Edit and manage images for the home page",
};

const ImageEditorPage = () => {
  return (
    <Wrapper>
      <ImageEditor />
    </Wrapper>
  );
};

export default ImageEditorPage;
