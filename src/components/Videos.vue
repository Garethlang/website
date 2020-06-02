<script>
import videos from '@/configs/videos.json';
export default {
    data: function() {
        return {
            videos
        }
    },
    methods: {
        openModal: function(id) {

            this.$emit('open', id)

        },
        formatSrcSet: function(img) {
            return {
                '1': require(`@/assets/images/thumbnails/250px/${img}`),
                '2': require(`@/assets/images/thumbnails/450px/${img}`),
                '3': require(`@/assets/images/thumbnails/800px/${img}`),
            };
        }
    }
}
</script>

<template>
    <div class="videos-wrapper">
        <div class="videos">
            <ul>
                <li v-for="video in videos" @click="openModal(video.id)">
                    <div class="img-wrapper">
                        <img :data-video-id="video.id" :srcset="`${formatSrcSet(video.img)[1]} 250w, ${formatSrcSet(video.img)[2]} 450w, ${formatSrcSet(video.img)[3]} 800w`" :src="require(`@/assets/images/thumbnails/800px/${video.img}`)" :alt="video.alt"/>
                    </div>
                    <div class="description">
                        <h3>{{video.title}}</h3>
                        <p>{{video.subtitle}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        align-items: center;
        grid-gap: $spacing*3;
    }

    li {
        align-self: center;
        position: relative;
        display: flex;

        .img-wrapper {
            display: flex;
            width: 100%;
            height: auto;
            overflow: hidden;
            padding: 56.25% 0 0 0;
        }

        img {
            display: block;
            max-width: 100%;
            max-height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .description{
            display: none;
        }

        &:hover {
            box-shadow: 0 30px 60px -12px rgba(50,50,93,.25),0 18px 36px -18px rgba(0,0,0,.3),0 -12px 36px -8px rgba(0,0,0,.025);
            transform: translateY(-2px);
            cursor: pointer;

            // &::after {
            //     content: '';
            //     background-color: white;
            //     clip-path: polygon(0 0, 100% 50%, 0 100%);
            //     height: 40px;
            //     width: 30px;
            //     color: $neutral-0;
            //     position: absolute;
            //     top: calc(50% - 20px);
            //     left: calc(50% - 15px);
            // }

            // p {
            //     color: white;
            //     display: initial;
            //     display: flex;
            //     align-items: center;
            //     padding: $spacing;
            //     text-align: center;
            //     justify-content: center;
            // }

            .description {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                z-index: 3;

                color: white;
            }

            &:before {
                content: '';
                position: absolute;
                background-color: $neutral-80;
                filter: opacity(0.7);
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                z-index: 2;
            }


        }
    }

    @media screen and (max-width: 1000px) {
        ul {
            grid-template-columns: repeat(1, 1fr);
            // max-height: 500px;
            // overflow-y: scroll;

            li {
                margin: 0 10% 0 10%;
            }
        }
    }

    @media screen and (max-width: 1200px) and (min-width: 1001px) {
        ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .videos-wrapper {
        margin: $spacing*3 $spacing*16 $spacing*3 $spacing*16;
    }

    .videos {
        position: relative;
        height: max-content;

        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

</style>