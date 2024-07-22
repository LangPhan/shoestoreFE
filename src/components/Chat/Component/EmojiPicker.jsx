import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SmileIcon } from "lucide-react";
import { Picker } from "emoji-mart";

export const EmojiPicker = ({ onChange }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <SmileIcon className="w-5 h-5 transition text-muted-foreground hover:text-foreground" />
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <Picker
          emojiSize={18}
          theme="light"
          maxFrequentRows={1}
          onEmojiSelect={(emoji) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  );
};
