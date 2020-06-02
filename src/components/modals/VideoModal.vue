<script>
import videos from '@/configs/videos.json';
export default {
    props: {
        'id': {default: null, required: false}
    },
    data: function() {
        return {
            videos: videos,
            index: 0
        }
    },
    mounted: function() {
        this.index = this.videos.find(video => video.id == this.id).position;
    },
    computed: {
        currentVideo: function() {
            return this.videos[this.index];
        },
        hasNextVideo: function() {
            return this.currentVideo.position < this.videos.length-1;
        },
        hasPreviousVideo: function() {
            return this.currentVideo.position > 0;
        },
        posterSet: function() {
            return {
                1: require(`@/assets/images/banners/640px/Maisie-Poster.jpg`),
                2: require(`@/assets/images/banners/1280px/Maisie-Poster.jpg`),
                3: require(`@/assets/images/banners/2560px/Maisie-Poster.jpg`)
            }
        }
    },
    methods: {
        close: function() {
            this.$emit('close');
        },
        nextVideo: function() {
            this.index += 1;
        },
        previousVideo: function() {
            this.index -= 1;
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
                <div class="title">
                    <h3>{{currentVideo.title}}</h3>
                    <p>{{currentVideo.description}}</p>
                </div>
                <div class="controls">
                    <img class="icon-previous" v-if="hasPreviousVideo" src="@/assets/previous.svg" @click="previousVideo()" alt="next video"/>
                    <div v-if="hasPreviousVideo && hasNextVideo" class="dirty-margin-hack"></div>
                    <img class="icon-next" v-if="hasNextVideo" src="@/assets/skip.svg" @click="nextVideo()" alt="previous video"/>
                </div>

            </div>
            <div class="player" v-if="!!currentVideo.poster">
                <img class="poster" width="100%" :src="posterSet[3]" :srcset="`${posterSet[1]} 640px, ${posterSet[2]} 1280px, ${posterSet[3]} 2560px`" :alt="currentVideo.alt"/>
            </div>
            <div class="player" v-else>
                <iframe :src="`https://www.youtube-nocookie.com/embed/${currentVideo.id}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope>
    .actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: $spacing;

        color: white;
    }

    .controls {
        display: flex;
    }

    .dirty-margin-hack {
        margin-right: $spacing;
    }

    .img {
        cursor: pointer;
    }

    .icon-previous, .icon-next {
        cursor: pointer;
        height: 34px;
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

    .rotate-90 {
        transform: rotate(90deg);
    }

    .rotate-270 {
        transform: rotate(270deg);
    }

    
</style>