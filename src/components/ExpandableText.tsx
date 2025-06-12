import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
  characterLimit?: number;
}

const ExpandableText = ({ children, characterLimit = 300 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= characterLimit) return <Text>{children}</Text>;

  const content = isExpanded
    ? children
    : `${children.substring(0, characterLimit)}...`;

  return (
    <Text>
      {content}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setIsExpanded(!isExpanded)}
        marginLeft={2}
      >
        {isExpanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
