<script>
export default {
    methods: {
        close: function() {
            this.$emit('close');
        }
    }
}
</script>

<template>
    <div class="modal-wrapper">
        <div class="background" @click="close"></div>
        <div class="modal-close">
            <img src="@/assets/close.svg" @click="close" alt="close video"/>
        </div>
        <div class="modal">
            <div class="actions">
                <!-- <h3>{{currentVideo.description}}</h3> -->
            </div>
            <div class="player">
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/423226366?byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope>

    .img {
        cursor: pointer;
    }

    h3 {
        color: white;
        text-transform: capitalize;
        display: flex;
        align-items: center;
    }

</style>

<style lang="scss" global>
    .modal {
        z-index: 6;
        position: fixed;
        width: 80%;
    }

    .background {
        background-color: rgba(0,0,0,0.3);
        z-index: 5;
        width: 100%;
        height: 100%;
        position: fixed;
    }

    .modal-close {
        z-index: 6;
        position: absolute;
        top: $spacing*4;
        right: $spacing*4;
        width: 29.75px;
        cursor: pointer;
    }

    .player {
        position: relative;
        padding-bottom: 56.25%;
        height: 0; 
        overflow: hidden;
    }

    .player iframe,
    .player object,
    .player embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .modal-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 100%;
    }
    
</style>