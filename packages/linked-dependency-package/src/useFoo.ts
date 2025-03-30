import { useContext } from "react"
import { FooContext } from "./FooProvider"

export const useFoo = () => {
  const foo = useContext(FooContext)

  if (!foo) {
    throw new Error("Foo context not found")
  }

  return foo
}