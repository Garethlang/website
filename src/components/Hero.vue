<script>
export default {
    methods: {
        openShowreel: function() {
            this.$emit('open');
        },
        goToContact: function() {
            const contact = document.querySelector('.contact-wrapper')
            this.scrollTo(contact.offsetTop)
        },
        scrollTo: function(y) {
            window.scrollTo({
                top: y,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<template>
    <div class="hero">

        <h1>Gareth Lang</h1>
        <h3>
            Editor &amp; Filmmaker
        </h3>

        <div class="buttons">
            <button class="btn-primary" @click="openShowreel()">showreel</button>
            <button class="btn-secondary" @click="goToContact()">contact</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    button {
        font-size: 14px;
    }

    h1, p, .buttons {
        z-index: 3;
    }
    h1, p {
        color: $neutral-0;
    }
    
    h1 {
        margin-bottom: $spacing;
    }

    h3 {
        margin-bottom: $spacing*4;
        color: $neutral-10;
        z-index: 3;
    }

    p {
        max-width: 500px;
        margin-bottom: $spacing*3;
    }

    .hero {
        height: 90vh;
        position: relative; 

        clip-path: polygon(0 0, 0 100%, 100% calc(100% - 50px), 100% 0);
        shape-outside: polygon(0 0, 0 100%, 100% calc(100% - 50px), 100% 0);

        background-color: $neutral-80;
        background-position: top;

        background-image: url('../assets/images/banners/640px/Main-Banner.jpg');

        @media (min-width: 640px) {
            background-image: url('../assets/images/banners/1280px/Main-Banner.jpg');
        }

        @media (min-width: 1280px) {
            background-image: url('../assets/images/banners/2560px/Main-Banner.jpg');
        }

        background-repeat: none;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: $spacing*3 $spacing*16 $spacing*3 $spacing*16;

        &:before {
            content: '';
            position: absolute;
            background-color: $neutral-80;
            filter: opacity(0.7);
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
        }
    }

    .btn-primary {
        margin-right: $spacing*2;
    }
</style>

<style lang="scss" global>
    h1 {
        font-size: 64px !important;
        font-weight: 500 !important;
    }

    p {
        font-size: 16px !important;
        line-height: $spacing*2.5 !important;
        font-weight: 300 !important;
    }

    .btn {
        width: max-content;
        border: 0;
        font-family: inherit;
        border-radius: $radius;
        text-transform: uppercase;
        min-width: 80px;
        padding: $spacing $spacing*2;
        font-weight: 700;

        &:disabled {
            opacity: 0.3;
            pointer-events: none;
        }

        &:active {
            box-shadow: inset 0px 2px 5px 1px rgba(0,0,0,0.3);
        }

        &:hover {
            cursor: pointer;
        }
    }

    .btn-primary {
        @extend .btn;
        background-color: $secondary-80;
        color: $neutral-0;

        &:hover {
            background-color: $secondary-90;
        }
    }

    .btn-secondary {
        @extend .btn;
        background-color: $neutral-0;
        color: $secondary-80;

        &:hover {
            background-color: $neutral-10;
        }
    }
    
</style>