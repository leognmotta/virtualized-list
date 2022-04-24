import { useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Box, Flex } from "@chakra-ui/react";
import { useDebounce } from "react-use";

import { useRandomPersons } from "./hooks/useRandomPersons";
import { SearchHeader } from "./components/SearchHeader";
import { ListItem } from "./components/ListItem";

const App: React.FC = () => {
  const { data, loaded } = useRandomPersons();
  const [filtered, setFiltered] = useState(data);
  const [val, setVal] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [range, setRange] = useState([0, 100]);
  const [debouncedRange, setDebouncedRange] = useState([0, 100]);
  useDebounce(() => setDebouncedValue(val), 300, [val]);
  useDebounce(() => setDebouncedRange(range), 200, [range]);

  useEffect(() => {
    setFiltered(
      data.filter(
        (person) =>
          person.name.toLowerCase().includes(debouncedValue.toLowerCase()) &&
          person.age >= debouncedRange[0] &&
          person.age <= debouncedRange[1]
      )
    );
  }, [debouncedValue, loaded, debouncedRange]);

  return (
    <Flex flexDirection="column" height="100vh">
      <SearchHeader
        value={val}
        range={range}
        setRange={setRange}
        setVal={setVal}
      />

      <Box width="100%" flexGrow={1}>
        <AutoSizer>
          {({ width, height }) => (
            <FixedSizeList
              itemSize={105}
              itemCount={filtered.length}
              width={width}
              height={height}
            >
              {({ index, style }) => {
                const person = filtered[index];

                return <ListItem person={person} index={index} style={style} />;
              }}
            </FixedSizeList>
          )}
        </AutoSizer>
      </Box>
    </Flex>
  );
};

export default App;
