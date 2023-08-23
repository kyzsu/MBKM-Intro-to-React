import { useQuery } from "@tanstack/react-query"
import fetchBreedList from "./fetchBreedList"

export default function useBreedList(animal) {
  // const [breedList, setBreedList] = useState([])
  // const [status, setStatus] = useState("unloaded")

  // useEffect(() => {
  //   if (!animal) {
  //     setBreedList([])
  //   } else if (localCache[animal]) {
  //     setBreedList(localCache[animal])
  //   } else {
  //     requestBreedList()
  //   }

  //   async function requestBreedList() {
  //     setBreedList([])
  //     setStatus("loading")
  //     const res = await fetch(
  //       `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  //     )
  //     const json = await res.json()
  //     localCache[animal] = json.breeds || []
  //     // arti dari "||" -->
  //     // jika kondisi 1 ada, maka gunakan kondisi 1, kalau enggak ya kondisi 2
  //     setBreedList(localCache[animal])
  //     setStatus("loaded")
  //   }
  // }, [animal])
  // dependency --> trigger untuk menjalankan fungsi didalam useEffect

  // return [breedList, status]

  const results = useQuery(["breeds", animal], fetchBreedList)

  return [results?.data?.breeds ?? [], results.status]

  // (jawaban 1 ada?) ?? jawaban 2 --> ternary operator: kondisi ? jawaban 1 : jawaban 2
}
