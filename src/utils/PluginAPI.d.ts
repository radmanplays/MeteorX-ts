declare namespace PluginAPI {
    namespace events {
        let types: string[];
        namespace listeners {
            let event: any[];
        }
        function newEvent(name: string): void;
        function callEvent(name: string, data: any): void;
    }
    namespace globals {
        function _initUpdate(): void;
    }
    namespace player {
        function isBurning(): boolean;
        function isPushedByWater(): boolean;
        function isEating(): boolean;
        function isEntityAlive(): boolean;
        function isEntityInsideOpaqueBlock(): boolean;
        function isImmuneToExplosions(): boolean;
        function isImmuneToFire(): boolean;
        function isInLava(): boolean;
        function isInWater(): boolean;
        function isInvisible(): boolean;
        function isPushedByWater(): boolean;
        function isRiding(): boolean;
        function isSilent(): boolean;
        function isSneaking(): boolean;
        function isSprinting(): boolean;
        function isWet(): boolean;
        function setBeenAttacked(): void;
        function setDead(): void;
        function setInWeb(): void;
        function setOnFireFromLava(): void;
        function getUUID(): string;
        function getAir(): number;
        function getAlwaysRenderNameTag(): boolean;
        function getAlwaysRenderNameTagForRender(): boolean;
        function getBrightness(json: any): number;
        function getBrightnessForRender(json: any): number;
        function reload(): void;
        function getCollisionBorderSize(): number;
        let x: number;
        let y: number;
        let z: number;
        let chunkCoordX: number;
        let chunkCoordY: number;
        let chunkCoordZ: number;
        let motionX: number;
        let motionY: number;
        let motionZ: number;
        let yaw: number;
        let pitch: number;
        let isInWeb: boolean;
        let isCollided: boolean;
        let isCollidedVertically: boolean;
        let isCollidedHorizontally: boolean;
        let onGround: boolean;
        let dimension: number;
        let id: number;
        let fallDistance: number;
        let noClip: boolean;
        let stepHeight: number;
        let isDead: boolean;
        let inPortal: boolean;
        let inWater: boolean;
        let isAirBorne: boolean;
        let ticksExisted: number;
        let invulnerable: boolean;
        let isImmuneToFire: boolean;
        let isOutsideBorder: boolean;
        let entityCollisionReduction: number;
        let isSwingInProgress: boolean;
        let arrowHitTimer: number;
        let hurtTime: number;
        let maxHurtTime: number;
        let swingProgressInt: number;
        let dead: boolean;
        let isJumping: boolean;
        function jump(): void;
        function kill(): void;
        namespace inventory {
            let currentItem: number;
            let inventoryChanged: boolean;
            let mainInventory: any[];
            let armorInventory: any[];
        }
        namespace capabilities {
            let disableDamage: boolean;
            let isFlying: boolean;
            let allowFlying: boolean;
            let isCreativeMode: boolean;
            let allowEdit: boolean;
            let flySpeed: number;
            let walkSpeed: number;
            function getFlySpeed(): number;
            function getWalkSpeed(): number;
            function setFlySpeed(json: any): void;
            function setPlayerWalkSpeed(json: any): void;
        }
        let cameraYaw: number;
        let chasingPosX: number;
        let chasingPosY: number;
        let chasingPosZ: number;
        let experience: number;
        let experienceLevel: number;
        let experienceTotal: number;
    }
    let version: string;
    let clientBrand: string;
    function addEventListener(name: string, callback: any): void;
    function removeEventListener(name: string, func: any, slow: any): void;
    function updateComponent(component: string): void;
    function require(component: string): void;
    function update(): void;
    function clickMouse(): void;
    function rightClickMouse(): void;
    function displayToChat(json: any): void;
    function uwuify(iforgorifthisisjson: any): string;
    
}
