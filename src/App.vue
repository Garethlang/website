<template>
  <div id="app">
    <VideoModal v-if="modalOpen" :id="id" @close="close"/>
    <ShowreelModal v-if="secondModalOpen" @close="closeSecondModal"/>

    <div id="content">
        <Nav/>
        <Hero @open="openSecondModal()"/>
        <Videos @open="open($event)"/>
        <Bio/>
        <Logos/>
        <Contact/>
    </div>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue';
import Hero from '@/components/Hero.vue';
import Videos from '@/components/Videos.vue';
import Bio from '@/components/Bio.vue';
import Logos from '@/components/Logos.vue';
import Contact from '@/components/Contact.vue';
import VideoModal from '@/components/modals/VideoModal.vue';
import ShowreelModal from '@/components/modals/ShowreelModal.vue';

export default {
    name: 'app',
    components: {
        Nav,
        Hero,
        Videos,
        Bio,
        Logos,
        Contact,
        VideoModal,
        ShowreelModal
    },
    data: function() {
        return {
            modalOpen: false,
            secondModalOpen: false,

            id: null,
            showControls: true
        }
    },
    methods: {
        open: function(id) {
            this.id = id;
            this.modalOpen = true;

            document.getElementById('content').classList.add('blur');
            document.body.classList.add('overflow');
        },
        openSecondModal: function() {
            this.secondModalOpen = true;

            document.getElementById('content').classList.add('blur');
            document.body.classList.add('overflow');
        },
        close: function() {
            this.modalOpen = false;

            document.getElementById('content').classList.remove('blur');
            document.body.classList.remove('overflow');
        },
        closeSecondModal: function() {
            this.secondModalOpen = false;

            document.getElementById('content').classList.remove('blur');
            document.body.classList.remove('overflow');
        },
    }
}
</script>

<style lang="scss">

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: $neutral-70;
        background-color: $neutral-10;
    }

    @media screen and (max-width: 1024px) {


        .hero {
            padding: $spacing*2 !important;
        }

        nav {
            ul {
                // margin: $spacing*2 $spacing*16 $spacing*2 $spacing*16 !important;
            }
        }

        .bio {
            padding: $spacing*2 !important;
        }

        .videos-wrapper {
            margin: $spacing*2 !important;
        }

        .logos-wrapper {
            margin: $spacing*2 !important;
        }

    }

</style>
