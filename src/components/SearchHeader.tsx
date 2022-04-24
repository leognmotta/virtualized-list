import {
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Center,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

type Props = {
  value: string;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  range: number[];
  setRange: React.Dispatch<React.SetStateAction<number[]>>;
};

const SearchHeader: React.FC<Props> = ({ value, setVal, range, setRange }) => {
  return (
    <Center padding="1rem">
      <Box maxW="xl" width="100%">
        <Input
          type="text"
          value={value}
          placeholder="Search Name"
          onChange={({ target }) => setVal(target.value)}
        />

        <Box marginTop="2">
          <Text>Filter age:</Text>

          <Flex justify="space-between">
            <Text>{`${range[0]}`}</Text>
            <Text>{`${range[1]}`}</Text>
          </Flex>

          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={[0, 100]}
            value={range}
            min={0}
            max={100}
            step={1}
            onChange={(value) => setRange(value)}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </Box>
      </Box>
    </Center>
  );
};

export { SearchHeader };
