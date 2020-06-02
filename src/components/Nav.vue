<script>
export default {
    methods: {
        goToBio: function() {
            const bio = document.querySelector('.bio')
            this.scrollTo(bio.offsetTop)
        },
        goToClients: function() {
            const clients = document.querySelector('.logos');
            this.scrollTo(clients.offsetTop);
        },
        goToProjects: function() {
            const clients = document.querySelector('.videos');
            this.scrollTo(clients.offsetTop);
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

<style lang="scss" scoped>
    nav ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: $neutral-0;
    }

    ul {
        margin: $spacing*2;
    }

    li {
        display: flex;
        align-items: center;
        padding: $spacing $spacing*3;
        cursor: pointer;
        font-weight: 500;
        font-size: 18px;
        transition: background-color 300ms ease-in-out;
        border-radius: $spacing*3;

        &:hover {
            background-color:$secondary-90;
        }
    }

    // img {
    //     filter: invert(1);
    //     margin-right: $spacing;
    //     height: 22px;
    // }

    nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1;
    }
</style>

<template>
    <nav>
        <ul>
            <li @click="goToProjects">
                Projects
            </li>
            <li @click="goToBio">
                About Me
            </li>
            <li @click="goToClients">
                Clients
            </li>
        </ul>
    </nav>
</template>

