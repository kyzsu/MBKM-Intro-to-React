import { useState, useEffect } from "react"

const localCache = {}

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState("unloaded")

  useEffect(() => {
    if (!animal) {
      setBreedList([])
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreedList()
    }

    async function requestBreedList() {
      setBreedList([])
      setStatus("loading")
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      )
      const json = await res.json()
      localCache[animal] = json.breeds || []
      // arti dari "||" -->
      // jika kondisi 1 ada, maka gunakan kondisi 1, kalau enggak ya kondisi 2
      setBreedList(localCache[animal])
      setStatus("loaded")
    }
  }, [animal])
  // dependency --> trigger untuk menjalankan fungsi didalam useEffect

  return [breedList, status]
}
