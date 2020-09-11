import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>

type ResultX = Transform<X>; // ResultX type equals string
type ResultY = Transform<Y>; // ResultY type equals { field: number }

type cases = [
  Expect<Equal<ResultX, string>>
  Expect<Equal<ResultY, { field: number }>>
]
