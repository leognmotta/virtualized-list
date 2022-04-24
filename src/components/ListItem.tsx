import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

import { Persons } from "../types/persons";

type Props = {
  person: Persons;
  index: number;
  style: React.CSSProperties;
};

const ListItem: React.FC<Props> = ({ person, index, style }) => {
  return (
    <Box style={style} border="1px solid #e0e0e0">
      <Flex
        maxWidth={460}
        margin="0 auto"
        align="center"
        height={104}
        padding="0 1rem"
      >
        <Box mr="8">
          <Avatar name={person.name} />
        </Box>
        <Box>
          <Text fontSize="2xl">{person.name}</Text>
          <Text>Age: {person.age}</Text>
          <Text fontSize="xx-small" color="gray.500">
            Card Number: {`${index + 1}`}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export { ListItem };
