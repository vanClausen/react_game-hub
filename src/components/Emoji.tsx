import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
  style?: ImageProps;
}

const Emoji = ({ rating, style }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "20px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
  };

  return (
    <Image
      filter="
        drop-shadow(-1px -1px 0 white)
        drop-shadow(1px -1px 0 white)
        drop-shadow(-1px 1px 0 white)
        drop-shadow(1px 1px 0 white)
      "
      {...emojiMap[rating]}
      {...style}
    />
  );
};

export default Emoji;
