import {
  adjustTextareaHeight,
  getJsonRecommend,
} from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ImageUp,
  Loader2,
  Replace,
  SendHorizonal,
  Trash,
} from "lucide-react";
import {
  useRef,
  useState,
} from "react";
import ImageUploading from "react-images-uploading";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const InputField = ({
  askAIMutation,
  messages,
  setMessages,
}) => {
  const textAreaRef = useRef(null);
  const [images, setImages] = useState(
    []
  );

  const maxNumber = 1;

  const onChange = (imageList) => {
    setImages(imageList);
  };
  const handleSubmit = () => {
    const userInput =
      textAreaRef.current?.value.trim();
    if (userInput) {
      setMessages([]);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: userInput,
          isAi: false,
          image:
            images.length > 0
              ? images[0]["data_url"]
              : null,
        },
      ]);
      const questions = {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: userInput,
              },
              ...(!images.length
                ? []
                : [
                    {
                      inline_data: {
                        data: images[0].data_url.split(
                          "base64,"
                        )[1],
                        mime_type:
                          images[0].file
                            .type,
                      },
                    },
                  ]),
            ],
          },
        ],
      };

      askAIMutation.mutate(questions, {
        onSuccess: (data) => {
          const content =
            getJsonRecommend(data);
          setMessages(
            (prevMessages) => [
              ...prevMessages,
              {
                text: content,
                isAi: true,
              },
            ]
          );
        },
      });
    }
    setImages([]);
    textAreaRef.current.value = "";
  };

  return (
    <div className="w-full">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["png", "jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          <div className="">
            {messages?.length === 0 &&
              images.length === 0 && (
                <div>
                  <p className="text-xs pb-1 text-slate-500">
                    Example prompt:
                  </p>
                  <motion.div
                    initial={{
                      y: 10,
                      opacity: 0.5,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        bounce: 1,
                      },
                    }}
                    onClick={() => {
                      textAreaRef.current.value =
                        "I am going to date with my boy friend";
                      handleSubmit();
                    }}
                    className="w-fit text-white px-4 py-2 rounded-2xl bg-main hover:cursor-pointer"
                  >
                    I am going to date
                    with my boy friend
                  </motion.div>
                </div>
              )}
            <div className="h-fit translate-x-5 py-2">
              {errors?.maxFileSize && (
                <span>
                  File size need less
                  than 2MB
                </span>
              )}
              {imageList.map(
                (image, index) => (
                  <div
                    key={index}
                    className="w-fit h-full"
                  >
                    <img
                      src={
                        image[
                          "data_url"
                        ]
                      }
                      alt=""
                      width="80"
                    />
                    <div className="h-full w-full mt-1 flex justify-between">
                      <button
                        onClick={() =>
                          onImageUpdate(
                            index
                          )
                        }
                      >
                        <Replace className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() =>
                          onImageRemove(
                            index
                          )
                        }
                      >
                        <Trash className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="flex items-start p-2 bg-secondary rounded-full min-h-full">
              <Button
                className="hover:text-main focus-visible:ring-offset-0 focus-visible:ring-0"
                variant="ghost"
                style={
                  isDragging
                    ? { color: "red" }
                    : undefined
                }
                onClick={onImageUpload}
                {...dragProps}
              >
                <ImageUp />
              </Button>
              <Textarea
                ref={textAreaRef}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey
                  ) {
                    e.preventDefault(); // Prevents the default action of the enter key in a textarea (new line)
                    handleSubmit(); // Call the submit function
                  }
                }}
                className="flex-grow resize-none min-h-0 max-h-[100px]"
                rows={1}
                placeholder="Type your message..."
                onInput={
                  adjustTextareaHeight
                }
              />
              <Button
                className="hover:text-main focus-visible:ring-offset-0 focus-visible:ring-0"
                variant="ghost"
                onClick={() =>
                  handleSubmit()
                }
                disabled={
                  askAIMutation.isPending
                }
              >
                {askAIMutation.isPending ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <SendHorizonal />
                )}
              </Button>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default InputField;
