function initBackground(renderer){
    const loader = new THREE.TextureLoader();
    let rt;
    const texture = loader.load('../resource/skybox/tears_of_steel_bridge_2k.jpg', function (){
        rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
        rt.fromEquirectangularTexture(renderer, texture);
    })
    return rt;
}