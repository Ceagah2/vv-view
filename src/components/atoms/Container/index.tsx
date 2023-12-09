import { IContainer } from "../../../types"
import { Main } from "./styles"

export const Container = ({ children }: IContainer) => {
  return (
    <Main>
      {children}
    </Main>
  )
}