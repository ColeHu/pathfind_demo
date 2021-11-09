function initGltf(){
    const Color = {
        GROUND: new THREE.Color( 0xe5e5ff ).convertGammaToLinear( 2.2 ).getHex(),
        NAVMESH: new THREE.Color( 0xe5e5ff ).convertGammaToLinear( 2.2 ).getHex(),
    };
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('resource/meshes/t2.glb', function (gltf){
        const levelMesh = gltf.scene.children[0];
        levelMesh.scale.set(-1, 1, 1)
        levelMesh.rotateZ(-Math.PI / 4)
        levelMesh.position.set(-41, -0.6, 48);
        const meshMaterial = new THREE.MeshBasicMaterial({
            color: Color.GROUND,
            flatShading: true,
            roughness: 1,
            metalness: 0
        })
        level = new THREE.Mesh(levelMesh.geometry, meshMaterial);
        level.castShadow = true;
        level.receiveShadow = true;
        window.level = level;
        //levelMesh.rotateZ(3 * Math.PI / 4)
        scene.add(levelMesh);
    }, null);

    gltfLoader.load('resource/meshes/t2.navmesh1.glb', function (gltf) {
        const navMesh = gltf.scene.children[0]
        navMesh.geometry.scale(3.3, 3.3, 3.3)
        const zone = THREE.Pathfinding.createZone(navMesh.geometry);
        pathFinder.setZoneData(ZONE, zone);

        //添加导航线
        // const navWireframe = new THREE.Mesh(navMesh.geometry, new THREE.MeshBasicMaterial({
        //     color: 0xffffff,
        //     wireframe: true
        // }));
        // navWireframe.position.y = OFFSET / 2;
        // scene.add(navWireframe);

        navmesh = new THREE.Mesh(navMesh.geometry, new THREE.MeshBasicMaterial({
            color: Color.NAVMESH,
            opacity: 0.5,
            transparent: true
        }));

        //添加导航网格
        scene.add(navmesh);

        groupID = pathFinder.getGroup(ZONE, playerPos);
    }, null);
    helper.setPlayerPosition(new THREE.Vector3( 20, -0.5, 20));
    helper.setTargetPosition(new THREE.Vector3( 20, -0.5, 20));
    document.addEventListener('click', onDocumentMouseUp, false);
    window.addEventListener('resize', onWindowResize, false);
}
