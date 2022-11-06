import { SpotLight } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { Group, Light, MathUtils, DirectionalLight as DT, Vector3 } from "three"
import { XwingModel } from "./Xwing.model"

type XWingProps = {}

export const XWing = ({}: XWingProps) => {
    const { viewport } = useThree()
    const ref = useRef<Group>(null)
    const refLight = useRef<DT>(null)

    useFrame(({clock, mouse}) => {
        if (!ref.current || !refLight.current) {
            return
        }

        const x = (mouse.x * viewport.width) 
        const y = (mouse.y * viewport.height) 
        ref.current.position.lerp(new Vector3(x, y*3, ref.current.position.z), 0.1)
        ref.current.rotation.x = -x * .05 + Math.sin(clock.getElapsedTime()) * .1
        ref.current.position.y += Math.sin(clock.getElapsedTime()) * .01
        ref.current.position.z += Math.sin(clock.getElapsedTime()) * .01

        ref.current.position.y = MathUtils.clamp(ref.current.position.y, 0.75, 3.5)

        refLight.current.lookAt(new Vector3(ref.current.position.x, -1, 0))

    })
  return <> <directionalLight ref={refLight} intensity={1} castShadow /> <XwingModel castShadow ref={ref} position-z={-6} scale={0.25} />  </>
}
