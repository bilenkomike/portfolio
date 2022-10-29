import { ContainerComponent } from "./Container.styled";


const Container = props => {
    return <ContainerComponent>{props.children}</ContainerComponent>
}

export default Container;