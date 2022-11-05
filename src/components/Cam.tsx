import { PerspectiveCamera } from "@react-three/drei"
import { Camera, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Vector3 } from "three"

type CamProps = {}

export const Cam = ({}: CamProps) => {

    const ref = useRef<Camera>(null)
    
    useFrame(() => {
        if (!ref.current) {
            return
        }

        ref.current.lookAt(new Vector3(0, ref.current.position.y, -1))
    },)
  return <PerspectiveCamera ref={ref} fov={50} position={[0, 1.1, 2.9]}  makeDefault/>
}
