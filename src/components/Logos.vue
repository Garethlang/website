<script>
import Contact from './Contact'
import logoConfig from '@/configs/logos.json';
export default {
    components: {
        Contact
    },
    computed: {
        logos: function() {
            return logoConfig;
        }
    },
    methods: {
        showMore: function() {
            let list = document.querySelector('.logos');
            list.classList.add('show-more');
        }
    }
}
</script>

<template>
    <div class="logos-wrapper">
        <div class="logos">
            <h2>Companies I've Worked With</h2>

            <button class="btn-primary" @click="showMore">Show More Clients</button>

            <ul class="logos-list">
                <li v-for="logo in logos" :key="logo.path">
                    <img width="100%" height="100%" :src="require(`@/assets/images/logos/${logo.path}`)" alt="debenhams"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    h2 {
        text-align: center;
        color: $secondary-70;
        text-transform: capitalize;
        margin-bottom: $spacing*3;
    }

    .logos {
        z-index: 1;
        position: relative;
        margin: $spacing*3 0 $spacing*3 0;

        &:hover {
            ul {
                filter: blur(5px);
            }
            .btn-primary {
                display: initial;
                opacity: 1;
                // transform: translate(-50%,-7px);
            }
        }

        &.show-more {
            pointer-events: none;
            ul {
                max-height: initial;
            }
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(4, 150px);
        justify-content: center;
        max-height: 350px;
        overflow: hidden;
        grid-template-rows: auto;
        align-items: center;
        grid-gap: $spacing*6;
        justify-items: center;
    }

    .btn-primary {
        z-index: 2;
        display: none;
        opacity: 0;
        position: absolute;
        left: 50%;
        top: calc(50% - 55px);
        transform: translate(-50%,0);
    }

    @media screen and (max-width: 950px) and (min-width: 801px) {
        ul {
            grid-template-columns: repeat(3, 150px);
        }
    }

    @media screen and (max-width: 800px){
        ul {
            grid-template-columns: repeat(3, 100px);
            max-height: 400px;
        }
    }
</style>