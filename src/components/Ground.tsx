import { Plane } from "@react-three/drei";

type GroundProps = {}

export const Ground = ({}: GroundProps) => {

  return <Plane  rotation-x={Math.PI/-2} scale={[100,100,100]} material-color='#F0EC80' />
}
