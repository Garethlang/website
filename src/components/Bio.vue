<template>
    <div class="bio">
        <div class="about-me">
            <h2>About Me</h2>
            <p>I am a freelance editor &amp; filmmaker with over 7 years experience, working across various sectors of the industry including, Film, Broadcast, Corporate and Events. Most recently I have finished work as the sole editor on a feature-length documentary funded by the BFI.</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img {
        margin-top: $spacing*2;
    }

    .bio {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        text-align: left;
        justify-content: center;
        position: relative;
        height: 60vh;
        clip-path: polygon(0 50px, 0 100%, 100% 100%, 100% 0);
        padding: $spacing*3 $spacing*16 $spacing*3 $spacing*16;

        background-image: url('../assets/images/banners/640px/About-Me.jpg');
        background-position: center;
        background-size: contain;

        @media (min-width: 640px) {
            background-image: url('../assets/images/banners/1280px/About-Me.jpg');
        }

        @media (min-width: 1280px) {
            background-image: url('../assets/images/banners/2560px/About-Me.jpg');
        }
        

        background-repeat: none;
        background-size: cover;

        &:before {
            content: '';
            position: absolute;
            background-color: $neutral-90;
            filter: opacity(0.7);
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
        }
    }

    .about-me {
        max-width: 400px;
        z-index: 2;
    }

    h2 {
        color: $secondary-70;
        margin-bottom: $spacing;
        text-transform: capitalize;
    }

    p {
        color: white;
    }
</style>

<style lang="scss" global>
    h2 {
        font-size: 32px !important;
        text-transform: uppercase;
        font-weight: 700 !important;
    }
</style>