import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Group, MathUtils, Vector3 } from "three"
import { XwingModel } from "./Xwing.model"

type XWingProps = {}

export const XWing = ({}: XWingProps) => {
    const { viewport } = useThree()
    const ref = useRef<Group>(null)

    useFrame(({clock, mouse}) => {
        if (!ref.current ) {
            return
        }

        const x = (mouse.x * viewport.width) 
        const y = (mouse.y * viewport.height) 
        ref.current.position.lerp(new Vector3(x, y*3, ref.current.position.z), 0.1)
        ref.current.rotation.x = -x * .05 + Math.sin(clock.getElapsedTime()) * .25
        ref.current.position.y += Math.sin(clock.getElapsedTime()) * .025
        ref.current.position.z += Math.sin(clock.getElapsedTime()) * .025

        ref.current.position.y = MathUtils.clamp(ref.current.position.y, 0.75, 3.5)



    })
  return  <XwingModel  ref={ref} position-z={-5} scale={0.25} />  
}
