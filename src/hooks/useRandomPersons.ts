import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Persons } from "../types/persons";

const useRandomPersons = () => {
  const [data, setData] = useState<Persons[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get<{
          data: Persons[];
          message: string;
          status: boolean;
        }>("https://random-persons.herokuapp.com/users", {
          signal: controllerRef.current.signal,
        });

        setData(data);
      } catch (error) {
        setError(error as string);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);

  return { data, error, loaded, cancel };
};

export { useRandomPersons };
