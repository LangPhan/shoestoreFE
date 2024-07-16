import { Label } from "@/components/ui/label";
import React, { Fragment, useState } from "react";

const ImageUpload = ({ setImg }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleSelectImage = (e) => {
    setImg(e?.target?.files[0] || null);
    setImageUrl(URL.createObjectURL(e?.target?.files[0] || null));
  };
  return (
    <Fragment>
      <Label>Product image</Label>
      {imageUrl ? (
        <img src={imageUrl} className="w-[100px] h-[100px]" />
      ) : (
        <Fragment>
          <label
            className={`cursor-pointer flex items-center justify-center border border-dashed w-full min-h-[100px] rounded-lg relative overflow-hidden group`}
          >
            <input
              type="file"
              className="hidden-input"
              onChange={handleSelectImage}
            />
          </label>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ImageUpload;
