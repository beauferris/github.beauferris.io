/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/hamster.glb')
  useFrame((state, delta) => (group.current.rotation.y += 0.006))

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.neck.geometry}
        material={materials["Material.007"]}
        position={[0.06314805, 5.58120346, 0.35937101]}
        rotation={[-0.29974015, 0.08215367, 0.04442919]}
        scale={[0.15817423, 0.15817425, 0.15817423]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.legs.geometry}
        material={materials["Material.011"]}
        position={[0.00481525, 4.96720552, 0.33483559]}
        rotation={[-0.00004198, -0.00019044, 0.00115213]}
        scale={[0.54523492, 1.72270107, 0.34900141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.torso.geometry}
        material={materials["Material.006"]}
        position={[0.32891774, 4.51422548, 0.39866883]}
        rotation={[0.01206153, 0.01779311, 0.1335134]}
        scale={[0.60566872, 1.04906166, 0.30460978]}
      />
      <mesh
        visible={props.bottomState.current==='shorts'}
        castShadow
        receiveShadow
        geometry={nodes.shorts.geometry}
        material={materials["Material.009"]}
        position={[0.00838558, 5.00606394, 0.36715826]}
        rotation={[0.03376368, 0.01387638, 0.01003241]}
        scale={[0.59219033, 1.87105918, 0.3790572]}
      />
      <mesh
        visible={props.topState.current==='shirt'}
        castShadow
        receiveShadow
        geometry={nodes.shirt.geometry}
        material={nodes.shirt.material}
        position={[0.32891774, 4.51422548, 0.39866883]}
        rotation={[0.01206153, 0.01779311, 0.1335134]}
        scale={[0.60566872, 1.04906166, 0.30460978]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoes.geometry}
        material={materials["Material.008"]}
        position={[0.00481525, 4.96720552, 0.33483559]}
        rotation={[-0.00004198, -0.00019044, 0.00115213]}
        scale={[0.54523492, 1.72270107, 0.34900141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.socks.geometry}
        material={materials["Material.010"]}
        position={[0.00481525, 4.96720552, 0.33483559]}
        rotation={[-0.00004198, -0.00019044, 0.00115213]}
        scale={[0.54523492, 1.72270107, 0.34900141]}
      />
      <group
        //jacket
        visible={props.topState.current === 'jacket'}
        position={[0.32931519, 4.43788385, 0.39016473]}
        rotation={[0.01206153, 0.01779311, 0.1335134]}
        scale={[0.64959198, 1.12513971, 0.32670012]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_3.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_4.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_5.geometry}
          material={materials["Material.017"]}
        />
      </group>
      <mesh
        visible={props.bottomState.current==="pants"}
        castShadow
        receiveShadow
        geometry={nodes.pants.geometry}
        material={materials["Material.018"]}
        position={[0.00838558, 5.00606394, 0.36715826]}
        rotation={[0.03376368, 0.01387638, 0.01003241]}
        scale={[0.59219033, 1.87105918, 0.3790572]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head.geometry}
        material={materials["Material.004"]}
        position={[0, 6.2395463, 0]}
        scale={0.66845131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ears.geometry}
        material={materials["Material.005"]}
        position={[-0.6639697, 6.2840004, 0.31955105]}
        rotation={[1.60629149, 0.00865687, 0.2391203]}
        scale={[0.18815909, 0.03333417, 0.18815914]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyes.geometry}
        material={nodes.Eyes.material}
        position={[0.2144188, 6.53345776, -0.50512576]}
        rotation={[0.18652512, 0.22662392, 0.01534704]}
        scale={[0.05938037, 0.09338962, 0.02269922]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair.geometry}
        material={materials["Material.002"]}
        position={[0.00364742, 6.21911335, 0.00480925]}
        scale={[0.70466483, 0.70496672, 0.70496672]}
      />
      <group
        //cap2
        visible={props.hatState.current==='red-hat'}
        position={[0.01561345, 6.20101166, -0.05566957]}
        rotation={[0.36406913, -0.04649672, 0.01970669]}
        scale={[0.78938425, 0.78938431, 0.78938454]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
      </group>
      <group
        //cap1
        visible={props.hatState.current==='black-hat'}
        position={[0.01561345, 6.20101166, -0.05566957]}
        rotation={[0.36406913, -0.04649672, 0.01970669]}
        scale={[0.78938425, 0.78938431, 0.78938454]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={nodes.Cube009_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/hamster.glb");
