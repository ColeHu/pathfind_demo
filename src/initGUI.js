function initGUI(){
    let gui = new dat.GUI();
    params = {
        灯光亮度: 1,

        重设位置: function (){
            helper.setPlayerPosition(new THREE.Vector3( 20, -0.5, 20));
            helper.setTargetPosition(new THREE.Vector3( 20, -0.5, 20));
            playerPos.copy(new THREE.Vector3( 20, -0.5, 20));
            targetPos.copy(new THREE.Vector3( 20, -0.5, 20));
            path = pathFinder.findPath(playerPos, targetPos,ZONE, groupID);
            helper.setPath(path);
        },

        开关坐标轴: function (){
            if(isOpenAxis) isOpenAxis = false;
            else isOpenAxis = true;
        }

    }
    gui.add(params, '灯光亮度', 1, 2);
    gui.add(params, '重设位置');
    gui.add(params, '开关坐标轴');
}